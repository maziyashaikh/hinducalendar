const hinduCalendar2025 = {
            1: { 
                1: { tithi: "Pratipada", festivals: ["New Year", "नववर्ष", "ಹೊಸ ವರ್ಷ"], events: ["Gregorian New Year", "नवीन वर्षाची सुरुवात", "ಹೊಸ ವರ್ಷದ ಆರಂಭ"] },
                2: { tithi: "Dvitiya", festivals: ["Guru Gobind Singh Jayanti", "गुरु गोविंद सिंह जयंती", "ಗುರು ಗೋವಿಂದ ಸಿಂಹ ಜಯಂತಿ"], events: ["Tenth Sikh Guru birthday", "दशावे शीख गुरुचा जन्मदिन", "ಹತ್ತನೇ ಸಿಖ್ ಗುರುವಿನ ಜನ್ಮದಿನ"] },
                3: { tithi: "Tritiya", vrats: ["Mangalwar Vrat", "मंगळवार व्रत", "ಮಂಗಳವಾರ ವ್ರತ"], events: ["Tuesday observance", "मंगळवारचे पालन", "ಮಂಗಳವಾರದ ಆಚರಣೆ"] },
                4: { tithi: "Chaturthi", vrats: ["Ganesh Chaturthi", "गणेश चतुर्थी", "ಗಣೇಶ ಚತುರ್ಥಿ"], events: ["Monthly Ganesh worship", "मासिक गणेश पूजा", "ಮಾಸಿಕ ಗಣೇಶ ಪೂಜೆ"] },
                5: { tithi: "Panchami", vrats: ["Saraswati Panchami", "सरस्वती पंचमी", "ಸರಸ್ವತಿ ಪಂಚಮಿ"], events: ["Knowledge worship", "ज्ञानाची पूजा", "ಜ್ಞಾನದ ಪೂಜೆ"] },
                6: { tithi: "Shashthi", festivals: ["Epiphany", "एपिफनी", "ಎಪಿಫನಿ"], events: ["Christian celebration", "ख्रिस्ती उत्सव", "ಕ್ರಿಸ್ಚಿಯನ್ ಆಚರಣೆ"] },
                7: { tithi: "Saptami", vrats: ["Shani Jayanti", "शनि जयंती", "ಶನಿ ಜಯಂತಿ"], events: ["Saturn worship", "शनीची पूजा", "ಶನಿಯ ಪೂಜೆ"] },
                8: { tithi: "Ashtami", vrats: ["Durga Ashtami", "दुर्गा अष्टमी", "ದುರ್ಗಾ ಅಷ್ಟಮಿ"], events: ["Goddess Durga worship", "देवी दुर्गेची पूजा", "ದೇವಿ ದುರ್ಗೆಯ ಪೂಜೆ"] },
                9: { tithi: "Navami", vrats: ["Ram Navami", "राम नवमी", "ರಾಮ ನವಮಿ"], events: ["Lord Rama worship", "राम भगवानाची पूजा", "ರಾಮ ಭಗವಾನ್ ಪೂಜೆ"] },
                10: { tithi: "Dashami", events: ["Regular observance", "नियमित पालन", "ನಿಯಮಿತ ಆಚರಣೆ"] },
                11: { tithi: "Ekadashi", festivals: ["Putrada Ekadashi", "पुत्रदा एकादशी", "ಪುತ್ರದಾ ಏಕಾದಶಿ"], events: ["Ekadashi fast", "एकादशी उपवास", "ಏಕಾದಶಿ ಉಪವಾಸ"] },
                12: { tithi: "Dvadashi", events: ["Post Ekadashi", "एकादशी नंतर", "ಏಕಾದಶಿಯ ನಂತರ"] },
                13: { tithi: "Trayodashi", vrats: ["Pradosh Vrat", "प्रदोष व्रत", "ಪ್ರದೋಷ ವ್ರತ"], events: ["Shiva worship", "शिवाची पूजा", "ಶಿವನ ಪೂಜೆ"] },
                14: { tithi: "Chaturdashi", festivals: ["Makar Sankranti", "मकर संक्रांति", "ಮಕರ ಸಂಕ್ರಾಂತಿ"], events: ["Sun in Capricorn", "मकर राशीत सूर्य", "ಮಕರ ರಾಶಿಯಲ್ಲಿ ಸೂರ್ಯ"] },
                15: { tithi: "Purnima", festivals: ["Paush Purnima", "पौष पूर्णिमा", "ಪೌಷ ಪೂರ್ಣಿಮಾ"], events: ["Full moon", "पौर्णिमा", "ಪೂರ್ಣಿಮೆ"] },
                16: { tithi: "Pratipada", events: ["New lunar fortnight", "नवीन पक्ष", "ಹೊಸ ಪಕ್ಷ"] },
                17: { tithi: "Dvitiya", events: ["Second lunar day", "द्वितीय तिथी", "ದ್ವಿತೀಯ ತಿಥಿ"] },
                18: { tithi: "Tritiya", vrats: ["Swami Vivekananda Jayanti", "स्वामी विवेकानंद जयंती", "ಸ್ವಾಮಿ ವಿವೇಕಾನಂದ ಜಯಂತಿ"], events: ["Spiritual teaching", "आध्यात्मिक शिक्षा", "ಆಧ್ಯಾತ್ಮಿಕ ಶಿಕ್ಷಣ"] },
                19: { tithi: "Chaturthi", events: ["Monthly Ganesh worship", "मासिक गणेश पूजा", "ಮಾಸಿಕ ಗಣೇಶ ಪೂಜೆ"] },
                20: { tithi: "Panchami", events: ["Knowledge day", "ज्ञान दिवस", "ಜ್ಞಾನ ದಿನ"] },
                21: { tithi: "Shashthi", events: ["Sixth lunar day", "षष्ठी तिथी", "ಷಷ್ಠಿ ತಿಥಿ"] },
                22: { tithi: "Saptami", events: ["Seventh lunar day", "सप्तमी तिथी", "ಸಪ್ತಮಿ ತಿಥಿ"] },
                23: { tithi: "Ashtami", vrats: ["Durga Ashtami", "दुर्गा अष्टमी", "ದುರ್ಗಾ ಅಷ್ಟಮಿ"], events: ["Goddess worship", "देवी पूजा", "ದೇವಿ ಪೂಜೆ"] },
                24: { tithi: "Navami", events: ["Ninth lunar day", "नवमी तिथी", "ನವಮಿ ತಿಥಿ"] },
                25: { tithi: "Dashami", events: ["Tenth lunar day", "दशमी तिथী", "ದಶಮಿ ತಿಥಿ"] },
                26: { tithi: "Ekadashi", festivals: ["Republic Day", "प्रजासत्ताक दिन", "ಗಣರಾಜ್ಯೋತ್ಸವ"], events: ["National holiday", "राष्ट्रीय सुट्टी", "ರಾಷ್ಟ್ರೀಯ ರಜೆ"] },
                27: { tithi: "Dvadashi", events: ["Post Ekadashi", "एकादशी नंतर", "ಏಕಾದಶಿಯ ನಂತರ"] },
                28: { tithi: "Trayodashi", vrats: ["Pradosh Vrat", "प्रदोष व्रत", "ಪ್ರದೋಷ ವ್ರತ"], events: ["Shiva worship", "शिवाची पूजा", "ಶಿವನ ಪೂಜೆ"] },
                29: { tithi: "Amavasya", festivals: ["Mauni Amavasya", "मौनी अमावस्या", "ಮೌನಿ ಅಮಾವಾಸ್ಯೆ"], events: ["Silence observance", "मौन व्रत", "ಮೌನ ವ್ರತ"] },
                30: { tithi: "Pratipada", events: ["New lunar month", "नवीन चांद्र मास", "ಹೊಸ ಚಾಂದ್ರ ಮಾಸ"] },
                31: { tithi: "Dvitiya", events: ["Second day", "द्वितीय दिन", "ದ್ವಿತೀಯ ದಿನ"] }
            },
            7: { 
                1: { tithi: "Shashthi", events: ["Sixth lunar day", "षष्ठी तिथी", "ಷಷ್ಠಿ ತಿಥಿ"] },
                2: { tithi: "Saptami", events: ["Seventh lunar day", "सप्तमी तिथी", "ಸಪ್ತಮಿ ತಿಥಿ"] },
                3: { tithi: "Ashtami", vrats: ["Durga Ashtami", "दुर्गा अष्टमी", "ದುರ್ಗಾ ಅಷ್ಟಮಿ"], events: ["Goddess worship", "देवी पूजा", "ದೇವಿ ಪೂಜೆ"] },
                4: { tithi: "Navami", events: ["Ninth lunar day", "नवमी तिथी", "ನವಮಿ ತಿಥಿ"] },
                5: { tithi: "Dashami", events: ["Tenth lunar day", "दशमी तिथी", "ದಶಮಿ ತಿಥಿ"] },
                6: { tithi: "Ekadashi", festivals: ["Devshayani Ekadashi", "देवशयनी एकादशी", "ದೇವಶಯನಿ ಏಕಾದಶಿ"], events: ["Lord Vishnu's four-month rest begins", "भगवान विष्णूंचा चतुर्मास प्रारंभ", "ಭಗವಾನ್ ವಿಷ್ಣುವಿನ ಚತುರ್ಮಾಸ ಪ್ರಾರಂಭ"] },
                7: { tithi: "Dvadashi", events: ["Post Ekadashi", "एकादशी नंतर", "ಏಕಾದಶಿಯ ನಂತರ"] },
                8: { tithi: "Trayodashi", vrats: ["Pradosh Vrat", "प्रदोष व्रत", "ಪ್ರದೋಷ ವ್ರತ"], events: ["Shiva worship", "शिवाची पूजा", "ಶಿವನ ಪೂಜೆ"] },
                9: { tithi: "Chaturdashi", events: ["Fourteenth lunar day", "चतुर्दशी तिथी", "ಚತುರ್ದಶಿ ತಿಥಿ"] },
                10: { tithi: "Purnima", festivals: ["Guru Purnima", "गुरु पूर्णिमा", "ಗುರು ಪೂರ್ಣಿಮೆ"], events: ["Full moon of Ashadha month", "आषाढ महिन्याची पौर्णिमा", "ಆಷಾಢ ಪೂರ್ಣಿಮೆ"] },
                11: { tithi: "Pratipada", events: ["Start of Shravana month", "श्रावण महिन्याची सुरुवात", "ಶ್ರಾವಣ ತಿಂಗಳ ಪ್ರಾರಂಭ"] },
                12: { tithi: "Dvitiya", events: ["Second lunar day", "द्वितीय तिथी", "ದ್ವಿತೀಯ ತಿಥಿ"] },
                13: { tithi: "Tritiya", events: ["Third lunar day", "तृतीय तिथी", "ತೃತೀಯ ತಿಥಿ"] },
                14: { tithi: "Chaturthi", vrats: ["Ganesh Chaturthi", "गणेश चतुर्थी", "ಗಣೇಶ ಚತುರ್ಥಿ"], events: ["Monthly Ganesh worship", "मासिक गणेश पूजा", "ಮಾಸಿಕ ಗಣೇಶ ಪೂಜೆ"] },
                15: { tithi: "Panchami", events: ["Fifth lunar day", "पंचमी तिथी", "ಪಂಚಮಿ ತಿಥಿ"] },
                16: { tithi: "Shashthi", events: ["Sixth lunar day", "षष्ठी तिथী", "ಷಷ್ಠಿ ತಿಥಿ"] },
                17: { tithi: "Saptami", events: ["Seventh lunar day", "सप्तमी तिथी", "ಸಪ್ತಮಿ ತಿಥಿ"] },
                18: { tithi: "Ashtami", events: ["Eighth lunar day", "अष्टमी तिथी", "ಅಷ್ಟಮಿ ತಿಥಿ"] },
                19: { tithi: "Navami", events: ["Ninth lunar day", "नवमी तिथी", "ನವಮಿ ತಿಥಿ"] },
                20: { tithi: "Ekadashi", festivals: ["Kamika Ekadashi", "कामिका एकादशी", "ಕಾಮಿಕ ಏಕಾದಶಿ"], events: ["Day of fasting for Lord Vishnu", "भगवान विष्णूचा उपवास दिवस", "ಭಗವಾನ್ ವಿಷ್ಣುವಿನ ಉಪವಾಸ"] },
                21: { tithi: "Dvadashi", events: ["Post Ekadashi", "एकादशी नंतर", "ಏಕಾದಶಿಯ ನಂತರ"] },
                22: { tithi: "Trayodashi", events: ["Thirteenth lunar day", "त्रयोदशी तिथी", "ತ್ರಯೋದಶಿ ತಿಥಿ"] },
                23: { tithi: "Chaturdashi", events: ["Fourteenth lunar day", "चतुर्दशी तिथी", "ಚತುರ್ದಶಿ ತಿಥಿ"] },
                24: { tithi: "Amavasya", festivals: ["Hariyali Amavasya", "हरियाळी अमावस्या", "ಹರಿಯಾಳಿ ಅಮಾವಾಸ್ಯೆ"], events: ["New moon rituals", "अमावस्या विधी", "ಅಮಾವಾಸ್ಯೆ ವಿಧಿ"] },
                25: { tithi: "Pratipada", events: ["First lunar day after Amavasya", "अमावस्या नंतर प्रथम तिथी", "ಅಮಾವಾಸ್ಯೆ ನಂತರ ಮೊದಲ ತಿಥಿ"] },
                26: { tithi: "Dvitiya", events: ["Second lunar day", "द्वितीय तिथी", "ದ್ವಿತೀಯ ತಿಥಿ"] },
                27: { tithi: "Tritiya", festivals: ["Hariyali Teej", "हरियाळी तीज", "ಹರಿಯಾಳಿ ತೀಜ್"], events: ["Monsoon festival", "पावसाळी उत्सव", "ಮಳೆ ಹಬ್ಬ"] },
                28: { tithi: "Chaturthi", events: ["Fourth lunar day", "चतुर्थी तिथी", "ಚತುರ್ಥಿ ತಿಥಿ"] },
                29: { tithi: "Panchami", festivals: ["Nag Panchami", "नाग पंचमी", "ನಾಗ ಪಂಚಮಿ"], events: ["Serpent worship", "सर्पपूजा", "ಸರ್ಪ ಪೂಜೆ"] },
                30: { tithi: "Shashthi", events: ["Sixth lunar day", "षष्ठी तिथी", "ಷಷ್ಠಿ ತಿಥಿ"] },
                31: { tithi: "Saptami", events: ["Seventh lunar day", "सप्तमी तिति", "ಸಪ್ತಮಿ ತಿಥಿ"] }
            }
        };

        const translations = {
            en: {
                months: ["January", "February", "March", "April", "May", "June",
                    "July", "August", "September", "October", "November", "December"],
                days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                dayShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                numerals: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
                today: "Today",
                popup: {
                    tithi: "Tithi:",
                    festival: "Festival:",
                    vrat: "Vrat/Observance:",
                    significance: "Significance:",
                    culturalNote: "Cultural Note:",
                    culturalText: "This day holds special significance in the Hindu calendar."
                }
            },
            mr: {
                months: ["जानेवारी", "फेब्रुवारी", "मार्च", "एप्रिल", "मे", "जून",
                    "जुलै", "ऑगस्ट", "सप्टेंबर", "ऑक्टोबर", "नोव्हेंबर", "डिसेंबर"],
                days: ["रविवार", "सोमवार", "मंगळवार", "बुधवार", "गुरुवार", "शुक्रवार", "शनिवार"],
                dayShort: ["रवि", "सोम", "मंगळ", "बुध", "गुरु", "शुक्र", "शनि"],
                numerals: ["०", "१", "२", "३", "४", "५", "६", "७", "८", "९"],
                today: "आज",
                popup: {
                    tithi: "तिथी:",
                    festival: "सण:",
                    vrat: "व्रत/पालन:",
                    significance: "महत्त्व:",
                    culturalNote: "सांस्कृतिक टीप:",
                    culturalText: "हा दिवस हिंदू कैलेंडरमध्ये विशेष महत्त्व दर्शवतो."
                }
            },
            kn: {
                months: ["ಜನವರಿ", "ಫೆಬ್ರುವರಿ", "ಮಾರ್ಚ್", "ಏಪ್ರಿಲ್", "ಮೇ", "ಜೂನ್",
                    "ಜುಲೈ", "ಆಗಸ್ಟ್", "ಸೆಪ್ಟೆಂಬರ್", "ಅಕ್ಟೋಬರ್", "ನವೆಂಬರ್", "ಡಿಸೆಂಬರ್"],
                days: ["ಭಾನುವಾರ", "ಸೋಮವಾರ", "ಮಂಗಳವಾರ", "ಬುಧವಾರ", "ಗುರುವಾರ", "ಶುಕ್ರವಾರ", "ಶನಿವಾರ"],
                dayShort: ["ಭಾನು", "ಸೋಮ", "ಮಂಗಳ", "ಬುಧ", "ಗುರು", "ಶುಕ್ರ", "ಶನಿ"],
                numerals: ["೦", "೧", "೨", "೩", "೪", "೫", "೬", "೭", "೮", "೯"],
                today: "ಇಂದು",
                popup: {
                    tithi: "ತಿಥಿ:",
                    festival: "ಹಬ್ಬ:",
                    vrat: "ವ್ರತ/ಆಚರಣೆ:",
                    significance: "ಮಹತ್ವ:",
                    culturalNote: "ಸಾಂಸ್ಕೃತಿಕ ಟಿಪ್ಪಣಿ:",
                    culturalText: "ಈ ದಿನವು ಹಿಂದೂ ಕ್ಯಾಲೆಂಡರ್‌ನಲ್ಲಿ ವಿಶೇಷ ಮಹತ್ವವನ್ನು ಹೊಂದಿದೆ."
                }
            }
        };

        let currentMonth = new Date().getMonth();
        let currentYear = 2025;
        let currentLanguage = 'en';

        document.addEventListener('DOMContentLoaded', function () {
            setupEventListeners();
            updateDisplay();
        });

        function setupEventListeners() {
            document.querySelectorAll('.lang-btn').forEach(btn => {
                btn.addEventListener('click', function () {
                    document.querySelectorAll('.lang-btn').forEach(b => b.classList.remove('active'));
                    this.classList.add('active');
                    currentLanguage = this.dataset.lang;
                    updateDisplay();
                });
            });

            document.getElementById('prev-month').addEventListener('click', function () {
                currentMonth = (currentMonth - 1 + 12) % 12;
                updateDisplay();
            });

            document.getElementById('next-month').addEventListener('click', function () {
                currentMonth = (currentMonth + 1) % 12;
                updateDisplay();
            });

            document.getElementById('popup-close').addEventListener('click', closePopup);
            document.getElementById('event-popup').addEventListener('click', function (e) {
                if (e.target === this) closePopup();
            });

            document.addEventListener('keydown', function (e) {
                if (e.key === 'ArrowLeft') {
                    document.getElementById('prev-month').click();
                } else if (e.key === 'ArrowRight') {
                    document.getElementById('next-month').click();
                } else if (e.key === 'Escape') {
                    closePopup();
                }
            });
        }

        function convertToLocalNumber(number) {
            const numerals = translations[currentLanguage].numerals;
            return number.toString().split('').map(digit => numerals[parseInt(digit)] || digit).join('');
        }

        function updateDisplay() {
            const lang = translations[currentLanguage];
            const localYear = convertToLocalNumber(currentYear);
            document.getElementById('month-year').textContent = `${lang.months[currentMonth]} ${localYear}`;
            const today = new Date();
            const todayStr = `${lang.today}: ${today.getDate()} ${lang.months[today.getMonth()]} ${today.getFullYear()}`;
            document.getElementById('today-info').textContent = todayStr;
            generateCalendar();
        }

        function generateCalendar() {
            const lang = translations[currentLanguage];
            const calendarGrid = document.getElementById('calendar-grid');
            const firstDay = new Date(currentYear, currentMonth, 1).getDay();
            const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
            const today = new Date();
            let html = '';
            lang.dayShort.forEach(day => {
                html += `<div class="day-header">${day}</div>`;
            });
            const prevMonth = currentMonth === 0 ? 11 : currentMonth - 1;
            const prevMonthYear = currentMonth === 0 ? currentYear - 1 : currentYear;
            const daysInPrevMonth = new Date(prevMonthYear, prevMonth + 1, 0).getDate();
            
            for (let i = firstDay - 1; i >= 0; i--) {
                const day = daysInPrevMonth - i;
                html += `<div class="day-cell other-month">
                    <div class="day-number">${convertToLocalNumber(day)}</div>
                </div>`;
            }
            for (let day = 1; day <= daysInMonth; day++) {
                const dayData = hinduCalendar2025[currentMonth + 1]?.[day];
                const isToday = currentYear === today.getFullYear() &&
                    currentMonth === today.getMonth() &&
                    day === today.getDate();

                let classes = 'day-cell';
                if (isToday) classes += ' today';

                html += `<div class="${classes}" onclick="showEventDetails(${day})">
                    ${createDayContent(day, dayData)}
                </div>`;
            }
            const totalCells = firstDay + daysInMonth;
            const remainingCells = Math.ceil(totalCells / 7) * 7 - totalCells;
            for (let i = 1; i <= remainingCells; i++) {
                html += `<div class="day-cell other-month">
                    <div class="day-number">${convertToLocalNumber(i)}</div>
                </div>`;
            }

            calendarGrid.innerHTML = html;
        }

        function createDayContent(day, dayData) {
            const localDay = convertToLocalNumber(day);
            let content = `<div class="day-number">${localDay}</div>`;

            // Tithi
            if (dayData && dayData.tithi) {
                const tithi = translateTithi(dayData.tithi);
                content += `<div class="tithi">${tithi}</div>`;
            }

            content += '<div class="events">';

            if (dayData) {
                if (dayData.festivals) {
                    const festivalName = dayData.festivals[currentLanguage === 'en' ? 0 : currentLanguage === 'mr' ? 1 : 2];
                    content += `<div class="event-item festival-item">${festivalName.substring(0, 20)}${festivalName.length > 20 ? '...' : ''}</div>`;
                }

                if (dayData.vrats) {
                    const vratName = dayData.vrats[currentLanguage === 'en' ? 0 : currentLanguage === 'mr' ? 1 : 2];
                    content += `<div class="event-item vrat-item">${vratName.substring(0, 20)}${vratName.length > 20 ? '...' : ''}</div>`;
                }
            }

            content += '</div>';
            return content;
        }

        function translateTithi(tithi) {
            const tithiTranslations = {
                en: {
                    "Pratipada": "Pratipada",
                    "Dvitiya": "Dvitiya",
                    "Tritiya": "Tritiya",
                    "Chaturthi": "Chaturthi",
                    "Panchami": "Panchami",
                    "Shashthi": "Shashthi",
                    "Saptami": "Saptami",
                    "Ashtami": "Ashtami",
                    "Navami": "Navami",
                    "Dashami": "Dashami",
                    "Ekadashi": "Ekadashi",
                    "Dvadashi": "Dvadashi",
                    "Trayodashi": "Trayodashi",
                    "Chaturdashi": "Chaturdashi",
                    "Purnima": "Purnima",
                    "Amavasya": "Amavasya"
                },
                mr: {
                    "Pratipada": "प्रतिपदा",
                    "Dvitiya": "द्वितीया",
                    "Tritiya": "तृतीया",
                    "Chaturthi": "चतुर्थी",
                    "Panchami": "पंचमी",
                    "Shashthi": "षष्ठी",
                    "Saptami": "सप्तमी",
                    "Ashtami": "अष्टमी",
                    "Navami": "नवमी",
                    "Dashami": "दशमी",
                    "Ekadashi": "एकादशी",
                    "Dvadashi": "द्वादशी",
                    "Trayodashi": "त्रयोदशी",
                    "Chaturdashi": "चतुर्दशी",
                    "Purnima": "पूर्णिमा",
                    "Amavasya": "अमावस्या"
                },
                kn: {
                    "Pratipada": "ಪ್ರತಿಪದ",
                    "Dvitiya": "ದ್ವಿತೀಯಾ",
                    "Tritiya": "ತೃತೀಯಾ",
                    "Chaturthi": "ಚತುರ್ಥಿ",
                    "Panchami": "ಪಂಚಮಿ",
                    "Shashthi": "ಷಷ್ಠಿ",
                    "Saptami": "ಸಪ್ತಮಿ",
                    "Ashtami": "ಅಷ್ಟಮಿ",
                    "Navami": "ನವಮಿ",
                    "Dashami": "ದಶಮಿ",
                    "Ekadashi": "ಏಕಾದಶಿ",
                    "Dvadashi": "ದ್ವಾದಶಿ",
                    "Trayodashi": "ತ್ರಯೋದಶಿ",
                    "Chaturdashi": "ಚತುರ್ದಶಿ",
                    "Purnima": "ಪೂರ್ಣಿಮಾ",
                    "Amavasya": "ಅಮಾವಾಸ್ಯೆ"
                }
            };
            
            const translations = tithiTranslations[currentLanguage] || tithiTranslations.en;
            return translations[tithi] || tithi;
        }



        function showEventDetails(day) {
            const dayData = hinduCalendar2025[currentMonth + 1]?.[day];
            const popup = document.getElementById('event-popup');
            const title = document.getElementById('popup-title');
            const details = document.getElementById('popup-details');
            const lang = translations[currentLanguage];
            const date = new Date(currentYear, currentMonth, day);
            const dayName = lang.days[date.getDay()];

            const localDay = convertToLocalNumber(day);
            const localYear = convertToLocalNumber(currentYear);
            title.innerHTML = `${localDay} ${lang.months[currentMonth]} ${localYear} - ${dayName}`;

            let detailsHTML = '';

            if (dayData) {
                // Tithi information
                if (dayData.tithi) {
                    const translatedTithi = translateTithi(dayData.tithi);
                    detailsHTML += `<div class="detail-item">
                        <strong>📅 ${lang.popup.tithi}</strong> ${translatedTithi}
                    </div>`;
                }

                if (dayData.festivals) {
                    const festivalName = dayData.festivals[currentLanguage === 'en' ? 0 : currentLanguage === 'mr' ? 1 : 2];
                    detailsHTML += `<div class="detail-item">
                        <strong>🎉 ${lang.popup.festival}</strong><br>${festivalName}
                    </div>`;
                }

                if (dayData.vrats) {
                    const vratName = dayData.vrats[currentLanguage === 'en' ? 0 : currentLanguage === 'mr' ? 1 : 2];
                    detailsHTML += `<div class="detail-item">
                        <strong>🕉️ ${lang.popup.vrat}</strong><br>${vratName}
                    </div>`;
                }

                if (dayData.events) {
                    const event = dayData.events[currentLanguage === 'en' ? 0 : currentLanguage === 'mr' ? 1 : 2];
                    detailsHTML += `<div class="detail-item">
                        <strong>✨ ${lang.popup.significance}</strong><br>${event}
                    </div>`;
                }

                // Cultural note
                detailsHTML += `<div class="detail-item">
                    <strong>🙏 ${lang.popup.culturalNote}</strong><br>
                    ${lang.popup.culturalText}
                </div>`;
            } else {
                detailsHTML = `<div class="detail-item">
                    <strong>📅 Regular Day</strong><br>
                    This is a regular day in the Hindu lunar calendar.
                </div>`;
            }

            details.innerHTML = detailsHTML;
            popup.style.display = 'flex';
        }

        function closePopup() {
            document.getElementById('event-popup').style.display = 'none';
        }

        // Touch gestures for mobile
        let touchStartX = 0;
        let touchEndX = 0;

        document.addEventListener('touchstart', function (e) {
            touchStartX = e.changedTouches[0].screenX;
        }, { passive: true });

        document.addEventListener('touchend', function (e) {
            touchEndX = e.changedTouches[0].screenX;
            handleSwipe();
        }, { passive: true });

        function handleSwipe() {
            const swipeThreshold = 50;
            const diff = touchStartX - touchEndX;

            if (Math.abs(diff) > swipeThreshold) {
                if (diff > 0) {
                    // Swipe left - next month
                    document.getElementById('next-month').click();
                } else {
                    // Swipe right - previous month
                    document.getElementById('prev-month').click();
                }
            }
        }