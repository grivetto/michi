export type Language = 'it' | 'en' | 'es' | 'th';

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: string;
  category: 'pizza' | 'pasta' | 'main' | 'dessert' | 'wine';
  tags?: string[];
}

export const MENU_DATA_BY_LANG: Record<Language, MenuItem[]> = {
  it: [
    {
      id: 'p1',
      name: 'Margherita Classica',
      description: "Pomodoro San Marzano, mozzarella di bufala, basilico fresco, olio extravergine d'oliva.",
      price: '14.00',
      category: 'pizza',
      tags: ['Vegetariano', 'Popolare']
    },
    {
      id: 'p2',
      name: 'Diavola',
      description: 'Salsa di pomodoro, mozzarella, salame piccante, peperoncino in scaglie.',
      price: '16.50',
      category: 'pizza'
    },
    {
      id: 'p3',
      name: 'Tartufata',
      description: 'Base bianca, mozzarella, crema di tartufo, funghi porcini, prezzemolo.',
      price: '19.00',
      category: 'pizza',
      tags: ['Specialità dello Chef']
    },
    {
      id: 'pa1',
      name: 'Linguine allo Scoglio',
      description: 'Linguine fresche con cozze, vongole, gamberi e pomodorini.',
      price: '22.00',
      category: 'pasta'
    },
    {
      id: 'pa2',
      name: 'Pappardelle al Cinghiale',
      description: 'Pappardelle fatte a mano con ragù di cinghiale a lenta cottura.',
      price: '20.00',
      category: 'pasta'
    },
    {
      id: 'm1',
      name: 'Tagliata di Manzo',
      description: 'Costata di manzo alla griglia tagliata a fette, servita con rucola, scaglie di parmigiano e glassa di aceto balsamico.',
      price: '28.00',
      category: 'main'
    },
    {
      id: 'd1',
      name: 'Tiramisù della Casa',
      description: "Tiramisù tradizionale fatto in casa con savoiardi inzuppati nell'espresso e crema al mascarpone.",
      price: '8.50',
      category: 'dessert'
    }
  ],
  en: [
    {
      id: 'p1',
      name: 'Margherita Classica',
      description: 'San Marzano tomato, buffalo mozzarella, fresh basil, extra virgin olive oil.',
      price: '14.00',
      category: 'pizza',
      tags: ['Vegetarian', 'Popular']
    },
    {
      id: 'p2',
      name: 'Diavola',
      description: 'Tomato sauce, mozzarella, spicy salami, chili flakes.',
      price: '16.50',
      category: 'pizza'
    },
    {
      id: 'p3',
      name: 'Tartufata',
      description: 'White base, mozzarella, truffle cream, porcini mushrooms, parsley.',
      price: '19.00',
      category: 'pizza',
      tags: ['Chef Special']
    },
    {
      id: 'pa1',
      name: 'Linguine allo Scoglio',
      description: 'Fresh linguine with mussels, clams, prawns, and cherry tomatoes.',
      price: '22.00',
      category: 'pasta'
    },
    {
      id: 'pa2',
      name: 'Pappardelle al Cinghiale',
      description: 'Handmade wide pasta with slow-cooked wild boar ragù.',
      price: '20.00',
      category: 'pasta'
    },
    {
      id: 'm1',
      name: 'Tagliata di Manzo',
      description: 'Grilled sliced beef ribeye served with rocket, parmesan shavings, and balsamic glaze.',
      price: '28.00',
      category: 'main'
    },
    {
      id: 'd1',
      name: 'Tiramisù della Casa',
      description: 'Traditional homemade tiramisù with espresso-soaked ladyfingers and mascarpone.',
      price: '8.50',
      category: 'dessert'
    }
  ],
  th: [
    {
      id: 'p1',
      name: 'พิซซ่ามาร์เกริต้าคลาสสิก (Margherita Classica)',
      description: 'มะเขือเทศซานมาร์ซาโน มอสซาเรลล่าชีสนมควาย โหระพาสด และน้ำมันมะกอกเอ็กซ์ตร้าเวอร์จิ้น',
      price: '14.00',
      category: 'pizza',
      tags: ['มังสวิรัติ', 'ยอดนิยม']
    },
    {
      id: 'p2',
      name: 'พิซซ่าดิอาโวลา (Diavola)',
      description: 'ซอสมะเขือเทศ มอสซาเรลล่าชีส ซาลามี่รสเผ็ด และพริกป่นอิตาเลียน',
      price: '16.50',
      category: 'pizza'
    },
    {
      id: 'p3',
      name: 'พิซซ่าทรัฟเฟิล (Tartufata)',
      description: 'พิซซ่าไวท์ซอส มอสซาเรลล่าชีส ครีมเห็ดทรัฟเฟิล เห็ดพอร์ชินี และพาร์สลีย์',
      price: '19.00',
      category: 'pizza',
      tags: ['เมนูพิเศษจากเชฟ']
    },
    {
      id: 'pa1',
      name: 'ลิงกวินีซีฟู้ด (Linguine allo Scoglio)',
      description: 'เส้นลิงกวินีสดผัดหอยแมลงภู่ หอยตลับ กุ้ง และมะเขือเทศเชอร์รี่',
      price: '22.00',
      category: 'pasta'
    },
    {
      id: 'pa2',
      name: 'ปัปปาร์เดลเลซอสหมูป่า (Pappardelle al Cinghiale)',
      description: 'พาสต้าเส้นแบนทำมือเสิร์ฟพร้อมซอสรากูหมูป่าเคี่ยวไฟอ่อน',
      price: '20.00',
      category: 'pasta'
    },
    {
      id: 'm1',
      name: 'สเต็กเนื้อริบอายหั่นสไลซ์ (Tagliata di Manzo)',
      description: 'เนื้อริบอายย่างหั่นสไลซ์ เสิร์ฟพร้อมผักร็อกเก็ต พาร์มีซานชีสสไลซ์ และซอสบัลซามิก',
      price: '28.00',
      category: 'main'
    },
    {
      id: 'd1',
      name: 'ทีรามิสุโฮมเมด (Tiramisù della Casa)',
      description: 'ทีรามิสุสูตรดั้งเดิมโฮมเมด เลดี้ฟิงเกอร์ชุ่มกาแฟเอสเปรสโซและมาสคาร์โปเนชีส',
      price: '8.50',
      category: 'dessert'
    }
  ]
};

export const MENU_DATA: MenuItem[] = MENU_DATA_BY_LANG.en;
