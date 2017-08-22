(function () {
  //This service handles the questions/courses data for the app
  angular.module("drivingApp").factory('DataService', DataService);
  DataService.$inject = [];

  function DataService() {
    var result = {}

    var regulations = [{
        name: 'הוראה 1.1 - "תחולה, עדיפות תוקף ועדכון"',
        subTitles: [],
        path: "1.1"
      },
      {
        name: 'הוראה 2.1 - "מונחים, הגדרות ומושגי יסוד"',
        subTitles: [{
            term: "נהיגה סמכויות נהיגה לנהגים",
            page: 1
          },
          {
            term: "סוגי נסיעות",
            page: 2
          }
        ],
        path: "2.1"
      },
      {
        name: 'הוראה 2.2 - "סמכויות בתחום הבטיחות בדרכים"',
        subTitles: [{
          term: "גופי סמכויות",
          page: 1
        }],
        path: "2.2"
      },
      {
        name: 'הוראה 3.1 - "בעלי תפקיד ואחריותם"',
        subTitles: [{
            term: "קצין בטיחות תפקידו ואחריותו",
            page: 1
          },
          {
            term: "קצין רכב תפקידו ואחריותו",
            page: 4
          }

        ],
        path: "3.1"
      },
      {
        name: 'הוראה 3.2 - "ועדת בטיחות בדרכים יחידתית"',
        subTitles: [],
        path: "3.2"
      },
      {
        name: 'הוראה 3.3 - "פעילות מחייבת בתחום הבטיחות בדרכים לכלל חיילי היחידה"',
        subTitles: [],
        path: "3.3"
      },
      {
        name: 'הוראה 3.4 - "פעילות מחייבת לקראת יציאה לחופשה"',
        subTitles: [],
        path: "3.4"
      },
      {
        name: 'הוראה 3.5 - "פעילות מחייבת לבעלי רישיונות נהיגה צבאיים "',
        subTitles: [{
            term: "כנס נהגים",
            page: 1
          },
          {
            term: "רענון נהג בשירות סדיר",
            page: 3
          }
        ],
        path: "3.5"
      },
      {
        name: 'הוראה 3.6 - "קליטה והכשרת נהג ביחידה"',
        subTitles: [{
            term: "קליטת נהג ביחידה",
            page: 3
          },
          {
            term: "תהליך הכשרת נהג ביחידה",
            page: 4
          },
          {
            term: "הכשרת נהיגה על רכב ממוגן",
            page: 9
          },
          {
            term: "הכשרת נהג אוטובוס",
            page: 9
          },
          {
            term: "הכשרת נהג לגרירת גרור",
            page: 9
          },
          {
            term: 'הכשרת נהג בט"ש',
            page: 10
          },
          {
            term: "הכשרת נהג מבצעי ולוחם נהג",
            page: 11
          },
          {
            term: "הכשרת נהג מבצעי ונהג לוחם",
            page: 11
          },
          {
            term: 'הכשרת נהג מת"ק',
            page: 11
          },
          {
            term: "נגד אחזקה לצורך נהיגה במשטח טיפולים",
            page: 12
          },
          {
            term: "השלמת תהליך הקליטה",
            page: 13
          },
          {
            term: "ניהול תיק נהג",
            page: 13
          },
          {
            term: "חריגים ופטור מביצוע הכשרת נהג ביחידה",
            page: 14
          },
          {
            term: "פורמט תיק ייעודי להכשרת נהג",
            page: 16
          },
          {
            term: "כרטיס מעקב אחר חניכת נהג הביחידה",
            page: 24
          },
          {
            term: "טבלת היתרים",
            page: 27
          }

        ],
        path: "3.6"
      },
      {
        name: 'הוראה 3.7 - "השתלמות נהיגה נכונה"',
        subTitles: [{
          term: "השתלמות נהיגה מונעת",
          page: 1
        }],
        path: "3.7"
      },
      {
        name: 'הוראה 3.8 - "שילוח משימת נהיגה"',
        subTitles: [{
            term: "מפקד משלח",
            page: 2
          },
          {
            term: "תפקדי המפקד המשלח",
            page: 2
          },
          {
            term: "מפקד משימת נהיגה",
            page: 3
          },
          {
            term: "שילוח משאיות המוקצות על ידי מרכז הובלה",
            page: 6
          }

        ],
        path: "3.8"
      },
      {
        name: 'הוראה 3.9 - "שעות נהיגה ומנוחה לנהגים ביחידה"',
        subTitles: [{
            term: "שעות מנוחה",
            page: 1
          },
          {
            term: "שעות שינה",
            page: 1
          },
          {
            term: "שעות נהיגה",
            page: 1
          }
        ],
        path: "3.9"
      },
      {
        name: 'הוראה 3.10 - "פעילות מחייבת לאחר אירוע בטיחות דרכים"',
        subTitles: [{
          term: "דיווח על תאונות דרכים",
          page: 1
        }],
        path: "3.10"
      },
      {
        name: 'הוראה 3.11 - "ביקורת ביחידה בתחום הבטיחות בדרכים"',
        subTitles: [{
          term: "ביקורות",
          page: 1
        }],
        path: "3.11"
      },
      {
        name: 'הוראה 3.12 –"איך אני נוהג ?" – נוהל 6',
        subTitles: [{
            term: "מדבקה",
            page: 1
          },
          {
            term: "אופן הטיפול בדיווח",
            page: 2
          }
        ],
        path: "3.12"
      },
      {
        name: 'הוראה 3.13 - "הסדרי תנועה בכניסה/בתוך מחנות צה"ל"',
        subTitles: [],
        path: "3.13"
      },
      {
        name: 'הוראה 3.14 - "הגעת חיילים עם רכב פרטי ליחידה"',
        subTitles: [{
          term: "איסור הגעה ברכב פרטי ליחידה",
          page: 2
        }],
        path: "3.14"
      },
      {
        name: 'הוראה 3.15 - "הטמעה ושימוש בעוזר נהג אלקטרוני (ענ"א) ביחידות"',
        subTitles: [],
        path: "3.15"
      },
      {
        name: 'הוראה 3.16 - "קליטת כלי רכב חדש ביחידה"',
        subTitles: [],
        path: "3.16"
      },
      {
        name: 'הוראה 3.17 - " רענון נהיגה לחייל מילואים"',
        subTitles: [],
        path: "3.17"
      },
      {
        name: 'הוראה 4.1 - "הולכי רגל"',
        subTitles: [{
          term: 'חציית כביש על ידי קבוצת חיילים',
          page: 2
        }],
        path: "4.1"
      },
      {
        name: 'הוראה 4.2 - "מספר הנוסעים ברכב"',
        subTitles: [],
        path: "4.2"
      },
      {
        name: 'הוראה 4.3 -  "אמצעי בטיחות בכלי הרכב"',
        subTitles: [{
            term: 'חגורת בטיחות',
            page: 1
          },
          {
            term: 'רצועות צד',
            page: 4
          },
          {
            term: 'קסדות',
            page: 4
          },
          {
            term: 'משקפי מגן',
            page: 5
          },
          {
            term: 'מיגון אוזניים',
            page: 5
          },
          {
            term: 'איבטוח מושבי כלי הרכב',
            page: 5
          },
          {
            term: 'עיגון ציוד',
            page: 5
          }
        ],
        path: "4.3"
      },
      {
        name: 'הוראה 4.4  - "הדלקת אורות במהלך נסיעה"',
        subTitles: [],
        path: "4.4"
      },
      {
        name: 'הוראה 4.5 - "מהירות נסיעה"',
        subTitles: [],
        path: "4.5"
      },
      {
        name: 'הוראה 4.6 -  "הגבלה על שימוש במכשירים אלקטרוניים"',
        subTitles: [{
            term: 'טלפון סלולרי',
            page: 1
          },
          {
            term: 'פלאפון',
            page: 1
          },
          {
            term: 'סמארטפון',
            page: 1
          },
          {
            term: 'אוזניה אלחוטית',
            page: 1
          }
        ],
        path: "4.6"
      },
      {
        name: 'הוראה 4.7 - "נסיעה לאחור"',
        subTitles: [],
        path: "4.7"
      },
      {
        name: 'הוראה 4.8 - "חניית כלי רכב"',
        subTitles: [],
        path: "4.8"
      },
      {
        name: 'הוראה 4.9 - " חילוץ ופינוי רכב"',
        subTitles: [],
        path: "4.9"
      },
      {
        name: 'הוראה 4.10  - "ביצוע תרגולת התהפכות ברכב רב הינע"',
        subTitles: [],
        path: "4.10"
      },
      {
        name: 'הוראה 4.11 - " מצב כלי הרכב והתקניו "',
        subTitles: [],
        path: "4.11"
      },
      {
        name: 'הוראה 4.12 -"תנועת כלי רכב ללא מראות תשקיף"',
        subTitles: [{
          term: 'מראות פנורמיות',
          page: 1
        }],
        path: "4.12"
      },
      {
        name: 'הוראה 4.13 – "תנועת כלי רכב בשיירה מנהלתית"',
        subTitles: [{
          term: 'תכנון שיירה מנהלתית',
          page: 1
        }],
        path: "4.13"
      },
      {
        name: 'הוראה 4.14 -  "שול הדרך"',
        subTitles: [],
        path: "4.14"
      },
      {
        name: 'הוראה 4.15 – חציית מסילות רכבת על-ידי כלי רכב.',
        subTitles: [],
        path: "4.15"
      },
      {
        name: 'הוראה 5.1 - "הגבלות על שימוש באוטובוס, רכב יעודי, רכב משא, רכב רב הינע, ודו גלגלי מנועי"',
        subTitles: [],
        path: "5.1"
      },
      {
        name: 'הוראה 5.2 - "רכב ביטחון"',
        subTitles: [],
        path: "5.2"
      },
      {
        name: 'הוראה 5.3 - "רכב אמבולנס"',
        subTitles: [],
        path: "5.3"
      },
      {
        name: 'הוראה 5.4  - "רכב דו – גלגלי מנועי"',
        subTitles: [{
          term: 'אופנוע',
          page: 1
        }],
        path: "5.4"
      },
      {
        name: 'הוראה 5.5  - "רכב קלנועית"',
        subTitles: [{
          term: 'הכשרה והסמכה על רכב קולנועית',
          page: 1
        }],
        path: "5.5"
      },
    ]

    return {
      result: result,
      regulations: regulations
    };
  }
})();