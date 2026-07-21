/* =============================================
   FontEF Pro v1.0
   Author: @DeZ4p | t.me/DeZ4p
   ============================================= */

(function () {
    'use strict';

    /* =========================
       TRANSLATIONS (8 Languages)
    ========================= */
    var LANG = {
        en: {
            checking:"Checking root access...",
            connected:"Root access granted",
            no_root:"Root access not available",
            preset:"ROM Preset",
            all_roms:"All ROMs",
            upload:"Upload Font",
            drag:"Drag & Drop your font file",
            or_click:"or tap to browse files",
            preview:"Font Preview",
            apply:"Apply Font",
            reset:"Reset",
            backup:"Backup",
            refresh:"Refresh",
            reboot:"Reboot",
            logs:"Logs",
            installed:"Installed",
            backups:"Backups",
            overlay:"Overlay",
            android:"Android",
            applying:"Applying font...",
            applied:"Font applied successfully! Reboot to see changes.",
            apply_fail:"Failed to apply font",
            resetting:"Resetting fonts...",
            reset_ok:"Fonts reset. Reboot required.",
            reset_fail:"Reset failed",
            backing_up:"Creating backup...",
            backup_ok:"Backup created",
            backup_fail:"Backup failed",
            no_file:"Select a font file first",
            bad_file:"Invalid file. Only .ttf and .otf",
            copying:"Copying font files...",
            perms:"Setting permissions...",
            overlay_fix:"Syncing overlay...",
            done:"Done",
            selected:"Font selected",
            refreshing:"Refreshing...",
            updated:"Status updated",
            rebooting:"Rebooting...",
            confirm_reboot:"Reboot device?",
            confirm_reset:"Reset all fonts to default?",
            step_main:"Main fonts copied",
            step_meta:"meta-overlayfs synced",
            step_overlay:"Overlay synced",
            step_sysext:"system_ext synced",
            step_vendor:"Vendor fonts synced",
            step_ksud:"KSU module updated",
            step_perms:"Permissions set",
            step_selinux:"SELinux context set",
            bridge_searching:"Searching for root bridge...",
            bridge_found:"Root bridge found",
            bridge_fail:"No root bridge detected",
            bridge_testing:"Testing signatures...",
            device_info:"Device info loaded"
        },
        fa: {
            checking:"در حال بررسی دسترسی روت...",
            connected:"دسترسی روت فعال است",
            no_root:"دسترسی روت موجود نیست",
            preset:"پیش‌تنظیم رام",
            all_roms:"همه رام‌ها",
            upload:"آپلود فونت",
            drag:"فایل فونت را اینجا بکشید",
            or_click:"یا لمس کنید برای انتخاب",
            preview:"پیش‌نمایش فونت",
            apply:"اعمال فونت",
            reset:"بازنشانی",
            backup:"پشتیبان",
            refresh:"بروزرسانی",
            reboot:"ریبوت",
            logs:"گزارش‌ها",
            installed:"نصب‌شده",
            backups:"بکاپ‌ها",
            overlay:"اورلی",
            android:"اندروید",
            applying:"در حال اعمال فونت...",
            applied:"فونت اعمال شد! برای مشاهده ریبوت کنید.",
            apply_fail:"اعمال فونت ناموفق",
            resetting:"بازنشانی فونت‌ها...",
            reset_ok:"فونت‌ها بازنشانی شدند. ریبوت لازم است.",
            reset_fail:"بازنشانی ناموفق",
            backing_up:"ساخت بکاپ...",
            backup_ok:"بکاپ ساخته شد",
            backup_fail:"ساخت بکاپ ناموفق",
            no_file:"ابتدا فونت انتخاب کنید",
            bad_file:"فایل نامعتبر. فقط ttf و otf",
            copying:"کپی فایل‌های فونت...",
            perms:"تنظیم دسترسی‌ها...",
            overlay_fix:"همگام‌سازی اورلی...",
            done:"انجام شد",
            selected:"فونت انتخاب شد",
            refreshing:"بروزرسانی...",
            updated:"وضعیت بروز شد",
            rebooting:"ریبوت...",
            confirm_reboot:"ریبوت شود؟",
            confirm_reset:"بازنشانی تمام فونت‌ها؟",
            step_main:"فونت‌های اصلی کپی شدند",
            step_meta:"اورلی همگام شد",
            step_overlay:"اورلی همگام شد",
            step_sysext:"system_ext همگام شد",
            step_vendor:"فونت‌های vendor همگام شدند",
            step_ksud:"ماژول KSU بروز شد",
            step_perms:"دسترسی‌ها تنظیم شدند",
            step_selinux:"SELinux تنظیم شد",
            bridge_searching:"جستجوی پل روت...",
            bridge_found:"پل روت پیدا شد",
            bridge_fail:"پل روت یافت نشد",
            bridge_testing:"تست امضاها...",
            device_info:"اطلاعات دستگاه بارگذاری شد"
        },
        ar: {
            checking:"جارِ التحقق من الروت...",
            connected:"صلاحية الروت متاحة",
            no_root:"الروت غير متوفر",
            preset:"إعداد الروم",
            all_roms:"جميع الرومات",
            upload:"رفع الخط",
            drag:"اسحب ملف الخط هنا",
            or_click:"أو اضغط للاختيار",
            preview:"معاينة الخط",
            apply:"تطبيق الخط",
            reset:"إعادة تعيين",
            backup:"نسخة احتياطية",
            refresh:"تحديث",
            reboot:"إعادة تشغيل",
            logs:"السجلات",
            installed:"مثبت",
            backups:"النسخ",
            overlay:"أوفرلي",
            android:"أندرويد",
            applying:"جارِ التطبيق...",
            applied:"تم التطبيق! أعد التشغيل.",
            apply_fail:"فشل التطبيق",
            resetting:"إعادة تعيين...",
            reset_ok:"تمت إعادة التعيين. أعد التشغيل.",
            reset_fail:"فشل",
            backing_up:"إنشاء نسخة...",
            backup_ok:"تم",
            backup_fail:"فشل",
            no_file:"اختر خطاً أولاً",
            bad_file:"صيغة غير صالحة",
            copying:"نسخ الملفات...",
            perms:"الأذونات...",
            overlay_fix:"مزامنة...",
            done:"تم",
            selected:"تم الاختيار",
            refreshing:"تحديث...",
            updated:"تم",
            rebooting:"إعادة تشغيل...",
            confirm_reboot:"إعادة التشغيل؟",
            confirm_reset:"إعادة تعيين الخطوط؟",
            step_main:"تم نسخ الخطوط",
            step_meta:"تمت مزامنة meta-overlayfs",
            step_overlay:"تمت مزامنة overlay",
            step_sysext:"تم system_ext",
            step_vendor:"تم vendor",
            step_ksud:"تم تحديث KSU",
            step_perms:"تم تعيين الأذونات",
            step_selinux:"تم SELinux",
            bridge_searching:"البحث عن جسر الروت...",
            bridge_found:"تم العثور على الجسر",
            bridge_fail:"لم يتم العثور على الجسر",
            bridge_testing:"اختبار التوقيعات...",
            device_info:"تم تحميل معلومات الجهاز"
        },
        ru: {
            checking:"Проверка root...",
            connected:"Root получен",
            no_root:"Root недоступен",
            preset:"Профиль ROM",
            all_roms:"Все ROM",
            upload:"Загрузить шрифт",
            drag:"Перетащите шрифт сюда",
            or_click:"или нажмите",
            preview:"Предпросмотр",
            apply:"Применить",
            reset:"Сброс",
            backup:"Резерв",
            refresh:"Обновить",
            reboot:"Перезагрузка",
            logs:"Логи",
            installed:"Установлено",
            backups:"Резервы",
            overlay:"Оверлей",
            android:"Андроид",
            applying:"Применение...",
            applied:"Шрифт применён! Перезагрузите.",
            apply_fail:"Ошибка",
            resetting:"Сброс...",
            reset_ok:"Сброшено. Перезагрузите.",
            reset_fail:"Ошибка сброса",
            backing_up:"Копирование...",
            backup_ok:"Создано",
            backup_fail:"Ошибка",
            no_file:"Выберите шрифт",
            bad_file:"Неверный формат",
            copying:"Копирование...",
            perms:"Разрешения...",
            overlay_fix:"Синхронизация...",
            done:"Готово",
            selected:"Выбран",
            refreshing:"Обновление...",
            updated:"Обновлено",
            rebooting:"Перезагрузка...",
            confirm_reboot:"Перезагрузить?",
            confirm_reset:"Сбросить?",
            step_main:"Шрифты скопированы",
            step_meta:"meta-overlayfs синхронизирован",
            step_overlay:"Overlay синхронизирован",
            step_sysext:"system_ext готов",
            step_vendor:"vendor готов",
            step_ksud:"KSU обновлён",
            step_perms:"Разрешения установлены",
            step_selinux:"SELinux настроен",
            bridge_searching:"Поиск моста root...",
            bridge_found:"Мост найден",
            bridge_fail:"Мост не найден",
            bridge_testing:"Тестирование подписей...",
            device_info:"Информация загружена"
        },
        id: {
            checking:"Memeriksa root...",connected:"Root diberikan",no_root:"Root tidak tersedia",
            preset:"Preset ROM",all_roms:"Semua ROM",upload:"Unggah Font",drag:"Seret font ke sini",
            or_click:"atau ketuk",preview:"Pratinjau",apply:"Terapkan",reset:"Reset",
            backup:"Cadangan",refresh:"Perbarui",reboot:"Reboot",logs:"Log",
            installed:"Terpasang",backups:"Cadangan",overlay:"Overlay",android:"Android",
            applying:"Menerapkan...",applied:"Diterapkan! Reboot.",apply_fail:"Gagal",
            resetting:"Mereset...",reset_ok:"Direset. Reboot.",reset_fail:"Gagal",
            backing_up:"Membuat cadangan...",backup_ok:"Dibuat",backup_fail:"Gagal",
            no_file:"Pilih font",bad_file:"Format tidak valid",copying:"Menyalin...",perms:"Izin...",
            overlay_fix:"Sinkronisasi...",done:"Selesai",selected:"Dipilih",refreshing:"Memperbarui...",updated:"Diperbarui",
            rebooting:"Mereboot...",confirm_reboot:"Reboot?",confirm_reset:"Reset?",
            step_main:"Font disalin",step_meta:"meta-overlayfs sinkron",step_overlay:"Overlay sinkron",
            step_sysext:"system_ext selesai",step_vendor:"vendor selesai",step_ksud:"KSU diperbarui",
            step_perms:"Izin diatur",step_selinux:"SELinux diatur",
            bridge_searching:"Mencari bridge...",bridge_found:"Bridge ditemukan",bridge_fail:"Bridge tidak ditemukan",
            bridge_testing:"Menguji...",device_info:"Info dimuat"
        },
        hi: {
            checking:"रूट जाँच...",connected:"रूट प्राप्त",no_root:"रूट नहीं",
            preset:"ROM प्रीसेट",all_roms:"सभी ROM",upload:"फ़ॉन्ट अपलोड",drag:"फ़ॉन्ट खींचें",
            or_click:"या टैप करें",preview:"पूर्वावलोकन",apply:"लागू करें",reset:"रीसेट",
            backup:"बैकअप",refresh:"रिफ्रेश",reboot:"रीबूट",logs:"लॉग",
            installed:"इंस्टॉल",backups:"बैकअप",overlay:"ओवरले",android:"एंड्रॉइड",
            applying:"लागू हो रहा...",applied:"लागू! रीबूट करें।",apply_fail:"विफल",
            resetting:"रीसेट...",reset_ok:"रीसेट। रीबूट करें।",reset_fail:"विफल",
            backing_up:"बैकअप...",backup_ok:"बना",backup_fail:"विफल",
            no_file:"फ़ॉन्ट चुनें",bad_file:"अमान्य",copying:"कॉपी...",perms:"अनुमतियाँ...",
            overlay_fix:"सिंक...",done:"पूर्ण",selected:"चुना गया",refreshing:"अपडेट...",updated:"अपडेट",
            rebooting:"रीबूट...",confirm_reboot:"रीबूट?",confirm_reset:"रीसेट?",
            step_main:"फ़ॉन्ट कॉपी",step_meta:"meta सिंक",step_overlay:"overlay सिंक",
            step_sysext:"system_ext पूर्ण",step_vendor:"vendor पूर्ण",step_ksud:"KSU अपडेट",
            step_perms:"अनुमतियाँ सेट",step_selinux:"SELinux सेट",
            bridge_searching:"ब्रिज खोज...",bridge_found:"ब्रिज मिला",bridge_fail:"ब्रिज नहीं मिला",
            bridge_testing:"परीक्षण...",device_info:"जानकारी लोड"
        },
        tr: {
            checking:"Root kontrol...",connected:"Root sağlandı",no_root:"Root yok",
            preset:"ROM Ön Ayarı",all_roms:"Tüm ROM",upload:"Font Yükle",drag:"Sürükleyin",
            or_click:"veya dokunun",preview:"Önizleme",apply:"Uygula",reset:"Sıfırla",
            backup:"Yedekle",refresh:"Yenile",reboot:"Yeniden Başlat",logs:"Kayıtlar",
            installed:"Yüklü",backups:"Yedekler",overlay:"Overlay",android:"Android",
            applying:"Uygulanıyor...",applied:"Uygulandı! Yeniden başlatın.",apply_fail:"Başarısız",
            resetting:"Sıfırlanıyor...",reset_ok:"Sıfırlandı. Yeniden başlatın.",reset_fail:"Başarısız",
            backing_up:"Yedekleniyor...",backup_ok:"Oluşturuldu",backup_fail:"Başarısız",
            no_file:"Font seçin",bad_file:"Geçersiz",copying:"Kopyalanıyor...",perms:"İzinler...",
            overlay_fix:"Senkronizasyon...",done:"Tamamlandı",selected:"Seçildi",refreshing:"Yenileniyor...",updated:"Güncellendi",
            rebooting:"Yeniden başlatılıyor...",confirm_reboot:"Yeniden başlat?",confirm_reset:"Sıfırla?",
            step_main:"Fontlar kopyalandı",step_meta:"meta senkronize",step_overlay:"Overlay senkronize",
            step_sysext:"system_ext tamam",step_vendor:"vendor tamam",step_ksud:"KSU güncellendi",
            step_perms:"İzinler ayarlandı",step_selinux:"SELinux ayarlandı",
            bridge_searching:"Köprü aranıyor...",bridge_found:"Köprü bulundu",bridge_fail:"Köprü bulunamadı",
            bridge_testing:"Test ediliyor...",device_info:"Bilgi yüklendi"
        },
        de: {
            checking:"Root-Prüfung...",connected:"Root gewährt",no_root:"Root nicht verfügbar",
            preset:"ROM-Voreinstellung",all_roms:"Alle ROMs",upload:"Schrift hochladen",drag:"Hierher ziehen",
            or_click:"oder tippen",preview:"Vorschau",apply:"Anwenden",reset:"Zurücksetzen",
            backup:"Sichern",refresh:"Aktualisieren",reboot:"Neustart",logs:"Protokolle",
            installed:"Installiert",backups:"Sicherungen",overlay:"Overlay",android:"Android",
            applying:"Wird angewendet...",applied:"Angewendet! Neustart nötig.",apply_fail:"Fehler",
            resetting:"Zurücksetzen...",reset_ok:"Zurückgesetzt. Neustart nötig.",reset_fail:"Fehler",
            backing_up:"Sicherung...",backup_ok:"Erstellt",backup_fail:"Fehler",
            no_file:"Schrift wählen",bad_file:"Ungültig",copying:"Kopieren...",perms:"Berechtigungen...",
            overlay_fix:"Sync...",done:"Fertig",selected:"Gewählt",refreshing:"Aktualisierung...",updated:"Aktualisiert",
            rebooting:"Neustart...",confirm_reboot:"Neustarten?",confirm_reset:"Zurücksetzen?",
            step_main:"Schriften kopiert",step_meta:"meta synchronisiert",step_overlay:"Overlay synchronisiert",
            step_sysext:"system_ext fertig",step_vendor:"vendor fertig",step_ksud:"KSU aktualisiert",
            step_perms:"Berechtigungen gesetzt",step_selinux:"SELinux gesetzt",
            bridge_searching:"Brücke suchen...",bridge_found:"Brücke gefunden",bridge_fail:"Keine Brücke",
            bridge_testing:"Testen...",device_info:"Info geladen"
        }
    };

    /* =========================
       ALL FONT FILES TO REPLACE
       Covers: Latin, Arabic, Persian,
       Hindi, Hebrew, Thai, Bengali,
       CJK, Emoji, Decorative
    ========================= */
    var AF = [
        // Roboto family
        'Roboto-Regular.ttf','Roboto-Medium.ttf','Roboto-Bold.ttf',
        'Roboto-Light.ttf','Roboto-Thin.ttf','Roboto-Black.ttf',
        'Roboto-Italic.ttf','Roboto-MediumItalic.ttf','Roboto-BoldItalic.ttf',
        'Roboto-LightItalic.ttf','Roboto-ThinItalic.ttf','Roboto-BlackItalic.ttf',
        // Roboto Condensed
        'RobotoCondensed-Regular.ttf','RobotoCondensed-Bold.ttf',
        'RobotoCondensed-Light.ttf','RobotoCondensed-Italic.ttf',
        'RobotoCondensed-BoldItalic.ttf','RobotoCondensed-LightItalic.ttf',
        // Roboto Slab
        'RobotoSlab-Regular.ttf','RobotoSlab-Thin.ttf',
        // DroidSans
        'DroidSans.ttf','DroidSans-Bold.ttf','DroidSansMono.ttf',
        // Noto Sans Latin
        'NotoSans-Regular.ttf','NotoSans-Bold.ttf',
        'NotoSans-Italic.ttf','NotoSans-BoldItalic.ttf',
        // Noto Serif
        'NotoSerif-Regular.ttf','NotoSerif-Bold.ttf',
        'NotoSerif-Italic.ttf','NotoSerif-BoldItalic.ttf',
        // Arabic / Persian
        'NotoNaskhArabic-Regular.ttf','NotoNaskhArabic-Bold.ttf',
        'NotoNaskhArabicUI-Regular.ttf','NotoNaskhArabicUI-Bold.ttf',
        'NotoSansArabic-Regular.ttf','NotoSansArabic-Bold.ttf',
        'NotoSansArabic-Medium.ttf','NotoSansArabic-SemiBold.ttf',
        'NotoSansArabicUI-Regular.ttf','NotoSansArabicUI-Bold.ttf',
        // Devanagari (Hindi)
        'NotoSansDevanagari-Regular.ttf','NotoSansDevanagari-Bold.ttf',
        'NotoSansDevanagari-Medium.ttf','NotoSansDevanagari-SemiBold.ttf',
        'NotoSansDevanagariUI-Regular.ttf','NotoSansDevanagariUI-Bold.ttf',
        // Hebrew
        'NotoSansHebrew-Regular.ttf','NotoSansHebrew-Bold.ttf',
        // Thai
        'NotoSansThai-Regular.ttf','NotoSansThai-Bold.ttf',
        'NotoSansThaiUI-Regular.ttf','NotoSansThaiUI-Bold.ttf',
        // Bengali
        'NotoSansBengali-Regular.ttf','NotoSansBengali-Bold.ttf',
        'NotoSansBengaliUI-Regular.ttf','NotoSansBengaliUI-Bold.ttf',
        // Tamil
        'NotoSansTamil-Regular.ttf','NotoSansTamil-Bold.ttf',
        'NotoSansTamilUI-Regular.ttf','NotoSansTamilUI-Bold.ttf',
        // Georgian
        'NotoSansGeorgian-Regular.ttf','NotoSansGeorgian-Bold.ttf',
        // Armenian
        'NotoSansArmenian-Regular.ttf','NotoSansArmenian-Bold.ttf',
        // Myanmar
        'NotoSansMyanmar-Regular.ttf','NotoSansMyanmar-Bold.ttf',
        // Ethiopic
        'NotoSansEthiopic-Regular.ttf','NotoSansEthiopic-Bold.ttf',
        // Khmer
        'NotoSansKhmer-Regular.ttf','NotoSansKhmer-Bold.ttf',
        // Lao
        'NotoSansLao-Regular.ttf','NotoSansLao-Bold.ttf',
        // CJK (Chinese, Japanese, Korean)
        'NotoSansJP-Regular.otf','NotoSansKR-Regular.otf',
        'NotoSansSC-Regular.otf','NotoSansTC-Regular.otf',
        // Symbols & Emoji (skip emoji to avoid issues)
        'NotoSansSymbols-Regular.ttf','NotoSansSymbols2-Regular.ttf',
        // Decorative
        'CutiveMono.ttf','ComingSoon.ttf',
        'DancingScript-Regular.ttf','DancingScript-Bold.ttf',
        'CarroisGothicSC-Regular.ttf',
        // Samsung specific
        'SECRobotoLight-Regular.ttf','SECRobotoLight-Bold.ttf',
        // MIUI specific
        'MiSans-Regular.ttf','MiSans-Bold.ttf','MiSans-Medium.ttf',
        // Google Sans (Pixel)
        'GoogleSans-Regular.ttf','GoogleSans-Medium.ttf',
        'GoogleSans-Bold.ttf','GoogleSans-Italic.ttf'
    ];

    /* =========================
       STATE
    ========================= */
    var lang = 'en';
    var hasRoot = false;
    var rootChecked = false;
    var fontFile = null;
    var preset = 'universal';
    var pvSizes = {};

    /* =========================
       HELPERS
    ========================= */
    function $(id) { return document.getElementById(id); }
    function t(k) { return (LANG[lang] && LANG[lang][k]) || LANG.en[k] || k; }
    function pad(n) { return n < 10 ? '0' + n : '' + n; }
    function sq(s) { return "'" + String(s).replace(/'/g, "'\\''") + "'"; }
    function fmtSz(b) {
        if (b < 1024) return b + ' B';
        if (b < 1048576) return (b / 1024).toFixed(1) + ' KB';
        return (b / 1048576).toFixed(1) + ' MB';
    }

    /* =========================
       UNIVERSAL KSU BRIDGE
       Scans ALL possible APIs,
       methods, scopes and signatures
       to find working root bridge
       on ANY device
    ========================= */
    var __inv = null;
    var __bridgeLabel = '';

    function findApis() {
        var apis = [];
        var objNames = [
            'ksu', 'KernelSU', 'kernelsu', '$ksu', 'ksud',
            'su', 'Shell', 'RootShell', 'Superuser',
            'magisk', 'Magisk', 'MagiskSU'
        ];
        var methodNames = [
            'exec', 'execute', 'run', 'shell', 'cmd',
            'command', 'su', 'spawn', 'call', 'invoke',
            'runCommand', 'execCommand', 'runShell'
        ];

        function scan(scope, scopeName) {
            if (!scope) return;

            // Scan known object names
            for (var o = 0; o < objNames.length; o++) {
                try {
                    var obj = scope[objNames[o]];
                    if (!obj || typeof obj !== 'object') continue;
                    for (var m = 0; m < methodNames.length; m++) {
                        try {
                            if (typeof obj[methodNames[m]] === 'function') {
                                var label = scopeName + '.' + objNames[o] + '.' + methodNames[m];
                                var dup = false;
                                for (var a = 0; a < apis.length; a++) {
                                    if (apis[a].l === label) { dup = true; break; }
                                }
                                if (!dup) {
                                    apis.push({
                                        o: obj,
                                        f: obj[methodNames[m]],
                                        l: label,
                                        n: obj[methodNames[m]].length
                                    });
                                }
                            }
                        } catch (e) {}
                    }
                } catch (e) {}
            }

            // Deep scan: check ALL properties for exec-like methods
            try {
                var keys = Object.getOwnPropertyNames ? Object.getOwnPropertyNames(scope) : Object.keys(scope);
                for (var k = 0; k < keys.length; k++) {
                    try {
                        var val = scope[keys[k]];
                        if (!val || typeof val !== 'object') continue;
                        if (val === scope) continue; // skip self-reference
                        for (var m2 = 0; m2 < methodNames.length; m2++) {
                            try {
                                if (typeof val[methodNames[m2]] === 'function') {
                                    var label2 = scopeName + '.' + keys[k] + '.' + methodNames[m2];
                                    var dup2 = false;
                                    for (var a2 = 0; a2 < apis.length; a2++) {
                                        if (apis[a2].l === label2) { dup2 = true; break; }
                                    }
                                    if (!dup2) {
                                        apis.push({
                                            o: val,
                                            f: val[methodNames[m2]],
                                            l: label2,
                                            n: val[methodNames[m2]].length
                                        });
                                    }
                                }
                            } catch (e) {}
                        }
                    } catch (e) {}
                }
            } catch (e) {}
        }

        // Scan all accessible scopes
        scan(window, 'w');
        try { if (window.parent && window.parent !== window) scan(window.parent, 'p'); } catch (e) {}
        try { if (window.top && window.top !== window && window.top !== window.parent) scan(window.top, 't'); } catch (e) {}
        try { if (window.frames) { for (var f = 0; f < Math.min(window.frames.length, 5); f++) { try { scan(window.frames[f], 'f' + f); } catch (e) {} } } } catch (e) {}

        return apis;
    }

    function norm(a, b, c) {
        if (Array.isArray(a)) {
            return { e: Number(a[0] || 0), o: String(a[1] || ''), r: String(a[2] || '') };
        }
        if (a !== null && a !== undefined && typeof a === 'object') {
            var code = -1;
            var codeKeys = ['errno', 'code', 'exitCode', 'status', 'ret', 'returnCode', 'exit_code', 'retval'];
            for (var i = 0; i < codeKeys.length; i++) {
                if (a[codeKeys[i]] !== undefined) { code = Number(a[codeKeys[i]]); break; }
            }
            var out = '';
            var outKeys = ['stdout', 'out', 'output', 'result', 'text', 'data', 'body', 'response'];
            for (var j = 0; j < outKeys.length; j++) {
                if (a[outKeys[j]] !== undefined && a[outKeys[j]] !== null) { out = String(a[outKeys[j]]); break; }
            }
            var err = '';
            var errKeys = ['stderr', 'err', 'error', 'message', 'msg', 'errmsg'];
            for (var k = 0; k < errKeys.length; k++) {
                if (a[errKeys[k]] !== undefined && a[errKeys[k]] !== null) { err = String(a[errKeys[k]]); break; }
            }
            if (code === -1 && out) code = 0;
            return { e: code, o: out, r: err };
        }
        if (typeof a === 'string') return { e: 0, o: a, r: '' };
        if (typeof a === 'number') return { e: a, o: String(b || ''), r: String(c || '') };
        if (typeof a === 'boolean') return { e: a ? 0 : 1, o: String(b || ''), r: String(c || '') };
        return { e: -1, o: String(b || ''), r: String(c || '') };
    }

    function genCalls(api, cmd) {
        var sh = 'sh -c ' + sq(cmd);
        var c = [];

        // 3-arg callback styles
        c.push({ n: '3sj', r: function (f, d) { return f(sh, '{}', d); } });
        c.push({ n: '3so', r: function (f, d) { return f(sh, {}, d); } });
        c.push({ n: '3sn', r: function (f, d) { return f(sh, null, d); } });
        c.push({ n: '3su', r: function (f, d) { return f(sh, undefined, d); } });
        c.push({ n: '3se', r: function (f, d) { return f(sh, '', d); } });
        c.push({ n: '3rj', r: function (f, d) { return f(cmd, '{}', d); } });
        c.push({ n: '3ro', r: function (f, d) { return f(cmd, {}, d); } });
        c.push({ n: '3rn', r: function (f, d) { return f(cmd, null, d); } });

        // 2-arg callback styles
        c.push({ n: '2s', r: function (f, d) { return f(sh, d); } });
        c.push({ n: '2r', r: function (f, d) { return f(cmd, d); } });

        // 1-arg / promise styles
        c.push({ n: '1sj', r: function (f) { return f(sh, '{}'); } });
        c.push({ n: '1so', r: function (f) { return f(sh, {}); } });
        c.push({ n: '1sn', r: function (f) { return f(sh, null); } });
        c.push({ n: '1s', r: function (f) { return f(sh); } });
        c.push({ n: '1rj', r: function (f) { return f(cmd, '{}'); } });
        c.push({ n: '1ro', r: function (f) { return f(cmd, {}); } });
        c.push({ n: '1r', r: function (f) { return f(cmd); } });

        // Array styles
        c.push({ n: 'ac', r: function (f, d) { return f(['sh', '-c', cmd], d); } });
        c.push({ n: 'aco', r: function (f, d) { return f(['sh', '-c', cmd], {}, d); } });
        c.push({ n: 'ap', r: function (f) { return f(['sh', '-c', cmd]); } });

        // Object styles
        c.push({ n: 'oc', r: function (f, d) { return f({ cmd: sh }, d); } });
        c.push({ n: 'op', r: function (f) { return f({ cmd: sh }); } });
        c.push({ n: 'osc', r: function (f, d) { return f({ shell: cmd }, d); } });
        c.push({ n: 'osp', r: function (f) { return f({ shell: cmd }); } });
        c.push({ n: 'occ', r: function (f, d) { return f({ command: sh }, d); } });
        c.push({ n: 'ocp', r: function (f) { return f({ command: sh }); } });

        return c;
    }

    function tryCall(api, call, ms, cb) {
        var done = false;
        var timer = setTimeout(function () {
            if (!done) { done = true; cb(null); }
        }, ms);

        function fin(a, b, c) {
            if (done) return;
            done = true;
            clearTimeout(timer);
            cb(norm(a, b, c));
        }

        try {
            var ret;
            if (call.r.length >= 2) {
                ret = call.r(api.f.bind(api.o), function (a, b, c) { fin(a, b, c); });
            } else {
                ret = call.r(api.f.bind(api.o));
            }

            if (ret && typeof ret.then === 'function') {
                ret.then(function (r) { fin(r); }).catch(function (e) { fin(-1, '', String(e)); });
            } else if (ret !== undefined && ret !== null) {
                setTimeout(function () { if (!done) fin(ret); }, 80);
            }
        } catch (e) {
            if (!done) { done = true; clearTimeout(timer); cb(null); }
        }
    }

    function isRootOk(res) {
        if (!res) return false;
        var o = String(res.o || '').trim();
        if (o.indexOf('uid=0') !== -1) return true;
        if (o.indexOf('KSU_OK') !== -1) return true;
        if (o === 'root') return true;
        if (o === '0') return true;
        if (res.e === 0 && o.length > 0 && String(res.r || '').trim() === '') return true;
        return false;
    }

    function ensureBridge(cb) {
        if (__inv) { cb(true); return; }

        log(t('bridge_searching'));

        var startTime = Date.now();
        var maxWaitMs = 12000;

        (function pollForApi() {
            var apis = findApis();

            if (!apis.length) {
                if (Date.now() - startTime > maxWaitMs) {
                    log(t('bridge_fail'));
                    cb(false, 'No KSU API detected');
                    return;
                }
                setTimeout(pollForApi, 250);
                return;
            }

            var labels = [];
            for (var i = 0; i < apis.length; i++) labels.push(apis[i].l);
            log('APIs: ' + labels.join(', '));
            log(t('bridge_testing'));

            var testCommands = ['printf KSU_OK', 'echo KSU_OK', 'id', 'id -u', 'whoami'];
            var ai = 0, ci = 0, ti = 0, totalTries = 0;

            function nextTry() {
                if (ai >= apis.length) {
                    log(t('bridge_fail') + ' (' + totalTries + ' tries)');
                    cb(false, 'No bridge found (' + totalTries + ')');
                    return;
                }

                var api = apis[ai];
                var calls = genCalls(api, testCommands[ti]);

                if (ci >= calls.length) {
                    ci = 0;
                    ti++;
                    if (ti >= testCommands.length) { ti = 0; ai++; }
                    nextTry();
                    return;
                }

                var call = calls[ci];
                totalTries++;

                if (totalTries % 20 === 0) {
                    log(t('bridge_testing') + ' ' + totalTries + '...');
                }

                tryCall(api, call, 2200, function (res) {
                    if (isRootOk(res)) {
                        __bridgeLabel = api.l + ' -> ' + call.n;
                        log(t('bridge_found') + ': ' + __bridgeLabel);

                        var lockedApi = api;
                        var lockedCallName = call.n;

                        __inv = function (script, userCb) {
                            var realCalls = genCalls(lockedApi, script);
                            var realCall = null;
                            for (var r = 0; r < realCalls.length; r++) {
                                if (realCalls[r].n === lockedCallName) { realCall = realCalls[r]; break; }
                            }
                            if (!realCall) realCall = realCalls[0];

                            tryCall(lockedApi, realCall, 30000, function (result) {
                                if (!result) { userCb(-1, '', 'No response'); return; }
                                userCb(result.e, result.o, result.r);
                            });
                        };

                        cb(true);
                        return;
                    }

                    ci++;
                    nextTry();
                });
            }

            nextTry();
        })();
    }

    function shExec(script, cb) {
        ensureBridge(function (ok, reason) {
            if (!ok || !__inv) {
                cb(-1, '', reason || 'Bridge not available');
                return;
            }
            __inv(script, cb);
        });
    }

    /* =========================
       LOG / TOAST / UI HELPERS
    ========================= */
    function log(msg) {
        var card = $('logCard');
        var content = $('logContent');
        if (!card || !content) return;
        card.classList.add('show');
        var now = new Date();
        var ts = pad(now.getHours()) + ':' + pad(now.getMinutes()) + ':' + pad(now.getSeconds());
        content.textContent += '[' + ts + '] ' + msg + '\n';
        content.scrollTop = content.scrollHeight;
    }

    function toast(msg, type) {
        var old = document.querySelector('.toast');
        if (old) old.remove();
        var el = document.createElement('div');
        el.className = 'toast ' + (type || 'info');
        el.textContent = msg;
        document.body.appendChild(el);
        setTimeout(function () { el.classList.add('show'); }, 30);
        setTimeout(function () {
            el.classList.remove('show');
            setTimeout(function () { if (el.parentNode) el.remove(); }, 400);
        }, 3200);
    }

    function setRoot(type, title, detail) {
        var card = $('rootCard');
        if (!card) return;
        card.className = 'root-card';
        if (type === 'ok') card.classList.add('ok');
        if (type === 'err') card.classList.add('err');
        if ($('rootTitle')) $('rootTitle').textContent = title;
        if ($('rootDetail')) $('rootDetail').textContent = detail || '';
    }

    function showProg(show) {
        var wrap = $('progressWrap');
        if (!wrap) return;
        if (show) { wrap.classList.add('show'); }
        else {
            wrap.classList.remove('show');
            if ($('progressFill')) $('progressFill').style.width = '0%';
            if ($('progressPct')) $('progressPct').textContent = '0%';
            if ($('progressTitle')) $('progressTitle').textContent = '';
            if ($('progressSteps')) $('progressSteps').textContent = '';
        }
    }

    function setProg(pct, text) {
        if ($('progressFill')) $('progressFill').style.width = pct + '%';
        if ($('progressPct')) $('progressPct').textContent = pct + '%';
        if ($('progressTitle')) $('progressTitle').textContent = text;
    }

    function addStep(text) {
        if ($('progressSteps')) $('progressSteps').textContent += '✓ ' + text + '\n';
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

        var rtl = (lang === 'fa' || lang === 'ar');
        document.documentElement.dir = rtl ? 'rtl' : 'ltr';
        document.documentElement.lang = lang;
    }

    /* =========================
       ROOT CHECK (Universal)
    ========================= */
    function checkRoot() {
        rootChecked = false;
        hasRoot = false;
        setRoot('', t('checking'), '');

        ensureBridge(function (ok, reason) {
            if (!ok) {
                rootChecked = true;
                setRoot('err', t('no_root'), reason || '');
                log('Root: ' + (reason || 'Bridge failed'));
                return;
            }

            // Try 'id' first
            shExec('id', function (e, o) {
                var out = String(o || '').trim();
                log('root(id): ' + out.substring(0, 80));

                if (e === 0 && out.indexOf('uid=0') !== -1) {
                    rootChecked = true;
                    hasRoot = true;
                    setRoot('ok', t('connected'), '');
                    loadDevice();
                    return;
                }

                // Fallback: id -u
                shExec('id -u', function (e2, o2) {
                    var out2 = String(o2 || '').trim();

                    if (e2 === 0 && out2 === '0') {
                        rootChecked = true;
                        hasRoot = true;
                        setRoot('ok', t('connected'), '');
                        loadDevice();
                        return;
                    }

                    // Fallback: whoami
                    shExec('whoami', function (e3, o3) {
                        rootChecked = true;
                        var out3 = String(o3 || '').trim();

                        if (e3 === 0 && out3 === 'root') {
                            hasRoot = true;
                            setRoot('ok', t('connected'), '');
                            loadDevice();
                        } else {
                            hasRoot = false;
                            setRoot('err', t('no_root'), 'Root commands failed');
                            log('Root failed: id=' + out + ' id-u=' + out2 + ' whoami=' + out3);
                        }
                    });
                });
            });
        });
    }

    function loadDevice() {
        log(t('device_info'));

        shExec('getprop ro.product.model', function (e, s) {
            if (e === 0 && s) $('metaDeviceText').textContent = String(s).trim();
        });

        shExec('getprop ro.build.display.id', function (e, s) {
            if (e === 0 && s) $('metaRomText').textContent = String(s).trim().substring(0, 30);
        });

        shExec('getprop ro.build.version.release', function (e, s) {
            if (e === 0 && s) {
                var ver = String(s).trim();
                if ($('statAndroid')) $('statAndroid').textContent = ver;
                if ($('metaKsuText')) $('metaKsuText').textContent = 'Android ' + ver;
            }
        });

        shExec('ls /data/adb/modules/FontEF_Pro/system/fonts/ 2>/dev/null | wc -l', function (e, s) {
            if (e === 0 && $('statFonts')) $('statFonts').textContent = String(s || '0').trim();
        });

        shExec("find /data/adb/FontEF_Pro_backup -maxdepth 1 -type d -name 'backup_*' 2>/dev/null | wc -l", function (e, s) {
            if (e === 0 && $('statBackups')) $('statBackups').textContent = String(s || '0').trim();
        });

        shExec('test -d /data/adb/overlay && echo Y || echo N', function (e, s) {
            if ($('statOverlay')) $('statOverlay').textContent = String(s || '').trim() === 'Y' ? '✓' : '✗';
        });
    }

    /* =========================
       FILE HANDLING
    ========================= */
    function handleFile(file) {
        var name = file.name.toLowerCase();
        if (name.indexOf('.ttf') === -1 && name.indexOf('.otf') === -1) {
            toast(t('bad_file'), 'error');
            return;
        }

        fontFile = file;
        if ($('fileName')) $('fileName').textContent = file.name;
        if ($('fileSize')) $('fileSize').textContent = fmtSz(file.size);
        if ($('fileInfo')) $('fileInfo').classList.add('show');
        if ($('dropZone')) $('dropZone').classList.add('hidden');
        if ($('previewCard')) $('previewCard').classList.add('show');
        if ($('applyBtn')) $('applyBtn').disabled = false;

        // Load font for preview
        var reader = new FileReader();
        reader.onload = function (ev) {
            try {
                var face = new FontFace('PreviewFont', ev.target.result);
                face.load().then(function (loaded) {
                    document.fonts.add(loaded);
                    var lines = document.querySelectorAll('.prev-text');
                    for (var i = 0; i < lines.length; i++) {
                        lines[i].style.fontFamily = 'PreviewFont, sans-serif';
                    }
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
       UNIVERSAL FONT APPLY
       Covers ALL devices:
       - Standard KSU mount
       - meta-overlayfs
       - susfs4ksu
       - Generic overlay
       - system_ext
       - vendor (Samsung etc)
       - Proper permissions
       - SELinux context
       - ksud module update
    ========================= */
    function applyFont() {
        if (!fontFile) { toast(t('no_file'), 'error'); return; }
        if (!hasRoot) { toast(t('no_root'), 'error'); return; }

        if ($('applyBtn')) $('applyBtn').disabled = true;
        showProg(true);
        setProg(5, t('copying'));
        log(t('applying'));

        var reader = new FileReader();
        reader.onload = function (ev) {
            var bytes = new Uint8Array(ev.target.result);
            var bin = '';
            for (var i = 0; i < bytes.length; i++) bin += String.fromCharCode(bytes[i]);
            var b64 = btoa(bin);
            var tmp = '/data/local/tmp/fontef_upload.ttf';
            var tmpB64 = tmp + '.b64';

            // Clean old temp files
            shExec('rm -f ' + tmp + ' ' + tmpB64, function () {
                // Write base64 in chunks
                var chunkSize = 32768;
                var parts = [];
                for (var i = 0; i < b64.length; i += chunkSize) {
                    parts.push(b64.substring(i, i + chunkSize));
                }

                var idx = 0;

                function writeNextChunk() {
                    if (idx >= parts.length) {
                        addStep(t('copying'));
                        setProg(45, t('applying'));

                        // Decode base64
                        var decodeCmd =
                            'if command -v base64 >/dev/null 2>&1; then ' +
                            'base64 -d ' + tmpB64 + ' > ' + tmp + '; ' +
                            'elif command -v toybox >/dev/null 2>&1; then ' +
                            'toybox base64 -d ' + tmpB64 + ' > ' + tmp + '; ' +
                            'elif command -v busybox >/dev/null 2>&1; then ' +
                            'busybox base64 -d ' + tmpB64 + ' > ' + tmp + '; ' +
                            'else exit 1; fi; rm -f ' + tmpB64;

                        shExec(decodeCmd, function (errno) {
                            if (errno !== 0) {
                                log('Base64 decode failed');
                                if ($('applyBtn')) $('applyBtn').disabled = false;
                                showProg(false);
                                toast(t('apply_fail'), 'error');
                                return;
                            }
                            doApply(tmp);
                        });
                        return;
                    }

                    var op = idx === 0 ? '>' : '>>';
                    var pct = 5 + Math.floor((idx / parts.length) * 35);
                    setProg(pct, t('copying'));

                    shExec("printf '%s' '" + parts[idx] + "' " + op + ' ' + tmpB64, function (errno) {
                        if (errno !== 0) {
                            log('Chunk write failed at index ' + idx);
                            if ($('applyBtn')) $('applyBtn').disabled = false;
                            showProg(false);
                            toast(t('apply_fail'), 'error');
                            return;
                        }
                        idx++;
                        writeNextChunk();
                    });
                }

                writeNextChunk();
            });
        };
        reader.readAsArrayBuffer(fontFile);
    }

    function doApply(tmp) {
        setProg(50, t('applying'));
        addStep(t('applying'));

        var s = '';

        // === Variables ===
        s += 'MP="/data/adb/modules/FontEF_Pro"\n';
        s += 'METABASE="/data/adb/modules/meta-overlayfs/mnt"\n';
        s += 'METADIR="$METABASE/FontEF_Pro"\n';

        // === Step 1: Create ALL font directories ===
        s += 'for D in system product system_ext vendor; do\n';
        s += '  mkdir -p "$MP/$D/fonts" 2>/dev/null\n';
        s += '  mkdir -p "$MP/$D/etc" 2>/dev/null\n';
        s += 'done\n';

        // === Step 2: Copy font to ALL targets in module ===
        for (var i = 0; i < AF.length; i++) {
            s += 'cp -f ' + tmp + ' "$MP/system/fonts/' + AF[i] + '" 2>/dev/null\n';
            s += 'cp -f ' + tmp + ' "$MP/product/fonts/' + AF[i] + '" 2>/dev/null\n';
        }
        s += 'echo "STEP_MAIN"\n';

        // === Step 3: system_ext (OnePlus, some custom ROMs) ===
        s += 'if [ -d /system_ext/fonts ] || [ -d /system/system_ext/fonts ]; then\n';
        for (var j = 0; j < AF.length; j++) {
            s += '  cp -f ' + tmp + ' "$MP/system_ext/fonts/' + AF[j] + '" 2>/dev/null\n';
        }
        s += '  echo "STEP_SYSEXT"\n';
        s += 'fi\n';

        // === Step 4: vendor (Samsung, Huawei) ===
        s += 'if [ -d /vendor/fonts ] || [ -d /system/vendor/fonts ]; then\n';
        for (var k = 0; k < AF.length; k++) {
            s += '  cp -f ' + tmp + ' "$MP/vendor/fonts/' + AF[k] + '" 2>/dev/null\n';
        }
        s += '  echo "STEP_VENDOR"\n';
        s += 'fi\n';

        // === Step 5: Permissions & SELinux ===
        s += 'for D in system product system_ext vendor; do\n';
        s += '  if [ -d "$MP/$D/fonts" ]; then\n';
        s += '    find "$MP/$D" -type d -exec chmod 755 {} + 2>/dev/null\n';
        s += '    find "$MP/$D/fonts" -type f -exec chmod 644 {} + 2>/dev/null\n';
        s += '    find "$MP/$D/fonts" -type f -exec chown root:root {} + 2>/dev/null\n';
        s += '    find "$MP/$D/fonts" -type f -exec chcon u:object_r:system_file:s0 {} + 2>/dev/null\n';
        s += '  fi\n';
        s += 'done\n';
        s += 'echo "STEP_PERMS"\n';

        // === Step 6: meta-overlayfs sync (CRITICAL!) ===
        s += 'if [ -d "$METABASE" ]; then\n';
        s += '  for D in system product system_ext vendor; do\n';
        s += '    if [ -d "$MP/$D/fonts" ] && [ "$(ls -A $MP/$D/fonts/ 2>/dev/null)" ]; then\n';
        s += '      mkdir -p "$METADIR/$D/fonts" 2>/dev/null\n';
        s += '      cp -af "$MP/$D/fonts/"* "$METADIR/$D/fonts/" 2>/dev/null\n';
        s += '      find "$METADIR/$D" -type d -exec chmod 755 {} + 2>/dev/null\n';
        s += '      find "$METADIR/$D/fonts" -type f -exec chmod 644 {} + 2>/dev/null\n';
        s += '      find "$METADIR/$D/fonts" -type f -exec chown root:root {} + 2>/dev/null\n';
        s += '      find "$METADIR/$D/fonts" -type f -exec chcon u:object_r:system_file:s0 {} + 2>/dev/null\n';
        s += '    fi\n';
        s += '  done\n';
        s += '  echo "STEP_META"\n';
        s += 'fi\n';

        // === Step 7: Generic overlay ===
        s += 'if [ -d "/data/adb/overlay" ]; then\n';
        s += '  for D in system product system_ext vendor; do\n';
        s += '    if [ -d "$MP/$D/fonts" ] && [ "$(ls -A $MP/$D/fonts/ 2>/dev/null)" ]; then\n';
        s += '      mkdir -p "/data/adb/overlay/$D/fonts" 2>/dev/null\n';
        s += '      cp -af "$MP/$D/fonts/"* "/data/adb/overlay/$D/fonts/" 2>/dev/null\n';
        s += '    fi\n';
        s += '  done\n';
        s += '  echo "STEP_OVERLAY"\n';
        s += 'fi\n';

        // === Step 8: ksud module update ===
        s += 'if command -v ksud >/dev/null 2>&1; then\n';
        s += '  ksud module update 2>/dev/null\n';
        s += '  echo "STEP_KSUD"\n';
        s += 'fi\n';

        // === Step 9: Cleanup ===
        s += 'rm -f ' + tmp + '\n';
        s += 'echo "APPLY_OK"\n';

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

            if (out.indexOf('APPLY_OK') !== -1) {
                log(t('applied'));
                toast(t('applied'), 'success');
            } else {
                log(t('apply_fail') + ': ' + String(r || '').substring(0, 100));
                toast(t('apply_fail'), 'error');
            }

            if ($('applyBtn')) $('applyBtn').disabled = false;
            loadDevice();
            setTimeout(function () { showProg(false); }, 2500);
        });
    }

    /* =========================
       UNIVERSAL RESET
    ========================= */
    function resetFont() {
        if (!hasRoot) { toast(t('no_root'), 'error'); return; }
        if (!confirm(t('confirm_reset'))) return;

        showProg(true);
        setProg(20, t('resetting'));
        log(t('resetting'));

        var s = 'MP="/data/adb/modules/FontEF_Pro"\n';
        s += 'METABASE="/data/adb/modules/meta-overlayfs/mnt"\n';

        // Remove from module
        s += 'for D in system product system_ext vendor; do\n';
        s += '  rm -rf "$MP/$D/fonts/"* 2>/dev/null\n';
        s += '  rm -rf "$MP/$D/etc/"* 2>/dev/null\n';
        s += 'done\n';

        // Remove from meta-overlayfs
        s += 'if [ -d "$METABASE/FontEF_Pro" ]; then\n';
        s += '  for D in system product system_ext vendor; do\n';
        s += '    rm -rf "$METABASE/FontEF_Pro/$D/fonts/"* 2>/dev/null\n';
        s += '  done\n';
        s += 'fi\n';

        // Remove from generic overlay
        s += 'if [ -d "/data/adb/overlay" ]; then\n';
        s += '  for D in system product system_ext vendor; do\n';
        s += '    rm -rf "/data/adb/overlay/$D/fonts/"* 2>/dev/null\n';
        s += '  done\n';
        s += 'fi\n';

        // ksud update
        s += 'if command -v ksud >/dev/null 2>&1; then ksud module update 2>/dev/null; fi\n';
        s += 'echo "RESET_OK"\n';

        shExec(s, function (e, o) {
            setProg(100, t('done'));
            if (String(o || '').indexOf('RESET_OK') !== -1) {
                log(t('reset_ok'));
                toast(t('reset_ok'), 'success');
            } else {
                log(t('reset_fail'));
                toast(t('reset_fail'), 'error');
            }
            loadDevice();
            setTimeout(function () { showProg(false); }, 1500);
        });
    }

    /* =========================
       BACKUP
    ========================= */
    function backupFont() {
        if (!hasRoot) { toast(t('no_root'), 'error'); return; }

        showProg(true);
        setProg(40, t('backing_up'));
        log(t('backing_up'));

        var s = 'D="/data/adb/FontEF_Pro_backup/backup_$(date +%Y%m%d_%H%M%S)"\n';
        s += 'mkdir -p "$D"\n';
        s += 'for F in Roboto-Regular.ttf DroidSans.ttf NotoNaskhArabic-Regular.ttf NotoSansDevanagari-Regular.ttf; do\n';
        s += '  cp -f "/system/fonts/$F" "$D/" 2>/dev/null\n';
        s += 'done\n';
        s += 'cp -f /system/etc/fonts.xml "$D/" 2>/dev/null\n';
        s += 'echo "BK:$D"\n';

        shExec(s, function (e, o) {
            setProg(100, t('done'));
            if (String(o || '').indexOf('BK:') !== -1) {
                var path = String(o).split('BK:')[1].trim();
                log(t('backup_ok') + ': ' + path);
                toast(t('backup_ok'), 'success');
            } else {
                log(t('backup_fail'));
                toast(t('backup_fail'), 'error');
            }
            loadDevice();
            setTimeout(function () { showProg(false); }, 1500);
        });
    }

    /* =========================
       REFRESH / REBOOT
    ========================= */
    function refreshStatus() {
        log(t('refreshing'));
        toast(t('refreshing'), 'info');
        rootChecked = false;
        hasRoot = false;
        __inv = null;
        __bridgeLabel = '';
        checkRoot();
    }

    function rebootDevice() {
        if (!hasRoot) { toast(t('no_root'), 'error'); return; }
        if (!confirm(t('confirm_reboot'))) return;
        log(t('rebooting'));
        toast(t('rebooting'), 'info');
        shExec('reboot', function () {});
    }

    /* =========================
       PREVIEW SIZE CONTROLS
    ========================= */
    function initPreviewSizes() {
        var targets = ['prev-en', 'prev-fa', 'prev-ar', 'prev-ru', 'prev-hi', 'prev-id', 'prev-tr', 'prev-de'];
        for (var i = 0; i < targets.length; i++) pvSizes[targets[i]] = 16;

        // Minus buttons
        var minusBtns = document.querySelectorAll('.sz-minus');
        for (var m = 0; m < minusBtns.length; m++) {
            (function (btn) {
                btn.addEventListener('click', function (e) {
                    e.preventDefault();
                    e.stopPropagation();
                    var target = btn.getAttribute('data-target');
                    if (target && pvSizes[target] > 10) {
                        pvSizes[target] -= 2;
                        applySize(target);
                    }
                });
            })(minusBtns[m]);
        }

        // Plus buttons
        var plusBtns = document.querySelectorAll('.sz-plus');
        for (var p = 0; p < plusBtns.length; p++) {
            (function (btn) {
                btn.addEventListener('click', function (e) {
                    e.preventDefault();
                    e.stopPropagation();
                    var target = btn.getAttribute('data-target');
                    if (target && pvSizes[target] < 36) {
                        pvSizes[target] += 2;
                        applySize(target);
                    }
                });
            })(plusBtns[p]);
        }

        // Reset buttons
        var resetBtns = document.querySelectorAll('.sz-reset');
        for (var r = 0; r < resetBtns.length; r++) {
            (function (btn) {
                btn.addEventListener('click', function (e) {
                    e.preventDefault();
                    e.stopPropagation();
                    var target = btn.getAttribute('data-target');
                    if (target) {
                        pvSizes[target] = 16;
                        applySize(target);
                    }
                });
            })(resetBtns[r]);
        }
    }

    function applySize(target) {
        var size = pvSizes[target];
        var valEl = $('sz-' + target);
        if (valEl) valEl.textContent = size;

        var lines = document.querySelectorAll('.' + target + ':not(.prev-sm)');
        for (var i = 0; i < lines.length; i++) {
            lines[i].style.fontSize = size + 'px';
        }
    }

    /* =========================
       INIT (setup all events)
    ========================= */
    function init() {
        // Language buttons
        var langBtns = document.querySelectorAll('.lang-btn');
        for (var i = 0; i < langBtns.length; i++) {
            (function (btn) {
                btn.addEventListener('click', function (e) {
                    e.preventDefault();
                    for (var j = 0; j < langBtns.length; j++) langBtns[j].classList.remove('active');
                    btn.classList.add('active');
                    lang = btn.getAttribute('data-lang');
                    translate();
                });
            })(langBtns[i]);
        }

        // Preset buttons
        var presetBtns = document.querySelectorAll('.preset-btn');
        for (var p = 0; p < presetBtns.length; p++) {
            (function (btn) {
                btn.addEventListener('click', function (e) {
                    e.preventDefault();
                    for (var j = 0; j < presetBtns.length; j++) presetBtns[j].classList.remove('active');
                    btn.classList.add('active');
                    preset = btn.getAttribute('data-preset');
                    var spans = btn.querySelectorAll('span');
                    if ($('presetName') && spans.length) $('presetName').textContent = spans[0].textContent;
                    log('Preset: ' + preset);
                });
            })(presetBtns[p]);
        }

        // Upload zone
        if ($('dropZone')) {
            $('dropZone').addEventListener('click', function (e) {
                e.preventDefault();
                if ($('fontInput')) $('fontInput').click();
            });
            $('dropZone').addEventListener('dragover', function (e) {
                e.preventDefault();
                e.stopPropagation();
                this.classList.add('drag-over');
            });
            $('dropZone').addEventListener('dragleave', function (e) {
                e.preventDefault();
                this.classList.remove('drag-over');
            });
            $('dropZone').addEventListener('drop', function (e) {
                e.preventDefault();
                e.stopPropagation();
                this.classList.remove('drag-over');
                if (e.dataTransfer && e.dataTransfer.files && e.dataTransfer.files.length > 0) {
                    handleFile(e.dataTransfer.files[0]);
                }
            });
        }

        if ($('fontInput')) {
            $('fontInput').addEventListener('change', function () {
                if (this.files && this.files.length > 0) handleFile(this.files[0]);
            });
        }

        if ($('removeBtn')) {
            $('removeBtn').addEventListener('click', function (e) {
                e.preventDefault();
                e.stopPropagation();
                clearFile();
            });
        }

        // Action buttons
        if ($('applyBtn')) $('applyBtn').addEventListener('click', function (e) { e.preventDefault(); applyFont(); });
        if ($('resetBtn')) $('resetBtn').addEventListener('click', function (e) { e.preventDefault(); resetFont(); });
        if ($('backupBtn')) $('backupBtn').addEventListener('click', function (e) { e.preventDefault(); backupFont(); });
        if ($('refreshBtn')) $('refreshBtn').addEventListener('click', function (e) { e.preventDefault(); refreshStatus(); });
        if ($('rebootBtn')) $('rebootBtn').addEventListener('click', function (e) { e.preventDefault(); rebootDevice(); });

        // Log controls
        if ($('logToggle')) {
            $('logToggle').addEventListener('click', function (e) {
                e.preventDefault();
                var content = $('logContent');
                if (!content) return;
                if (content.style.display === 'none') {
                    content.style.display = 'block';
                    this.textContent = '▼';
                } else {
                    content.style.display = 'none';
                    this.textContent = '▶';
                }
            });
        }

        if ($('logClear')) {
            $('logClear').addEventListener('click', function (e) {
                e.preventDefault();
                if ($('logContent')) $('logContent').textContent = '';
            });
        }

        // Preview size controls
        initPreviewSizes();

        // Security: disable inspect
        document.addEventListener('contextmenu', function (e) { e.preventDefault(); });
        document.addEventListener('keydown', function (e) {
            if (e.key === 'F12') e.preventDefault();
            if (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'i')) e.preventDefault();
            if (e.ctrlKey && (e.key === 'U' || e.key === 'u')) e.preventDefault();
        });

        // Start
        translate();
        log('FontEF Pro v1.0 | @DeZ4p | t.me/DeZ4p');
        log('Bridge: Universal mode');
        checkRoot();
    }

    /* =========================
       START
    ========================= */
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

})();
