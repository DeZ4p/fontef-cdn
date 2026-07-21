/* =============================================
   FontEF Pro v1.0
   Author: @DeZ4p | t.me/DeZ4p
   ============================================= */

(function () {
    'use strict';

    var CDN = 'https://dez4p.github.io/fontef-cdn';
    var CFG = null;
    var lang = 'en';
    var hasRoot = false;
    var rootChecked = false;
    var fontFile = null;
    var preset = 'universal';
    var pvSizes = {};
    var __inv = null;
    var __bridgeLabel = '';

    function $(id) { return document.getElementById(id); }
    function pad(n) { return n < 10 ? '0' + n : '' + n; }
    function sq(s) { return "'" + String(s).replace(/'/g, "'\\''") + "'"; }
    function fmtSz(b) {
        if (b < 1024) return b + ' B';
        if (b < 1048576) return (b / 1024).toFixed(1) + ' KB';
        return (b / 1048576).toFixed(1) + ' MB';
    }

    function t(k) {
        if (!CFG) return k;
        var lo = CFG.languages[lang];
        if (lo && lo.strings && lo.strings[k]) return lo.strings[k];
        var en = CFG.languages['en'];
        if (en && en.strings && en.strings[k]) return en.strings[k];
        return k;
    }

    /* =========================
       LOAD CONFIG FROM SERVER
    ========================= */
    function loadConfig(cb) {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', CDN + '/config.json?t=' + Date.now(), true);
        xhr.timeout = 10000;
        xhr.onload = function () {
            if (xhr.status === 200) {
                try {
                    CFG = JSON.parse(xhr.responseText);
                    log('Config loaded from server');
                    cb(true);
                } catch (e) {
                    log('Config parse error: ' + e.message);
                    cb(false);
                }
            } else {
                log('Config load failed: HTTP ' + xhr.status);
                cb(false);
            }
        };
        xhr.onerror = function () { log('Config network error'); cb(false); };
        xhr.ontimeout = function () { log('Config timeout'); cb(false); };
        xhr.send();
    }

    /* =========================
       BUILD DYNAMIC UI FROM CONFIG
    ========================= */
    function buildLangBar() {
        var bar = $('langBar');
        if (!bar || !CFG) return;
        bar.innerHTML = '';

        var langs = CFG.languages;
        var defaultLang = (CFG.ui && CFG.ui.default_lang) || 'en';
        var keys = Object.keys(langs);

        for (var i = 0; i < keys.length; i++) {
            var k = keys[i];
            var lo = langs[k];
            var btn = document.createElement('button');
            btn.className = 'lang-btn' + (k === defaultLang ? ' active' : '');
            btn.setAttribute('data-lang', k);
            btn.innerHTML = '<span class="lang-flag">' + lo.flag + '</span><span class="lang-name">' + lo.code + '</span>';
            bar.appendChild(btn);
        }

        lang = defaultLang;

        var btns = bar.querySelectorAll('.lang-btn');
        for (var j = 0; j < btns.length; j++) {
            (function (btn) {
                btn.addEventListener('click', function (e) {
                    e.preventDefault();
                    var all = bar.querySelectorAll('.lang-btn');
                    for (var x = 0; x < all.length; x++) all[x].classList.remove('active');
                    btn.classList.add('active');
                    lang = btn.getAttribute('data-lang');
                    translate();
                });
            })(btns[j]);
        }
    }

    function buildPresets() {
        var grid = $('presetGrid');
        if (!grid || !CFG || !CFG.presets) return;
        grid.innerHTML = '';

        for (var i = 0; i < CFG.presets.length; i++) {
            var p = CFG.presets[i];
            var btn = document.createElement('button');
            btn.className = 'preset-btn' + (i === 0 ? ' active' : '');
            btn.setAttribute('data-preset', p.id);
            btn.innerHTML = '<div class="preset-ico">' + p.icon + '</div><span>' + p.name + '</span><span class="preset-sub">' + p.sub + '</span>';
            grid.appendChild(btn);
        }

        var btns = grid.querySelectorAll('.preset-btn');
        for (var j = 0; j < btns.length; j++) {
            (function (btn) {
                btn.addEventListener('click', function (e) {
                    e.preventDefault();
                    var all = grid.querySelectorAll('.preset-btn');
                    for (var x = 0; x < all.length; x++) all[x].classList.remove('active');
                    btn.classList.add('active');
                    preset = btn.getAttribute('data-preset');
                    var sp = btn.querySelectorAll('span');
                    if ($('presetName') && sp.length) $('presetName').textContent = sp[0].textContent;
                    log('Preset: ' + preset);
                });
            })(btns[j]);
        }
    }

    function buildPreviews() {
        var section = $('previewSection');
        if (!section || !CFG || !CFG.previews) return;
        section.innerHTML = '';

        var minSz = (CFG.ui && CFG.ui.preview_min_size) || 10;
        var maxSz = (CFG.ui && CFG.ui.preview_max_size) || 36;
        var defSz = (CFG.ui && CFG.ui.preview_default_size) || 16;

        for (var i = 0; i < CFG.previews.length; i++) {
            var pv = CFG.previews[i];
            pvSizes[pv.id] = defSz;

            var block = document.createElement('div');
            block.className = 'prev-block';

            var header = '<div class="prev-header">';
            header += '<span class="prev-flag">' + pv.flag + '</span>';
            header += '<span class="prev-lang">' + pv.lang + '</span>';
            header += '<div class="prev-size-ctrl">';
            header += '<button class="sz-btn sz-minus" data-target="' + pv.id + '"><svg viewBox="0 0 24 24" width="14" height="14"><line x1="5" y1="12" x2="19" y2="12" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg></button>';
            header += '<span class="sz-val" id="sz-' + pv.id + '">' + defSz + '</span>';
            header += '<button class="sz-btn sz-plus" data-target="' + pv.id + '"><svg viewBox="0 0 24 24" width="14" height="14"><line x1="12" y1="5" x2="12" y2="19" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><line x1="5" y1="12" x2="19" y2="12" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg></button>';
            header += '<button class="sz-btn sz-reset" data-target="' + pv.id + '"><svg viewBox="0 0 24 24" width="12" height="12"><polyline points="1,4 1,10 7,10" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M3.51 15a9 9 0 102.13-9.36L1 10" fill="none" stroke="currentColor" stroke-width="2.5"/></svg></button>';
            header += '</div></div>';

            var body = '<p class="prev-text ' + pv.id + '"' + (pv.dir === 'rtl' ? ' dir="rtl"' : '') + '>' + pv.text + '</p>';
            if (pv.sub) {
                body += '<p class="prev-text ' + pv.id + ' prev-sm"' + (pv.dir === 'rtl' ? ' dir="rtl"' : '') + '>' + pv.sub + '</p>';
            }

            block.innerHTML = header + body;
            section.appendChild(block);
        }

        initPreviewSizes(minSz, maxSz, defSz);
    }

    function buildBranding() {
        if (!CFG || !CFG.branding) return;
        var b = CFG.branding;

        var footer = document.querySelector('.footer');
        if (footer) {
            footer.innerHTML = '<div class="footer-line">' + b.footer_text + '</div>' +
                '<div class="footer-line">Developed by <a href="' + b.footer_link + '" target="_blank" class="dev-link">' + b.footer_dev + '</a></div>';
        }

        var badgeArea = document.querySelector('.header-sub');
        if (badgeArea && b.badges) {
            badgeArea.innerHTML = '';
            for (var i = 0; i < b.badges.length; i++) {
                var span = document.createElement('span');
                span.className = 'badge' + (i === 1 ? ' badge-ksu' : '');
                span.textContent = b.badges[i];
                badgeArea.appendChild(span);
            }
        }
    }

    function buildUIVisibility() {
        if (!CFG || !CFG.ui) return;
        var ui = CFG.ui;
        if (!ui.show_reset && $('resetBtn')) $('resetBtn').style.display = 'none';
        if (!ui.show_backup && $('backupBtn')) $('backupBtn').style.display = 'none';
        if (!ui.show_refresh && $('refreshBtn')) $('refreshBtn').style.display = 'none';
        if (!ui.show_reboot && $('rebootBtn')) $('rebootBtn').style.display = 'none';
        if (!ui.show_logs && $('logCard')) $('logCard').style.display = 'none';
        if (!ui.show_stats) {
            var sr = document.querySelector('.stats-row');
            if (sr) sr.style.display = 'none';
        }
        if (!ui.show_presets) {
            var pc = $('presetGrid');
            if (pc && pc.parentElement) pc.parentElement.style.display = 'none';
        }
    }

    /* =========================
       TRANSLATE
    ========================= */
    function translate() {
        var map = {
            lbl_preset: 'preset', lbl_all_roms: 'all_roms', lbl_upload: 'upload',
            lbl_drag: 'drag', lbl_or_click: 'or_click', lbl_preview: 'preview',
            lbl_apply: 'apply', lbl_reset: 'reset', lbl_backup: 'backup',
            lbl_refresh: 'refresh', lbl_reboot: 'reboot', lbl_logs: 'logs',
            lbl_installed: 'installed', lbl_backups: 'backups',
            lbl_overlay: 'overlay', lbl_android: 'android'
        };
        for (var id in map) {
            var el = $(id);
            if (el) el.textContent = t(map[id]);
        }
        if (rootChecked) {
            if ($('rootTitle')) $('rootTitle').textContent = hasRoot ? t('connected') : t('no_root');
        } else {
            if ($('rootTitle')) $('rootTitle').textContent = t('checking');
        }

        var lo = CFG && CFG.languages[lang];
        var dir = (lo && lo.dir) || 'ltr';
        document.documentElement.dir = dir;
        document.documentElement.lang = lang;
    }

    /* =========================
       UNIVERSAL KSU BRIDGE
    ========================= */
    function findApis() {
        var apis = [];
        var on = ['ksu','KernelSU','kernelsu','$ksu','ksud','su','Shell','RootShell','Superuser','magisk','Magisk'];
        var mn = ['exec','execute','run','shell','cmd','command','su','spawn','call','invoke','runCommand','execCommand','runShell'];
        function scan(sc, nm) {
            if (!sc) return;
            for (var o = 0; o < on.length; o++) {
                try {
                    var obj = sc[on[o]];
                    if (!obj || typeof obj !== 'object') continue;
                    for (var m = 0; m < mn.length; m++) {
                        try {
                            if (typeof obj[mn[m]] === 'function') {
                                var l = nm + '.' + on[o] + '.' + mn[m];
                                var d = false;
                                for (var a = 0; a < apis.length; a++) if (apis[a].l === l) { d = true; break; }
                                if (!d) apis.push({ o: obj, f: obj[mn[m]], l: l, n: obj[mn[m]].length });
                            }
                        } catch (e) {}
                    }
                } catch (e) {}
            }
            try {
                var keys = Object.getOwnPropertyNames ? Object.getOwnPropertyNames(sc) : Object.keys(sc);
                for (var k = 0; k < keys.length; k++) {
                    try {
                        var val = sc[keys[k]];
                        if (!val || typeof val !== 'object' || val === sc) continue;
                        for (var m2 = 0; m2 < mn.length; m2++) {
                            try {
                                if (typeof val[mn[m2]] === 'function') {
                                    var l2 = nm + '.' + keys[k] + '.' + mn[m2];
                                    var d2 = false;
                                    for (var a2 = 0; a2 < apis.length; a2++) if (apis[a2].l === l2) { d2 = true; break; }
                                    if (!d2) apis.push({ o: val, f: val[mn[m2]], l: l2, n: val[mn[m2]].length });
                                }
                            } catch (e) {}
                        }
                    } catch (e) {}
                }
            } catch (e) {}
        }
        scan(window, 'w');
        try { if (window.parent && window.parent !== window) scan(window.parent, 'p'); } catch (e) {}
        try { if (window.top && window.top !== window) scan(window.top, 't'); } catch (e) {}
        return apis;
    }

    function norm(a, b, c) {
        if (Array.isArray(a)) return { e: Number(a[0] || 0), o: String(a[1] || ''), r: String(a[2] || '') };
        if (a !== null && a !== undefined && typeof a === 'object') {
            var cd = -1, ck = ['errno','code','exitCode','status','ret','returnCode'];
            for (var i = 0; i < ck.length; i++) if (a[ck[i]] !== undefined) { cd = Number(a[ck[i]]); break; }
            var ot = '', ok = ['stdout','out','output','result','text','data','body'];
            for (var j = 0; j < ok.length; j++) if (a[ok[j]] !== undefined) { ot = String(a[ok[j]]); break; }
            var er = '', ek = ['stderr','err','error','message','msg'];
            for (var k2 = 0; k2 < ek.length; k2++) if (a[ek[k2]] !== undefined) { er = String(a[ek[k2]]); break; }
            if (cd === -1 && ot) cd = 0;
            return { e: cd, o: ot, r: er };
        }
        if (typeof a === 'string') return { e: 0, o: a, r: '' };
        if (typeof a === 'number') return { e: a, o: String(b || ''), r: String(c || '') };
        return { e: -1, o: String(b || ''), r: String(c || '') };
    }

    function genCalls(api, cmd) {
        var sh = 'sh -c ' + sq(cmd), c = [];
        c.push({ n: '3sj', r: function (f, d) { return f(sh, '{}', d); } });
        c.push({ n: '3so', r: function (f, d) { return f(sh, {}, d); } });
        c.push({ n: '3sn', r: function (f, d) { return f(sh, null, d); } });
        c.push({ n: '3su', r: function (f, d) { return f(sh, undefined, d); } });
        c.push({ n: '3se', r: function (f, d) { return f(sh, '', d); } });
        c.push({ n: '3rj', r: function (f, d) { return f(cmd, '{}', d); } });
        c.push({ n: '3ro', r: function (f, d) { return f(cmd, {}, d); } });
        c.push({ n: '3rn', r: function (f, d) { return f(cmd, null, d); } });
        c.push({ n: '2s', r: function (f, d) { return f(sh, d); } });
        c.push({ n: '2r', r: function (f, d) { return f(cmd, d); } });
        c.push({ n: '1sj', r: function (f) { return f(sh, '{}'); } });
        c.push({ n: '1so', r: function (f) { return f(sh, {}); } });
        c.push({ n: '1sn', r: function (f) { return f(sh, null); } });
        c.push({ n: '1s', r: function (f) { return f(sh); } });
        c.push({ n: '1rj', r: function (f) { return f(cmd, '{}'); } });
        c.push({ n: '1ro', r: function (f) { return f(cmd, {}); } });
        c.push({ n: '1r', r: function (f) { return f(cmd); } });
        c.push({ n: 'ac', r: function (f, d) { return f(['sh', '-c', cmd], d); } });
        c.push({ n: 'ap', r: function (f) { return f(['sh', '-c', cmd]); } });
        c.push({ n: 'oc', r: function (f, d) { return f({ cmd: sh }, d); } });
        c.push({ n: 'op', r: function (f) { return f({ cmd: sh }); } });
        c.push({ n: 'osc', r: function (f, d) { return f({ shell: cmd }, d); } });
        c.push({ n: 'osp', r: function (f) { return f({ shell: cmd }); } });
        return c;
    }

    function tryCall(api, call, ms, cb) {
        var done = false;
        var tm = setTimeout(function () { if (!done) { done = true; cb(null); } }, ms);
        function fin(a, b, c) { if (done) return; done = true; clearTimeout(tm); cb(norm(a, b, c)); }
        try {
            var ret;
            if (call.r.length >= 2) ret = call.r(api.f.bind(api.o), function (a, b, c) { fin(a, b, c); });
            else ret = call.r(api.f.bind(api.o));
            if (ret && typeof ret.then === 'function') ret.then(function (r) { fin(r); }).catch(function (e) { fin(-1, '', String(e)); });
            else if (ret !== undefined && ret !== null) setTimeout(function () { if (!done) fin(ret); }, 80);
        } catch (e) { if (!done) { done = true; clearTimeout(tm); cb(null); } }
    }

    function isRootOk(r) {
        if (!r) return false;
        var o = String(r.o || '').trim();
        return o.indexOf('uid=0') !== -1 || o.indexOf('KSU_OK') !== -1 || o === 'root' || o === '0' || (r.e === 0 && o.length > 0 && !r.r);
    }

    function ensureBridge(cb) {
        if (__inv) { cb(true); return; }
        log(t('bridge_searching'));
        var st = Date.now();
        (function poll() {
            var apis = findApis();
            if (!apis.length) {
                if (Date.now() - st > 12000) { log(t('bridge_fail')); cb(false, 'No KSU API'); return; }
                setTimeout(poll, 250); return;
            }
            var ll = []; for (var i = 0; i < apis.length; i++) ll.push(apis[i].l);
            log('APIs: ' + ll.join(', '));
            log(t('bridge_testing'));
            var cmds = ['printf KSU_OK', 'echo KSU_OK', 'id', 'id -u', 'whoami'];
            var ai = 0, ci = 0, ti = 0, tot = 0;
            function next() {
                if (ai >= apis.length) { log(t('bridge_fail') + ' (' + tot + ')'); cb(false, 'No bridge (' + tot + ')'); return; }
                var api = apis[ai], calls = genCalls(api, cmds[ti]);
                if (ci >= calls.length) { ci = 0; ti++; if (ti >= cmds.length) { ti = 0; ai++; } next(); return; }
                var call = calls[ci]; tot++;
                if (tot % 20 === 0) log(t('bridge_testing') + ' ' + tot + '...');
                tryCall(api, call, 2200, function (res) {
                    if (isRootOk(res)) {
                        __bridgeLabel = api.l + ' -> ' + call.n;
                        log(t('bridge_found') + ': ' + __bridgeLabel);
                        var ca = api, cn = call.n;
                        __inv = function (script, cb2) {
                            var rc = genCalls(ca, script), rc2 = null;
                            for (var r = 0; r < rc.length; r++) if (rc[r].n === cn) { rc2 = rc[r]; break; }
                            if (!rc2) rc2 = rc[0];
                            tryCall(ca, rc2, 30000, function (res2) {
                                if (!res2) { cb2(-1, '', 'No response'); return; }
                                cb2(res2.e, res2.o, res2.r);
                            });
                        };
                        cb(true); return;
                    }
                    ci++; next();
                });
            }
            next();
        })();
    }

    function shExec(s, cb) {
        ensureBridge(function (ok, r) {
            if (!ok) { cb(-1, '', r || 'No bridge'); return; }
            __inv(s, cb);
        });
    }

    /* =========================
       LOG / TOAST / UI
    ========================= */
    function log(m) {
        var c = $('logCard'), d = $('logContent');
        if (!c || !d) return;
        c.classList.add('show');
        var n = new Date();
        d.textContent += '[' + pad(n.getHours()) + ':' + pad(n.getMinutes()) + ':' + pad(n.getSeconds()) + '] ' + m + '\n';
        d.scrollTop = d.scrollHeight;
    }

    function toast(m, ty) {
        var old = document.querySelector('.toast');
        if (old) old.remove();
        var el = document.createElement('div');
        el.className = 'toast ' + (ty || 'info');
        el.textContent = m;
        document.body.appendChild(el);
        setTimeout(function () { el.classList.add('show'); }, 30);
        setTimeout(function () { el.classList.remove('show'); setTimeout(function () { if (el.parentNode) el.remove(); }, 400); }, 3200);
    }

    function setRoot(ty, ti, de) {
        var c = $('rootCard');
        if (!c) return;
        c.className = 'root-card';
        if (ty === 'ok') c.classList.add('ok');
        if (ty === 'err') c.classList.add('err');
        if ($('rootTitle')) $('rootTitle').textContent = ti;
        if ($('rootDetail')) $('rootDetail').textContent = de || '';
    }

    function showProg(s) {
        var w = $('progressWrap');
        if (!w) return;
        if (s) w.classList.add('show');
        else { w.classList.remove('show'); if ($('progressFill')) $('progressFill').style.width = '0%'; if ($('progressPct')) $('progressPct').textContent = '0%'; if ($('progressTitle')) $('progressTitle').textContent = ''; if ($('progressSteps')) $('progressSteps').textContent = ''; }
    }

    function setProg(p, tx) {
        if ($('progressFill')) $('progressFill').style.width = p + '%';
        if ($('progressPct')) $('progressPct').textContent = p + '%';
        if ($('progressTitle')) $('progressTitle').textContent = tx;
    }

    function addStep(tx) { if ($('progressSteps')) $('progressSteps').textContent += '✓ ' + tx + '\n'; }

    /* =========================
       ROOT CHECK
    ========================= */
    function checkRoot() {
        rootChecked = false; hasRoot = false;
        setRoot('', t('checking'), '');
        ensureBridge(function (ok, reason) {
            if (!ok) { rootChecked = true; setRoot('err', t('no_root'), reason); return; }
            shExec('id', function (e, o) {
                var out = String(o || '').trim();
                log('root(id): ' + out.substring(0, 80));
                if (e === 0 && out.indexOf('uid=0') !== -1) { rootChecked = true; hasRoot = true; setRoot('ok', t('connected'), ''); loadDevice(); return; }
                shExec('id -u', function (e2, o2) {
                    if (e2 === 0 && String(o2 || '').trim() === '0') { rootChecked = true; hasRoot = true; setRoot('ok', t('connected'), ''); loadDevice(); return; }
                    shExec('whoami', function (e3, o3) {
                        rootChecked = true;
                        if (e3 === 0 && String(o3 || '').trim() === 'root') { hasRoot = true; setRoot('ok', t('connected'), ''); loadDevice(); }
                        else { hasRoot = false; setRoot('err', t('no_root'), 'Commands failed'); }
                    });
                });
            });
        });
    }

    function loadDevice() {
        log(t('device_info'));
        shExec('getprop ro.product.model', function (e, s) { if (e === 0 && s && $('metaDeviceText')) $('metaDeviceText').textContent = String(s).trim(); });
        shExec('getprop ro.build.display.id', function (e, s) { if (e === 0 && s && $('metaRomText')) $('metaRomText').textContent = String(s).trim().substring(0, 30); });
        shExec('getprop ro.build.version.release', function (e, s) { if (e === 0 && s) { var v = String(s).trim(); if ($('statAndroid')) $('statAndroid').textContent = v; if ($('metaKsuText')) $('metaKsuText').textContent = 'Android ' + v; } });
        shExec('ls /data/adb/modules/FontEF_Pro/system/fonts/ 2>/dev/null | wc -l', function (e, s) { if (e === 0 && $('statFonts')) $('statFonts').textContent = String(s || '0').trim(); });
        shExec("find /data/adb/FontEF_Pro_backup -maxdepth 1 -type d -name 'backup_*' 2>/dev/null | wc -l", function (e, s) { if (e === 0 && $('statBackups')) $('statBackups').textContent = String(s || '0').trim(); });
        shExec('test -d /data/adb/overlay && echo Y || echo N', function (e, s) { if ($('statOverlay')) $('statOverlay').textContent = String(s || '').trim() === 'Y' ? '✓' : '✗'; });
    }

    /* =========================
       FILE HANDLING
    ========================= */
    function handleFile(file) {
        var name = file.name.toLowerCase();
        if (name.indexOf('.ttf') === -1 && name.indexOf('.otf') === -1) { toast(t('bad_file'), 'error'); return; }
        fontFile = file;
        if ($('fileName')) $('fileName').textContent = file.name;
        if ($('fileSize')) $('fileSize').textContent = fmtSz(file.size);
        if ($('fileInfo')) $('fileInfo').classList.add('show');
        if ($('dropZone')) $('dropZone').classList.add('hidden');
        if ($('previewCard')) $('previewCard').classList.add('show');
        if ($('applyBtn')) $('applyBtn').disabled = false;
        var reader = new FileReader();
        reader.onload = function (ev) {
            try {
                var face = new FontFace('PreviewFont', ev.target.result);
                face.load().then(function (ld) {
                    document.fonts.add(ld);
                    var lines = document.querySelectorAll('.prev-text');
                    for (var i = 0; i < lines.length; i++) lines[i].style.fontFamily = 'PreviewFont, sans-serif';
                }).catch(function () {});
            } catch (err) {}
        };
        reader.readAsArrayBuffer(file);
        toast(t('selected'), 'success');
        log('File: ' + file.name + ' (' + fmtSz(file.size) + ')');
    }

    function clearFile() {
        fontFile = null;
        if ($('fontInput')) $('fontInput').value = '';
        if ($('fileInfo')) $('fileInfo').classList.remove('show');
        if ($('dropZone')) $('dropZone').classList.remove('hidden');
        if ($('previewCard')) $('previewCard').classList.remove('show');
        if ($('applyBtn')) $('applyBtn').disabled = true;
        var lines = document.querySelectorAll('.prev-text');
        for (var i = 0; i < lines.length; i++) lines[i].style.fontFamily = '';
    }

    /* =========================
       UNIVERSAL APPLY
    ========================= */
    function applyFont() {
        if (!fontFile) { toast(t('no_file'), 'error'); return; }
        if (!hasRoot) { toast(t('no_root'), 'error'); return; }
        if ($('applyBtn')) $('applyBtn').disabled = true;
        showProg(true); setProg(5, t('copying')); log(t('applying'));

        var AF = (CFG && CFG.font_targets) || [];

        var reader = new FileReader();
        reader.onload = function (ev) {
            var bytes = new Uint8Array(ev.target.result);
            var bin = '';
            for (var i = 0; i < bytes.length; i++) bin += String.fromCharCode(bytes[i]);
            var b64 = btoa(bin);
            var tmp = '/data/local/tmp/fontef_upload.ttf', tmpB = tmp + '.b64';

            shExec('rm -f ' + tmp + ' ' + tmpB, function () {
                var cs = 32768, parts = [];
                for (var i = 0; i < b64.length; i += cs) parts.push(b64.substring(i, i + cs));
                var idx = 0;
                function wNext() {
                    if (idx >= parts.length) {
                        addStep(t('copying')); setProg(45, t('applying'));
                        shExec('if command -v base64 >/dev/null 2>&1; then base64 -d ' + tmpB + ' > ' + tmp + '; elif command -v toybox >/dev/null 2>&1; then toybox base64 -d ' + tmpB + ' > ' + tmp + '; elif command -v busybox >/dev/null 2>&1; then busybox base64 -d ' + tmpB + ' > ' + tmp + '; else exit 1; fi; rm -f ' + tmpB, function (errno) {
                            if (errno !== 0) { log('Decode fail'); if ($('applyBtn')) $('applyBtn').disabled = false; showProg(false); toast(t('apply_fail'), 'error'); return; }
                            doApply(tmp, AF);
                        });
                        return;
                    }
                    var op = idx === 0 ? '>' : '>>';
                    setProg(5 + Math.floor((idx / parts.length) * 35), t('copying'));
                    shExec("printf '%s' '" + parts[idx] + "' " + op + ' ' + tmpB, function (errno) {
                        if (errno !== 0) { log('Write fail'); if ($('applyBtn')) $('applyBtn').disabled = false; showProg(false); toast(t('apply_fail'), 'error'); return; }
                        idx++; wNext();
                    });
                }
                wNext();
            });
        };
        reader.readAsArrayBuffer(fontFile);
    }

    function doApply(tmp, AF) {
        setProg(50, t('applying')); addStep(t('applying'));
        var s = 'MP="/data/adb/modules/FontEF_Pro"\nMETABASE="/data/adb/modules/meta-overlayfs/mnt"\nMETADIR="$METABASE/FontEF_Pro"\n';
        s += 'for D in system product system_ext vendor; do mkdir -p "$MP/$D/fonts" "$MP/$D/etc" 2>/dev/null; done\n';
        for (var i = 0; i < AF.length; i++) {
            s += 'cp -f ' + tmp + ' "$MP/system/fonts/' + AF[i] + '" 2>/dev/null\n';
            s += 'cp -f ' + tmp + ' "$MP/product/fonts/' + AF[i] + '" 2>/dev/null\n';
        }
        s += 'echo "STEP_MAIN"\n';
        s += 'if [ -d /system_ext/fonts ] || [ -d /system/system_ext/fonts ]; then\n';
        for (var j = 0; j < AF.length; j++) s += '  cp -f ' + tmp + ' "$MP/system_ext/fonts/' + AF[j] + '" 2>/dev/null\n';
        s += '  echo "STEP_SYSEXT"\nfi\n';
        s += 'if [ -d /vendor/fonts ] || [ -d /system/vendor/fonts ]; then\n';
        for (var k = 0; k < AF.length; k++) s += '  cp -f ' + tmp + ' "$MP/vendor/fonts/' + AF[k] + '" 2>/dev/null\n';
        s += '  echo "STEP_VENDOR"\nfi\n';
        s += 'for D in system product system_ext vendor; do if [ -d "$MP/$D/fonts" ]; then find "$MP/$D" -type d -exec chmod 755 {} + 2>/dev/null; find "$MP/$D/fonts" -type f -exec chmod 644 {} + 2>/dev/null; find "$MP/$D/fonts" -type f -exec chown root:root {} + 2>/dev/null; find "$MP/$D/fonts" -type f -exec chcon u:object_r:system_file:s0 {} + 2>/dev/null; fi; done\necho "STEP_PERMS"\n';
        s += 'if [ -d "$METABASE" ]; then for D in system product system_ext vendor; do if [ -d "$MP/$D/fonts" ] && [ "$(ls -A $MP/$D/fonts/ 2>/dev/null)" ]; then mkdir -p "$METADIR/$D/fonts" 2>/dev/null; cp -af "$MP/$D/fonts/"* "$METADIR/$D/fonts/" 2>/dev/null; find "$METADIR/$D" -type d -exec chmod 755 {} + 2>/dev/null; find "$METADIR/$D/fonts" -type f -exec chmod 644 {} + 2>/dev/null; find "$METADIR/$D/fonts" -type f -exec chown root:root {} + 2>/dev/null; find "$METADIR/$D/fonts" -type f -exec chcon u:object_r:system_file:s0 {} + 2>/dev/null; fi; done; echo "STEP_META"; fi\n';
        s += 'if [ -d "/data/adb/overlay" ]; then for D in system product system_ext vendor; do if [ -d "$MP/$D/fonts" ] && [ "$(ls -A $MP/$D/fonts/ 2>/dev/null)" ]; then mkdir -p "/data/adb/overlay/$D/fonts" 2>/dev/null; cp -af "$MP/$D/fonts/"* "/data/adb/overlay/$D/fonts/" 2>/dev/null; fi; done; echo "STEP_OVERLAY"; fi\n';
        s += 'if command -v ksud >/dev/null 2>&1; then ksud module update 2>/dev/null; echo "STEP_KSUD"; fi\n';
        s += 'rm -f ' + tmp + '\necho "APPLY_OK"\n';

        shExec(s, function (e, o, r) {
            var out = String(o || '');
            log('Apply: ' + out.replace(/\n/g, ' | ').substring(0, 300));
            if (out.indexOf('STEP_MAIN') !== -1) addStep(t('step_main'));
            if (out.indexOf('STEP_PERMS') !== -1) addStep(t('step_perms'));
            if (out.indexOf('STEP_META') !== -1) addStep(t('step_meta'));
            if (out.indexOf('STEP_OVERLAY') !== -1) addStep(t('step_overlay'));
            if (out.indexOf('STEP_SYSEXT') !== -1) addStep(t('step_sysext'));
            if (out.indexOf('STEP_VENDOR') !== -1) addStep(t('step_vendor'));
            if (out.indexOf('STEP_KSUD') !== -1) addStep(t('step_ksud'));
            setProg(100, t('done'));
            if (out.indexOf('APPLY_OK') !== -1) { log(t('applied')); toast(t('applied'), 'success'); }
            else { log(t('apply_fail')); toast(t('apply_fail'), 'error'); }
            if ($('applyBtn')) $('applyBtn').disabled = false;
            loadDevice();
            setTimeout(function () { showProg(false); }, 2500);
        });
    }

    /* =========================
       RESET / BACKUP / REFRESH / REBOOT
    ========================= */
    function resetFont() {
        if (!hasRoot) { toast(t('no_root'), 'error'); return; }
        if (!confirm(t('confirm_reset'))) return;
        showProg(true); setProg(20, t('resetting')); log(t('resetting'));
        var s = 'MP="/data/adb/modules/FontEF_Pro"\nMETABASE="/data/adb/modules/meta-overlayfs/mnt"\n';
        s += 'for D in system product system_ext vendor; do rm -rf "$MP/$D/fonts/"* "$MP/$D/etc/"* 2>/dev/null; done\n';
        s += 'if [ -d "$METABASE/FontEF_Pro" ]; then for D in system product system_ext vendor; do rm -rf "$METABASE/FontEF_Pro/$D/fonts/"* 2>/dev/null; done; fi\n';
        s += 'if [ -d "/data/adb/overlay" ]; then for D in system product system_ext vendor; do rm -rf "/data/adb/overlay/$D/fonts/"* 2>/dev/null; done; fi\n';
        s += 'if command -v ksud >/dev/null 2>&1; then ksud module update 2>/dev/null; fi\necho "RESET_OK"\n';
        shExec(s, function (e, o) {
            setProg(100, t('done'));
            if (String(o || '').indexOf('RESET_OK') !== -1) { log(t('reset_ok')); toast(t('reset_ok'), 'success'); }
            else { log(t('reset_fail')); toast(t('reset_fail'), 'error'); }
            loadDevice(); setTimeout(function () { showProg(false); }, 1500);
        });
    }

    function backupFont() {
        if (!hasRoot) { toast(t('no_root'), 'error'); return; }
        showProg(true); setProg(40, t('backing_up')); log(t('backing_up'));
        var s = 'D="/data/adb/FontEF_Pro_backup/backup_$(date +%Y%m%d_%H%M%S)"\nmkdir -p "$D"\n';
        s += 'for F in Roboto-Regular.ttf DroidSans.ttf NotoNaskhArabic-Regular.ttf NotoSansDevanagari-Regular.ttf; do cp -f "/system/fonts/$F" "$D/" 2>/dev/null; done\n';
        s += 'cp -f /system/etc/fonts.xml "$D/" 2>/dev/null\necho "BK:$D"\n';
        shExec(s, function (e, o) {
            setProg(100, t('done'));
            if (String(o || '').indexOf('BK:') !== -1) { log(t('backup_ok')); toast(t('backup_ok'), 'success'); }
            else { log(t('backup_fail')); toast(t('backup_fail'), 'error'); }
            loadDevice(); setTimeout(function () { showProg(false); }, 1500);
        });
    }

    function refreshStatus() {
        log(t('refreshing')); toast(t('refreshing'), 'info');
        rootChecked = false; hasRoot = false; __inv = null; __bridgeLabel = '';
        checkRoot();
    }

    function rebootDevice() {
        if (!hasRoot) { toast(t('no_root'), 'error'); return; }
        if (!confirm(t('confirm_reboot'))) return;
        log(t('rebooting')); toast(t('rebooting'), 'info');
        shExec('reboot', function () {});
    }

    /* =========================
       PREVIEW SIZES
    ========================= */
    function initPreviewSizes(minSz, maxSz, defSz) {
        var minus = document.querySelectorAll('.sz-minus');
        for (var m = 0; m < minus.length; m++) {
            (function (btn) {
                btn.addEventListener('click', function (e) {
                    e.preventDefault(); e.stopPropagation();
                    var tg = btn.getAttribute('data-target');
                    if (tg && pvSizes[tg] > minSz) { pvSizes[tg] -= 2; applySize(tg); }
                });
            })(minus[m]);
        }
        var plus = document.querySelectorAll('.sz-plus');
        for (var p = 0; p < plus.length; p++) {
            (function (btn) {
                btn.addEventListener('click', function (e) {
                    e.preventDefault(); e.stopPropagation();
                    var tg = btn.getAttribute('data-target');
                    if (tg && pvSizes[tg] < maxSz) { pvSizes[tg] += 2; applySize(tg); }
                });
            })(plus[p]);
        }
        var resets = document.querySelectorAll('.sz-reset');
        for (var r = 0; r < resets.length; r++) {
            (function (btn) {
                btn.addEventListener('click', function (e) {
                    e.preventDefault(); e.stopPropagation();
                    var tg = btn.getAttribute('data-target');
                    if (tg) { pvSizes[tg] = defSz; applySize(tg); }
                });
            })(resets[r]);
        }
    }

    function applySize(tg) {
        var sz = pvSizes[tg];
        var v = $('sz-' + tg); if (v) v.textContent = sz;
        var lines = document.querySelectorAll('.' + tg + ':not(.prev-sm)');
        for (var i = 0; i < lines.length; i++) lines[i].style.fontSize = sz + 'px';
    }

    /* =========================
       INIT
    ========================= */
    function init() {
        loadConfig(function (ok) {
            if (!ok) {
                log('Config load failed - using defaults');
                toast('Failed to load config', 'error');
                return;
            }

            // Build dynamic UI from config
            buildLangBar();
            buildPresets();
            buildPreviews();
            buildBranding();
            buildUIVisibility();

            // Upload
            if ($('dropZone')) {
                $('dropZone').addEventListener('click', function (e) { e.preventDefault(); if ($('fontInput')) $('fontInput').click(); });
                $('dropZone').addEventListener('dragover', function (e) { e.preventDefault(); e.stopPropagation(); this.classList.add('drag-over'); });
                $('dropZone').addEventListener('dragleave', function (e) { e.preventDefault(); this.classList.remove('drag-over'); });
                $('dropZone').addEventListener('drop', function (e) { e.preventDefault(); e.stopPropagation(); this.classList.remove('drag-over'); if (e.dataTransfer && e.dataTransfer.files && e.dataTransfer.files.length > 0) handleFile(e.dataTransfer.files[0]); });
            }
            if ($('fontInput')) $('fontInput').addEventListener('change', function () { if (this.files && this.files.length > 0) handleFile(this.files[0]); });
            if ($('removeBtn')) $('removeBtn').addEventListener('click', function (e) { e.preventDefault(); e.stopPropagation(); clearFile(); });

            // Actions
            if ($('applyBtn')) $('applyBtn').addEventListener('click', function (e) { e.preventDefault(); applyFont(); });
            if ($('resetBtn')) $('resetBtn').addEventListener('click', function (e) { e.preventDefault(); resetFont(); });
            if ($('backupBtn')) $('backupBtn').addEventListener('click', function (e) { e.preventDefault(); backupFont(); });
            if ($('refreshBtn')) $('refreshBtn').addEventListener('click', function (e) { e.preventDefault(); refreshStatus(); });
            if ($('rebootBtn')) $('rebootBtn').addEventListener('click', function (e) { e.preventDefault(); rebootDevice(); });

            // Logs
            if ($('logToggle')) $('logToggle').addEventListener('click', function (e) { e.preventDefault(); var c = $('logContent'); if (!c) return; if (c.style.display === 'none') { c.style.display = 'block'; this.textContent = '▼'; } else { c.style.display = 'none'; this.textContent = '▶'; } });
            if ($('logClear')) $('logClear').addEventListener('click', function (e) { e.preventDefault(); if ($('logContent')) $('logContent').textContent = ''; });

            // Security
            document.addEventListener('contextmenu', function (e) { e.preventDefault(); });

            // Start
            translate();
            log('FontEF Pro v1.0 | @DeZ4p');
            checkRoot();
        });
    }

    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
    else init();

})();
