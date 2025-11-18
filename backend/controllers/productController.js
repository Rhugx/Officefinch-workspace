import Product from '../models/Product.js';


// Sample data to seed the database
const sampleProducts = [
  // --- Office & Breakroom Products ---
{
  name: 'Premium A4 Copy Paper',
  description: '500 sheets of high-quality 80gsm paper.',
  imageUrl: 'assets/img/products/premiumA4papers.jpg',
  category: 'Office & Breakroom',
  supplyType: 'Printing Media',
  // img added
},
{
  name: 'Ergonomic Mesh Office Chair',
  description: 'Breathable mesh back with lumbar support.',
  imageUrl: 'assets/img/products/product-chair.jpg',
  category: 'Office & Breakroom',
  supplyType: 'Ergonomics & Seating',
  // img added
},
{
  name: 'Gourmet Coffee Pods (100 Pack)',
  description: 'Rich dark roast blend for breakrooms and pantries.',
  imageUrl: 'assets/img/products/product-coffee.jpg',
  category: 'Office & Breakroom',
  supplyType: 'Ergonomics & Seating',
  // img added
},
{
  name: 'Magnetic Dry Erase Whiteboard',
  description: '48" x 36" aluminum frame whiteboard.',
  imageUrl: 'assets/img/products/product-whiteboard.jpg',
  category: 'Office & Breakroom',
  supplyType: 'Printing Media',
  // img added
},

  // --- IT & Electronics Products ---
  // --- IT & Electronics Products ---
{
  name: 'Wireless Keyboard and Mouse Combo',
  description: 'Full-size keyboard and ergonomic mouse.',
  imageUrl: 'assets/img/products/product-t.png',
  category: 'IT & Electronics',
  supplyType: 'Accessories & Peripherals',
  // img added
},
{
  name: '24-inch 1080p LED Monitor',
  description: 'Full HD monitor with HDMI and VGA ports.',
  imageUrl: 'assets/img/products/product-monitor.png',
  category: 'IT & Electronics',
  supplyType: 'Accessories & Peripherals',
  // img added
},
{
  name: 'High-Yield Black Toner Cartridge',
  description: 'Compatible with HP LaserJet Pro M404 series.',
  imageUrl: 'assets/img/products/product-ink.jpg',
  category: 'IT & Electronics',
  supplyType: 'Printer Cartridges',
  // img added
},

  // --- Janitorial & Safety Products ---
 // --- Janitorial & Safety Products ---
{
  name: 'Heavy-Duty Janitorial Cart',
  description: 'Yellow cart with 3 shelves and vinyl bag.',
  imageUrl: 'assets/img/products/product-janitorial.jpg',
  category: 'Janitorial & Safety',
  supplyType: 'Accessories & Peripherals',
  // img added
},
{
  name: 'Industrial Hard Hat (White)',
  description: 'ANSI Z89.1 certified safety helmet.',
  imageUrl: 'assets/img/products/product-safety.jpg',
  category: 'Janitorial & Safety',
  supplyType: 'Accessories & Peripherals',
  // img added
},
{
  name: 'First Aid Kit (200-Piece)',
  description: 'OSHA compliant kit for up to 50 people.',
  imageUrl: 'assets/img/products/product-firstaid.jpg',
  category: 'Janitorial & Safety',
  supplyType: 'Accessories & Peripherals',
  // img added
},
  {
    name: 'B2B Copier Paper A/4',
    description: 'Premium-quality A4 copier paper ideal for high-volume office printing.',
    imageUrl: 'assets/img/products/product-paper1.jpg',
    category: 'Office & Breakroom',
    supplyType: 'Printing Media',
    // img added
  },
  {
    name: 'TNPL Paper A/4',
    description: 'Eco-friendly A4 paper offering smooth printing and crisp text output.',
    imageUrl: 'assets/img/products/product-paper2.jpg',
    category: 'Office & Breakroom',
    supplyType: 'Printing Media',
    // img added
  },
  {
    name: 'JK Copier Paper (All GSM A/4 & A/3)',
    description: 'Multi-purpose copier paper suitable for all types of printers and copiers.',
    imageUrl: 'assets/img/products/product-paper3.jpg',
    category: 'Office & Breakroom',
    supplyType: 'Printing Media',
    // img added
  },
  {
    name: 'JK Easy Copier (All GSM A/4 & A/3)',
    description: 'Bright white copier paper ensuring sharp prints and easy handling.',
    imageUrl: 'assets/img/products/product-paper4.jpg',
    category: 'OFfice & Breakroom',
    supplyType: 'Printing Media',
    // img added
  },
  {
    name: 'Royal Bond Paper A/4 (Pk of 500 / 100)',
    description: 'High-quality bond paper perfect for official letters and documents.',
    imageUrl: 'assets/img/products/product-paper5.jpg',
    category: 'Office & Breakroom',
    supplyType: 'Printing Media',
    // img added
  },
  {
    name: 'Novajet MPL Labels',
    description: 'Self-adhesive labels for inkjet and laser printers, ideal for packaging and tagging.',
    imageUrl: 'assets/img/products/product-labels.jpg',
    category: 'IT & Electronics',
    supplyType: 'Printing Media',
    // img added
  },
  {
    name: 'Plotter Roll (A1 & A0)',
    description: 'Large-format rolls designed for engineering drawings and graphic printing.',
    imageUrl: 'assets/img/products/product-plotterroll.jpg',
    category: 'IT & Electronics',
    supplyType: 'Printing Media',
    // img added
  },
  {
    name: 'Glossy Paper Roll (All Sizes)',
    description: 'Gloss-finish rolls for vibrant and photo-quality printing.',
    imageUrl: 'assets/img/products/product-glossyroll.jpg',
    category: 'IT & Electronics',
    supplyType: 'Printing Media',
    // img added
  },
  {
    name: 'Reflection Paper A/4',
    description: 'Premium coated A4 paper offering high brightness and professional finish.',
    imageUrl: 'assets/img/products/product-reflection.jpg',
    category: 'Office & Breakroom',
    supplyType: 'Printing Media',
    // img added
  },
  {
    name: 'Oddy Glossy Paper',
    description: 'Smooth, high-gloss paper suited for brochures and photo prints.',
    imageUrl: 'assets/img/products/product-oddy.jpg',
    category: 'Office & Breakroom',
    supplyType: 'Printing Media',
    // img added
  },
  {
    name: 'Bambalio Photo Paper',
    description: 'Heavyweight photo paper delivering sharp images with rich color tones.',
    imageUrl: 'assets/img/products/product-bambalio.jpg',
    category: 'Office & Breakroom',
    supplyType: 'Printing Media',
    // img added
  },
  {
    name: 'JK C Max Paper A/4',
    description: 'Extra-bright copier paper ensuring clear prints and jam-free performance.',
    imageUrl: 'assets/img/products/product-jkcmax.png',
    category: 'Office & Breakroom',
    supplyType: 'Printing Media',
    // img added
  },
  {
    name: 'Thermal Paper Roll (All Size)',
    description: 'Heat-sensitive rolls for POS machines, ATMs, and billing printers.',
    imageUrl: 'assets/img/products/product-thermalroll.jpg',
    category: 'IT & Electronics',
    supplyType: 'Printing Media',
    // img added
  },
  {
    name: 'Fax Roll Mitsubishi',
    description: 'Reliable thermal fax roll ensuring clear, long-lasting print quality.',
    imageUrl: 'assets/img/products/product-faxroll.jpg',
    category: 'IT & Electronics',
    supplyType: 'Printing Media',
    // img added
  },
  {
    name: 'Camel Carbon Paper',
    description: 'Durable carbon sheets providing crisp duplicates for handwritten or typed forms.',
    imageUrl: 'assets/img/products/product-carbonpaper.jpg',
    category: 'Office & Breakroom',
    supplyType: 'Printing Media',
    // img added
  },
  {
    name: 'Munix Carbon Paper',
    description: 'Smooth, reusable carbon paper for clear and consistent copies.',
    imageUrl: 'assets/img/products/product-munixcarbon.jpg',
    category: 'Office & Breakroom',
    supplyType: 'Printing Media',
    // img added
  },
  {
    name: 'Shaphire Carbon Paper',
    description: 'Premium carbon sheets ensuring smudge-free and sharp duplication.',
    imageUrl: 'assets/img/products/product-shaphirecarbon.jpg',
    category: 'Office & Breakroom',
    supplyType: 'Printing Media',
    // img added
  },
  {
    name: 'Printed Business Card',
    description: 'Custom-designed cards printed on premium stock for professional identity.',
    imageUrl: 'assets/img/products/product-businesscard.jpg',
    category: 'Office & Breakroom',
    supplyType: 'Printing Media',
    // img added
  },
  {
    name: 'Printed ID Card / Tag / Tape',
    description: 'Personalized ID solutions for employees or events with tags and tapes for branding.',
    imageUrl: 'assets/img/products/product-idcard.jpg',
    category: 'Office & Breakroom',
    supplyType: 'Printing Media',
    // img added
  },
  {
    name: 'Omex Tray / Omega Tray / Document Tray',
    description: 'Durable and stackable trays for organizing office files and documents neatly.',
    imageUrl: 'assets/img/products/product-tray.jpg',
    category: 'Office & Breakroom',
    supplyType: 'Ergonomics & Seating',
    // img added
  },
  {
    name: 'Pen Stand / Gift Articles',
    description: 'Attractive desk accessories and pen stands to keep your workspace organized.',
    imageUrl: 'assets/img/products/product-penstand.jpg',
    category: 'Office & Breakroom',
    supplyType: 'Ergonomics & Seating',
    // img added
  },
  {
    name: 'Magnetic Duster / Wooden Duster / White Board Stand',
    description: 'Essential tools for maintaining clean whiteboards and supporting office presentations.',
    imageUrl: 'assets/img/products/product-duster.jpg',
    category: 'Office & Breakroom',
    supplyType: 'Ergonomics & Seating',
    // img added
  },
  {
    name: 'Notice Board / Display Board / Chalk Board',
    description: 'Boards designed for writing, pinning, and displaying important office information.',
    imageUrl: 'assets/img/products/product-noticeboard.jpg',
    category: 'Office & Breakroom',
    supplyType: 'Ergonomics & Seating',
    // img added
  },
  {
    name: 'Exam Pad (Wooden / Acrylic)',
    description: 'Strong and lightweight writing pads suitable for office, school, and meeting use.',
    imageUrl: 'assets/img/products/product-exampad.jpg',
    category: 'Office & Breakroom',
    supplyType: 'Ergonomics & Seating',
    // img added
  },
  {
    name: 'Cosmic Notice Board With Acrylic Door',
    description: 'Lockable notice board with acrylic cover for secure and visible information display.',
    imageUrl: 'assets/img/products/product-cosmicboard.jpg',
    category: 'Office & Breakroom',
    supplyType: 'Ergonomics & Seating',
  },
  {
    name: 'Pin Up Display Board',
    description: 'Soft board surface ideal for pinning memos, schedules, and public notices.',
    imageUrl: 'assets/img/products/product-pinupboard.jpg',
    category: 'Office & Breakroom',
    supplyType: 'Ergonomics & Seating',
  },
{
    name: 'HP Toner Cartridge 49A',
    description: 'Reliable HP toner cartridge delivering sharp black prints with consistent performance.',
    imageUrl: 'assets/img/products/product-hp49a.jpg',
    category: 'IT & Electronics',
    supplyType: 'Printer Cartridges',
    // img added'
  
  },
  {
    name: 'HP Toner Cartridge 42A',
    description: 'High-quality toner ensuring professional-grade printing for HP LaserJet printers.',
    imageUrl: 'assets/img/products/product-hp42a.jpg',
    category: 'IT & Electronics',
    supplyType: 'Printer Cartridges',
    // img added'
  },
  {
    name: 'HP Toner Cartridge 24A',
    description: 'Durable toner cartridge for crisp text and reliable office printing output.',
    imageUrl: 'assets/img/products/product-hp24a.jpg',
    category: 'IT & Electronics',
    supplyType: 'Printer Cartridges',
    // img added'
  },
  {
    name: 'HP Toner Cartridge 16A',
    description: 'Optimized for smooth printing with bold black text and consistent results.',
    imageUrl: 'assets/img/products/product-hp16a.jpg',
    category: 'IT & Electronics',
    supplyType: 'Printer Cartridges',
    // img added'
  },
  {
    name: 'HP Toner Cartridge 38A',
    description: 'Premium HP toner designed for clear text and professional print documents.',
    imageUrl: 'assets/img/products/product-hp38a.jpg',
    category: 'IT & Electronics',
    supplyType: 'Printer Cartridges',
    // img added'
  },
  {
    name: 'HP Toner Cartridge 39A',
    description: 'Dependable toner that offers smooth printing and high page yield.',
    imageUrl: 'assets/img/products/product-hp39a.jpg',
    category: 'IT & Electronics',
    supplyType: 'Printer Cartridges',
    // img added'
  },
  {
    name: 'HP Toner Cartridge 13A',
    description: 'Genuine HP cartridge producing high-contrast prints with reliable quality.',
    imageUrl: 'assets/img/products/product-hp13a.jpg',
    category: 'IT & Electronics',
    supplyType: 'Printer Cartridges',
    // img added'
  },
  {
    name: 'HP Toner Cartridge 42X',
    description: 'High-yield toner cartridge delivering maximum efficiency for busy offices.',
    imageUrl: 'assets/img/products/product-hp42x.jpg',
    category: 'IT & Electronics',
    supplyType: 'Printer Cartridges',
    // img added'
  },
  {
    name: 'HP Toner Cartridge 11A',
    description: 'Designed for fast printing and consistent sharp black text output.',
    imageUrl: 'assets/img/products/product-hp11a.jpg',
    category: 'IT & Electronics',
    supplyType: 'Printer Cartridges',
    // img added'
  },
  {
    name: 'HP Toner Cartridge 126A Colour Set',
    description: 'Vivid color toner set ensuring vibrant images and smooth color gradients.',
    imageUrl: 'assets/img/products/product-hp126a.jpg',
    category: 'IT & Electronics',
    supplyType: 'Printer Cartridges',
    // img added'
  },
  {
    name: 'HP Toner Cartridge 308A Colour Set',
    description: 'Professional-quality toner set offering accurate color reproduction and long life.',
    imageUrl: 'assets/img/products/product-hp308a.jpg',
    category: 'IT & Electronics',
    supplyType: 'Printer Cartridges',
    // img added'
  },
  {
    name: 'HP Toner Cartridge 36A',
    description: 'Compact toner designed for clear prints and efficient page yield.',
    imageUrl: 'assets/img/products/product-hp36a.jpg',
    category: 'IT & Electronics',
    supplyType: 'Printer Cartridges',
    // img added'
  },
  {
    name: 'HP Toner Cartridge 78A',
    description: 'High-yield toner providing precise printing with deep black tones.',
    imageUrl: 'assets/img/products/product-hp78a.jpg',
    category: 'IT & Electronics',
    supplyType: 'Printer Cartridges',
    // img added'
  },
  {
    name: 'HP Toner Cartridge 12A',
    description: 'Trusted toner offering consistent text sharpness and smooth operation.',
    imageUrl: 'assets/img/products/product-hp12a.png',
    category: 'IT & Electronics',
    supplyType: 'Printer Cartridges',
    // img added'
  },
  {
    name: 'HP Toner Cartridge 88A',
    description: 'Efficient toner cartridge providing crisp, professional-quality output.',
    imageUrl: 'assets/img/products/product-hp88a.jpg',
    category: 'IT & Electronics',
    supplyType: 'Printer Cartridges',
    // img added'
  },
   {
    name: 'HP Ink Cartridge Black',
    description: 'Genuine HP black ink cartridge producing bold text and crisp lines for everyday printing.',
    imageUrl: 'assets/img/products/product-hp-inkblack.jpg',
    category: 'IT & Electronics',
    supplyType: 'Printer Cartridges',
    // img added'
  },
  {
    name: 'HP Ink Cartridge Tri-Colour',
    description: 'Vivid color ink cartridge offering smooth gradients and vibrant photo-quality prints.',
    imageUrl: 'assets/img/products/product-hp-inkcolor.jpg',
    category: 'IT & Electronics',
    supplyType: 'Printer Cartridges',
    // img added'

  },
  {
    name: 'HP Ink Cartridge Colour Set',
    description: 'Complete ink cartridge set delivering bright, long-lasting, and professional color prints.',
    imageUrl: 'assets/img/products/product-hp-inkset.jpg',
    category: 'IT & Electronics',
    supplyType: 'Printer Cartridges',
    // img added'
  },
  // end for HP Toner and ink cartridges


  {
    name: 'Canon Toner Cartridge 328',
    description: 'High-quality Canon toner delivering sharp black text and smooth print performance.',
    imageUrl: 'assets/img/products/product-canon328.jpg',
    category: 'IT & Electronics',
    supplyType: 'Printer Cartridges',
    // img added'
  },
  {
    name: 'Canon Toner Cartridge 306',
    description: 'Reliable Canon toner cartridge for crisp, smudge-free professional printing.',
    imageUrl: 'assets/img/products/product-canon306.jpg',
    category: 'IT & Electronics',
    supplyType: 'Printer Cartridges',
    // img added'
  },
  {
    name: 'Canon Toner Cartridge FX3',
    description: 'Durable FX3 toner cartridge providing clear text and long-lasting print quality.',
    imageUrl: 'assets/img/products/product-canonfx3.jpg',
    category: 'IT & Electronics',
    supplyType: 'Printer Cartridges',
    // img added'
  },
  {
    name: 'Canon Toner Cartridge FX9',
    description: 'High-performance FX9 toner offering rich blacks and excellent page yield.',
    imageUrl: 'assets/img/products/product-canonfx9.jpg',
    category: 'IT & Electronics',
    supplyType: 'Printer Cartridges',
    // img added'
  },
  // end for canon Toner cartridges


    {
    name: 'Samsung Toner Cartridge ML-4500D3',
    description: 'Reliable Samsung toner cartridge offering crisp black prints and consistent performance.',
    imageUrl: 'assets/img/products/product-samsung4500d3.jpg',
    category: 'IT & Electronics',
    supplyType: 'Printer Cartridges',
    // img added'
  },
  {
    name: 'Samsung Toner Cartridge ML-1650D8',
    description: 'High-capacity Samsung toner ensuring long-lasting, sharp, and smudge-free prints.',
    imageUrl: 'assets/img/products/product-samsung1650d8.jpg',
    category: 'IT & Electronics',
    supplyType: 'Printer Cartridges',
    // img added'
  },
  {
    name: 'Samsung Toner Cartridge 105',
    description: 'Durable and efficient toner cartridge designed for high-quality document printing.',
    imageUrl: 'assets/img/products/product-samsung105.jpg',
    category: 'IT & Electronics',
    supplyType: 'Printer Cartridges',
    // img added'
  },
  {
    name: 'Samsung Toner Cartridge Colour Set',
    description: 'Vivid color toner set producing vibrant graphics and smooth color output for Samsung printers.',
    imageUrl: 'assets/img/products/product-samsungcolor.jpg',
    category: 'IT & Electronics',
    supplyType: 'Printer Cartridges',
    // img added'
  },
  // end for samsung Toner cartridges


  {
    name: 'Xerox Toner Cartridge Black',
    description: 'High-performance Xerox toner cartridge ensuring deep black prints and superior clarity.',
    imageUrl: 'assets/img/products/product-xerox-black.jpg',
    category: 'IT & Electronics',
    supplyType: 'Printer Cartridges',
    // img added'
  },
  {
    name: 'Xerox Toner Cartridge Cyan',
    description: 'Vivid cyan toner offering rich color output and excellent consistency for Xerox printers.',
    imageUrl: 'assets/img/products/product-xerox-cyan.jpg',
    category: 'IT & Electronics',
    supplyType: 'Printer Cartridges',
    // img added'
  },
  {
    name: 'Xerox Toner Cartridge Magenta',
    description: 'High-quality magenta toner ensuring vibrant prints and long-lasting performance.',
    imageUrl: 'assets/img/products/product-xerox-magenta.jpg',
    category: 'IT & Electronics',
    supplyType: 'Printer Cartridges',
    // img added'
  },
  {
    name: 'Xerox Toner Cartridge Yellow',
    description: 'Bright yellow toner cartridge providing excellent color accuracy and page yield.',
    imageUrl: 'assets/img/products/product-xerox-yellow.jpg',
    category: 'IT & Electronics',
    supplyType: 'Printer Cartridges',
    // img added'
  },
  // end for xerox Toner cartridges


  
  {
    name: 'Konica Minolta Cartridge TN118',
    description: 'Efficient Konica Minolta toner delivering clear, long-lasting, and professional print results.',
    imageUrl: 'assets/img/products/product-konica-tn118.jpg',
    category: 'IT & Electronics',
    supplyType: 'Printer Cartridges',
    // img added'
  },
  // end for Konica Minolta Toner cartridges

  {
    name: 'All Brand Pen Drives',
    description: 'High-speed pen drives from multiple brands, ideal for quick file storage and sharing.',
    imageUrl: 'assets/img/products/product-pendrives.jpg',
    category: 'IT & Electronics',
    supplyType: 'Accessories & Peripherals',
    // img added
  },
  {
    name: 'Keyboard',
    description: 'Ergonomic computer keyboard designed for smooth typing and long-lasting use.',
    imageUrl: 'assets/img/products/product-keyboard.jpg',
    category: 'IT & Electronics',
    supplyType: 'Accessories & Peripherals',
    // img added
  },
  {
    name: 'Mouse',
    description: 'Precision optical mouse with smooth tracking for comfortable daily computing.',
    imageUrl: 'assets/img/products/product-mouse.jpg',
    category: 'IT & Electronics',
    supplyType: 'Accessories & Peripherals',
    // img added
  },
  {
    name: 'Mouse Pad',
    description: 'Soft and durable mouse pad ensuring accurate cursor control and wrist comfort.',
    imageUrl: 'assets/img/products/product-mousepad.jpg',
    category: 'IT & Electronics',
    supplyType: 'Accessories & Peripherals',
    // img added
  },
  {
    name: 'Wireless Headphones',
    description: 'Bluetooth-enabled wireless headphones providing immersive sound and portability.',
    imageUrl: 'assets/img/products/product-wirelessheadphones.jpg',
    category: 'IT & Electronics',
    supplyType: 'Accessories & Peripherals',
    // img added
  },
  {
    name: 'Headphones',
    description: 'Comfortable wired headphones with rich audio output for office and personal use.',
    imageUrl: 'assets/img/products/product-headphones.jpg',
    category: 'IT & Electronics',
    supplyType: 'Accessories & Peripherals',
    // img added
  },
  {
    name: 'AC Cable',
    description: 'Durable AC power cable compatible with desktops, monitors, and other electronics.',
    imageUrl: 'assets/img/products/product-accable.jpg',
    category: 'IT & Electronics',
    supplyType: 'Accessories & Peripherals',
    // img added

  },
  {
    name: 'Laptop Battery',
    description: 'High-capacity laptop replacement battery providing reliable backup power.',
    imageUrl: 'assets/img/products/product-laptopbattery.jpg',
    category: 'IT & Electronics',
    supplyType: 'Accessories & Peripherals',
    // img added
  },
  {
    name: 'SMPS',
    description: 'Switch Mode Power Supply delivering stable power for computer systems and hardware.',
    imageUrl: 'assets/img/products/product-smps.png',
    category: 'IT & Electronics',
    supplyType: 'Accessories & Peripherals',
    // img added
  },
  {
    name: 'Spike Guard',
    description: 'Multi-socket power extension with surge protection for safe electronics usage.',
    imageUrl: 'assets/img/products/product-spikeguard.jpg',
    category: 'IT & Electronics',
    supplyType: 'Accessories & Peripherals',
    // img added
  },
  {
    name: 'CD-R Sony (Pk of 100)',
    description: 'High-quality writable CDs from Sony, ideal for data backup and music recording.',
    imageUrl: 'assets/img/products/product-cdrsony.jpg',
    category: 'IT & Electronics',
    supplyType: 'Accessories & Peripherals',
    // img added
  },
  {
    name: 'DVD-R Moserbaer (Pk of 10 / 100)',
    description: 'Reliable blank DVDs suitable for data, video, and software storage.',
    imageUrl: 'assets/img/products/product-dvdmoserbaer.jpg',
    category: 'IT & Electronics',
    supplyType: 'Accessories & Peripherals',
    // img added
  },
  {
    name: 'DVD-RW Moserbaer',
    description: 'Rewritable DVD discs allowing multiple recordings and easy data reuse.',
    imageUrl: 'assets/img/products/product-dvdrwmoserbaer.jpg',
    category: 'IT & Electronics',
    supplyType: 'Accessories & Peripherals',
    // img added
  },



  {
    name: 'Citizen Calculator CT-612',
    description: 'Compact desktop calculator offering large display and smooth numeric input for office tasks.',
    imageUrl: 'assets/img/products/product-citizenct612.jpg',
    category: 'Office & Breakroom',
    supplyType: 'Accessories & Peripherals',
  },
  {
    name: 'Citizen Calculator CT-512',
    description: 'Reliable calculator with durable keys and clear screen ideal for daily office calculations.',
    imageUrl: 'assets/img/products/product-citizenct512.jpg',
    category: 'Office & Breakroom',
    supplyType: 'Accessories & Peripherals',
    // img added
  },
  {
    name: 'Casio Calculator Scientific',
    description: 'Advanced scientific calculator designed for engineering, academic, and technical calculations.',
    imageUrl: 'assets/img/products/product-casioscientific.jpg',
    category: 'Office & Breakroom',
    supplyType: 'Accessories & Peripherals',
    // img added
  },
  {
    name: 'Casio Calculator MJ-120',
    description: 'User-friendly 12-digit calculator suitable for business and accounting operations.',
    imageUrl: 'assets/img/products/product-casiomj120.jpg',
    category: 'Office & Breakroom',
    supplyType: 'Accessories & Peripherals',
    // img added
  },
  {
    name: 'Eveready Torch (Rechargeable)',
    description: 'Rechargeable handheld torch providing bright illumination for emergency and maintenance use.',
    imageUrl: 'assets/img/products/product-evereadytorch.jpg',
    category: 'Janitorial & Safety',
    supplyType: 'Accessories & Peripherals',
    // img added
  },
  {
    name: 'Duracell Cells (AA & AAA)',
    description: 'High-performance AA and AAA batteries offering long-lasting power for electronic devices.',
    imageUrl: 'assets/img/products/product-duracell.jpg',
    category: 'Janitorial & Safety',
    supplyType: 'Accessories & Peripherals',
    // img added
  },
  {
    name: 'Eveready Cells (AA & AAA)',
    description: 'Reliable Eveready batteries providing consistent energy for remotes, torches, and office tools.',
    imageUrl: 'assets/img/products/product-evereadycells.jpg',
    category: 'Janitorial & Safety',
    supplyType: 'Accessories & Peripherals',
    // img added
  },



  {
    name: 'Air Wick Machine',
    description: 'Automatic air freshener dispenser ensuring consistent room fragrance.',
    imageUrl: 'assets/img/products/product-airwickmachine.jpg',
    category: 'Janitorial & Safety',
    supplyType: 'Facility Maintenance',
    // img added
    
  },
  {
    name: 'Air Wick Refill',
    description: 'Replacement refill for Air Wick machines providing long-lasting freshness.',
    imageUrl: 'assets/img/products/product-airwickrefill.jpg',
    category: 'Janitorial & Safety',
    supplyType: 'Facility Maintenance',
    // img added
  },
  {
    name: 'Room Freshener – Airwick / Odonil / Odonil Air Freshner',
    description: 'Assorted air fresheners offering pleasant fragrance for office and washrooms.',
    imageUrl: 'assets/img/products/product-roomfreshener.jpg',
    category: 'Janitorial & Safety',
    supplyType: 'Facility Maintenance',
    // img added
  },
  
  {
    name: 'Schevaran Room Freshner 5 LTR Can',
    description: 'Premium liquid room freshener providing long-lasting fragrance for large spaces.',
    imageUrl: 'assets/img/products/product-schevaranroomfreshner.jpg',
    category: 'Janitorial & Safety',
    supplyType: 'Facility Maintenance',
    // img added
  },
  {
    name: 'Schevaran All Klean 5 LTR Can',
    description: 'Multipurpose cleaner ideal for floors, walls, and general surface maintenance.',
    imageUrl: 'assets/img/products/product-schevaranallklean.jpg',
    category: 'Janitorial & Safety',
    supplyType: 'Facility Maintenance',
    // img added
  },
  {
    name: 'Schevaran Natural Shine 5 LTR Can',
    description: 'Polish solution delivering a glossy and protective finish to hard surfaces.',
    imageUrl: 'assets/img/products/product-schevarannaturalshine.jpg',
    category: 'Janitorial & Safety',
    supplyType: 'Facility Maintenance',
    // img added
  },
  {
    name: 'Schevaran Window Shine 5 LTR Can',
    description: 'Streak-free glass cleaner suitable for windows and mirrors.',
    imageUrl: 'assets/img/products/product-schevaranwindowshine.jpg',
    category: 'Janitorial & Safety',
    supplyType: 'Facility Maintenance',
    // img added
  },
  {
    name: 'Schevaran Germ Free 5 LTR Can',
    description: 'Disinfectant solution formulated to eliminate germs and bacteria effectively.',
    imageUrl: 'assets/img/products/product-schevarangermfree.jpg',
    category: 'Janitorial & Safety',
    supplyType: 'Facility Maintenance',
    // img added
  },
  {
    name: 'Schevaran Super Lime Away 5 LTR Can',
    description: 'Powerful descaler ideal for removing lime deposits and mineral buildup.',
    imageUrl: 'assets/img/products/product-schevaransuperlimeaway.jpg',
    category: 'Janitorial & Safety',
    supplyType: 'Facility Maintenance',
    // img added
  },
  {
    name: 'Diversey Taski R1 / R3 / R4 / R5 / R6 / Spiral (5 LTR Cans)',
    description: 'Professional cleaning range covering floor care, glass cleaning, and surface maintenance.',
    imageUrl: 'assets/img/products/product-diverseytaski.jpg',
    category: 'Janitorial & Safety',
    supplyType: 'Facility Maintenance',
    // img added
  },
  {
    name: 'Fem Hand Wash 5 LTR Can',
    description: 'Gentle hand wash with refreshing fragrance for office and restroom use.',
    imageUrl: 'assets/img/products/product-femhandwash.jpg',
    category: 'Janitorial & Safety',
    supplyType: 'Facility Maintenance',
    // img added
  },
  {
    name: 'Dettol Hand Wash 250 ML',
    description: 'Trusted antibacterial hand wash ensuring daily protection from germs.',
    imageUrl: 'assets/img/products/product-dettolhandwash.jpg',
    category: 'Janitorial & Safety',
    supplyType: 'Facility Maintenance',
  },
  {
    name: 'Himalaya Hand Sanitizer 500 ML',
    description: 'Herbal hand sanitizer killing 99.9% of germs without water.',
    imageUrl: 'assets/img/products/product-himalayasanitizer.jpg',
    category: 'Janitorial & Safety',
    supplyType: 'Facility Maintenance',
  },
  {
    name: 'Vim Liquid 500 ML',
    description: 'Powerful dishwashing gel that removes grease effectively and leaves utensils sparkling.',
    imageUrl: 'assets/img/products/product-vimliquid.jpg',
    category: 'Janitorial & Safety',
    supplyType: 'Facility Maintenance',
    // img added
  },
  {
    name: 'Lizol 500 ML',
    description: 'Floor cleaner with disinfecting properties for hygienic and shiny surfaces.',
    imageUrl: 'assets/img/products/product-lizol.jpg',
    category: 'Janitorial & Safety',
    supplyType: 'Facility Maintenance',
    // img added
  },
  {
    name: 'Colin 500 ML',
    description: 'Glass and surface cleaner providing streak-free shine and cleanliness.',
    imageUrl: 'assets/img/products/product-colin.jpg',
    category: 'Janitorial & Safety',
    supplyType: 'Facility Maintenance',
    // img added

  },
  {
    name: 'Pril 500 ML',
    description: 'Effective dishwashing liquid that removes tough stains and grease easily.',
    imageUrl: 'assets/img/products/product-pril.jpg',
    category: 'Janitorial & Safety',
    supplyType: 'Facility Maintenance',
    // img added
  },
  {
    name: 'Harpic 500 ML',
    description: 'Powerful toilet cleaner ensuring germ-free and sparkling clean toilets.',
    imageUrl: 'assets/img/products/product-harpic.jpg',
    category: 'Janitorial & Safety',
    supplyType: 'Facility Maintenance',
    // img added
  },
  {
    name: 'Hit / Mortein Insect Killer',
    description: 'Instant insect spray for eliminating mosquitoes and flying pests.',
    imageUrl: 'assets/img/products/product-hitmortein.jpg',
    category: 'Janitorial & Safety',
    supplyType: 'Facility Maintenance',
    // img added
  },


  {
    name: 'Plastic Tray / Plastic Box',
    description: 'Durable plastic trays and boxes ideal for storage and organization in workspaces.',
    imageUrl: 'assets/img/products/product-plastictray.jpg',
    category: 'Janitorial & Safety',
    supplyType: 'Facility Maintenance',
    // img added
  },
  {
    name: 'Dustbin Round (Big / Small)',
    description: 'High-quality plastic dustbins designed for office and commercial use.',
    imageUrl: 'assets/img/products/product-dustbinround.jpg',
    category: 'Janitorial & Safety',
    supplyType: 'Facility Maintenance',
    // img added
  },
  {
    name: 'Perforated Plastic Dustbin / Paddle Bin',
    description: 'Modern perforated bins with foot pedal for hygienic waste disposal.',
    imageUrl: 'assets/img/products/product-paddlebin.jpg',
    category: 'Janitorial & Safety',
    supplyType: 'Facility Maintenance',
    // img added
  },
  {
    name: 'Mop Refill Gala',
    description: 'High-absorbent mop refill suitable for wet cleaning on various floor types.',
    imageUrl: 'assets/img/products/product-moprefill.jpg',
    category: 'Janitorial & Safety',
    supplyType: 'Facility Maintenance',
    // img added
  },
  {
    name: 'Paper Cup / Water Glass / Paper Plate / Plastic Spoon',
    description: 'Disposable paper and plastic dining supplies for offices and events.',
    imageUrl: 'assets/img/products/product-papercupplate.jpg',
    category: 'Janitorial & Safety',
    supplyType: 'Facility Maintenance',
    // img added
  },
  {
    name: 'Garbage Bag (Shalimar / Pearl / Plasto Bag / Colour)',
    description: 'Heavy-duty garbage bags available in various sizes and colors for waste management.',
    imageUrl: 'assets/img/products/product-garbagebag.jpg',
    category: 'Janitorial & Safety',
    supplyType: 'Facility Maintenance',
    // img added
  },
  {
    name: 'Kimberly-Clark M Fold / Greenlime Tissue Roll / C-Fold / Jumbo Roll',
    description: 'Premium tissue rolls and napkins ensuring cleanliness and convenience.',
    imageUrl: 'assets/img/products/product-tissueroll.jpg',
    category: 'Janitorial & Safety',
    supplyType: 'Facility Maintenance',
    // img added
  },
  {
    name: 'Surgical Hand Gloves 12 Inch',
    description: 'Disposable surgical gloves providing protection during cleaning and maintenance tasks.',
    imageUrl: 'assets/img/products/product-handgloves.jpg',
    category: 'Janitorial & Safety',
    supplyType: 'Facility Maintenance',
    // img added
  },
  {
    name: 'Zip Lock Bag / Self-Adhesive Bag',
    description: 'Reusable zip lock and self-seal bags for secure storage and packaging.',
    imageUrl: 'assets/img/products/product-ziplockbag.jpg',
    category: 'Janitorial & Safety',
    supplyType: 'Facility Maintenance',
    // img added
  },
  {
    name: 'Tray / Bubble Sheet / Aluminium Foil / Bed Tissue Roll / Cling Film Wrap Roll / Cup and Saucer',
    description: 'Comprehensive set of disposable and packaging supplies for pantry and housekeeping needs.',
    imageUrl: 'assets/img/products/product-disposableset.jpg',
    category: 'Janitorial & Safety',
    supplyType: 'Facility Maintenance',
    // img added
  },
  // --- Stationery Products (New Batch) ---
{
  name: 'Ball Pens (Reynolds / Cello / Pentel)',
  description: 'Smooth-writing ball pens ideal for office and school use, available in multiple colors.',
  imageUrl: 'assets/img/products/product-ballpens.jpg',
  category: 'Office & Breakroom',
  supplyType: 'Printing Media',
  // img added
},
{
  name: 'Gel Pens (Pilot / Pentel / Uniball)',
  description: 'Premium gel pens offering consistent ink flow and bold writing for professional work.',
  imageUrl: 'assets/img/products/product-gelpens.jpg',
  category: 'Office & Breakroom',
  supplyType: 'Printing Media',
  // img added
},
{
  name: 'White Board Markers (Camlin / Luxor)',
  description: 'Non-toxic dry-erase markers providing bright, easy-wipe colors for whiteboards.',
  imageUrl: 'assets/img/products/product-whitemarkers.jpg',
  category: 'Office & Breakroom',
  supplyType: 'Printing Media',
  // img added
},
{
  name: 'Permanent Markers (Luxor / Camlin)',
  description: 'Durable ink markers suitable for labeling, packaging, and industrial use.',
  imageUrl: 'assets/img/products/product-permanentmarkers.jpg',
  category: 'Office & Breakroom',
  supplyType: 'Printing Media',
  // img added
},
{
  name: 'Highlighters (Faber-Castell / Camlin)',
  description: 'Bright fluorescent highlighters perfect for emphasizing important notes and documents.',
  imageUrl: 'assets/img/products/product-highlighters.jpg',
  category: 'Office & Breakroom',
  supplyType: 'Printing Media',
  // img added

},
{
  name: 'Pencils (Apsara / Nataraj)',
  description: 'Classic graphite pencils designed for smooth writing and drawing.',
  imageUrl: 'assets/img/products/product-pencils.jpg',
  category: 'Office & Breakroom',
  supplyType: 'Printing Media',
  // img added
},
{
  name: 'Erasers / Sharpeners / Scales',
  description: 'Essential stationery accessories for school and office use.',
  imageUrl: 'assets/img/products/product-erasersharpeners.jpg',
  category: 'Office & Breakroom',
  supplyType: 'Printing Media',
  // img added
},
{
  name: 'Files and Folders (Plastic / Cardboard)',
  description: 'Organizational stationery including L-folders, box files, and display folders.',
  imageUrl: 'assets/img/products/product-filesfolders.jpg',
  category: 'Office & Breakroom',
  supplyType: 'Printing Media',
  // img added
},
{
  name: 'Spring Files / Lever Arch Files',
  description: 'Durable files with locking mechanisms to securely store important papers.',
  imageUrl: 'assets/img/products/product-springfiles.jpg',
  category: 'Office & Breakroom',
  supplyType: 'Printing Media',
  // img added
},
{
  name: 'Writing Pads / Notebooks / Registers',
  description: 'Wide range of ruled and plain notebooks for office and educational use.',
  imageUrl: 'assets/img/products/product-notebooks.jpg',
  category: 'Office & Breakroom',
  supplyType: 'Printing Media',
  // img added
},
{
  name: 'Sticky Notes (3M / Oddy)',
  description: 'Self-adhesive sticky notes for reminders and quick notes.',
  imageUrl: 'assets/img/products/product-stickynotes.jpg',
  category: 'Office & Breakroom',
  supplyType: 'Printing Media',
  // img added
},

// --- Stapler Products (New Batch) ---
{
  name: 'Kangaro Stapler HD-10',
  description: 'Compact stapler designed for everyday office use with smooth spring action.',
  imageUrl: 'assets/img/products/product-stapler-hd10.jpg',
  category: 'Office & Breakroom',
  supplyType: 'Printing Media',
  // img added
},
{
  name: 'Kangaro Stapler HD-45',
  description: 'Durable metal stapler suitable for moderate-duty paper binding.',
  imageUrl: 'assets/img/products/product-stapler-hd45.jpg',
  category: 'Office & Breakroom',
  supplyType: 'Printing Media',
  // img added
},
{
  name: 'Kangaro Stapler HP-45',
  description: 'Heavy-duty stapler for professional office or packaging use.',
  imageUrl: 'assets/img/products/product-stapler-hp45.jpg',
  category: 'Office & Breakroom',
  supplyType: 'Printing Media',
  // img added
},
{
  name: 'Kangaro Stapler HD-210',
  description: 'High-capacity stapler designed for binding large stacks of paper efficiently.',
  imageUrl: 'assets/img/products/product-stapler-hd210.jpg',
  category: 'Office & Breakroom',
  supplyType: 'Printing Media',
  // img added
},
{
  name: 'Kangaro Stapler HD-23S17',
  description: 'Industrial-grade stapler designed for precision and durability in heavy workloads.',
  imageUrl: 'assets/img/products/product-stapler-hd23s17.jpg',
  category: 'Office & Breakroom',
  supplyType: 'Printing Media',
  // img added
},
{
  name: 'Kangaro Staple Remover SR-300',
  description: 'Ergonomic staple remover ideal for safe and easy removal of staples from documents.',
  imageUrl: 'assets/img/products/product-stapler-remover.jpg',
  category: 'Office & Breakroom',
  supplyType: 'Printing Media',
  // img added
},
{
  name: 'Kangaro Stapler Pins No.10',
  description: 'High-quality No.10 size pins compatible with standard office staplers.',
  imageUrl: 'assets/img/products/product-staplerpins10.jpg',
  category: 'Office & Breakroom',
  supplyType: 'Printing Media',
  // img added
},
{
  name: 'Kangaro Stapler Pins No.23/6, 23/8, 23/13',
  description: 'Heavy-duty stapler pins available in multiple sizes for industrial stapling tasks.',
  imageUrl: 'assets/img/products/product-staplerpins23series.jpg',
  category: 'Office & Breakroom',
  supplyType: 'Printing Media',
  // img added
},
{
  name: 'Max Stapler HD-10D',
  description: 'Compact Japanese-made stapler offering precise and smooth performance.',
  imageUrl: 'assets/img/products/product-stapler-max10d.jpg',
  category: 'Office & Breakroom',
  supplyType: 'Printing Media',
  // img added
},
{
  name: 'Max Stapler Pins No.10-1M',
  description: 'Durable and rust-resistant pins compatible with Max HD-10D staplers.',
  imageUrl: 'assets/img/products/product-staplerpinsmax10.jpg',
  category: 'Office & Breakroom',
  supplyType: 'Printing Media',
  // img added
},


{
  name: 'Paper Clips',
  description: 'Durable metal clips ideal for holding and organizing paper documents securely.',
  imageUrl: 'assets/img/products/product-paperclips.jpg',
  category: 'Office & Breakroom',
  supplyType: 'Printing Media',
  // img added
},
{
  name: 'Binder Clips',
  description: 'Strong steel binder clips for keeping large stacks of paper together.',
  imageUrl: 'assets/img/products/product-binderclips.jpg',
  category: 'Office & Breakroom',
  supplyType: 'Printing Media',
  // img added
},
{
  name: 'T-Pins',
  description: 'Nickel-plated T-pins suitable for notice boards, charts, and office displays.',
  imageUrl: 'assets/img/products/product-tpins.jpg',
  category: 'Office & Breakroom',
  supplyType: 'Printing Media',
  // img added
},
{
  name: 'Adhesive Tape',
  description: 'Transparent tape for sealing, packaging, and everyday office use.',
  imageUrl: 'assets/img/products/product-adhesivetape.jpg',
  category: 'Office & Breakroom',
  supplyType: 'Printing Media',
  // img added
},
{
  name: 'Glue Stick',
  description: 'Easy-to-use glue stick providing mess-free bonding for paper and craft work.',
  imageUrl: 'assets/img/products/product-gluestick.jpg',
  category: 'Office & Breakroom',
  supplyType: 'Printing Media',
  // img added
},
{
  name: 'Fevicol Adhesive',
  description: 'Reliable white adhesive ideal for paper, cardboard, and light craft applications.',
  imageUrl: 'assets/img/products/product-fevicol.jpg',
  category: 'Office & Breakroom',
  supplyType: 'Printing Media',
  // img added
},
{
  name: 'Scissors',
  description: 'Precision stainless steel scissors for smooth and accurate cutting tasks.',
  imageUrl: 'assets/img/products/product-scissors.jpg',
  category: 'Office & Breakroom',
  supplyType: 'Printing Media',
  // img added
},
{
  name: 'Cutter Knife',
  description: 'Sharp retractable cutter knife suitable for office packaging and craft cutting.',
  imageUrl: 'assets/img/products/product-cutterknife.jpg',
  category: 'Office & Breakroom',
  supplyType: 'Printing Media',
  // img added
},
{
  name: 'Cutter Blades',
  description: 'High-quality replacement blades compatible with standard utility knives.',
  imageUrl: 'assets/img/products/product-cutterblades.jpg',
  category: 'Office & Breakroom',
  supplyType: 'Printing Media',
  // img added
},
{
  name: 'Stamp Pad',
  description: 'Long-lasting ink pad providing clear impressions for office stamps.',
  imageUrl: 'assets/img/products/product-stamppad.jpg',
  category: 'Office & Breakroom',
  supplyType: 'Printing Media',
  // img added
},
{
  name: 'Stamp Ink Bottle',
  description: 'Refill ink bottle for recharging stamp pads efficiently.',
  imageUrl: 'assets/img/products/product-stampink.jpg',
  category: 'Office & Breakroom',
  supplyType: 'Printing Media',
  // img added
},
{
  name: 'Office Stamp',
  description: 'Customizable rubber office stamps for official documentation and signatures.',
  imageUrl: 'assets/img/products/product-officestamp.jpg',
  category: 'Office & Breakroom',
  supplyType: 'Printing Media',
  // img added
},
{
  name: 'Envelopes (A4 / A5 / Custom Printed)',
  description: 'Paper envelopes suitable for documents, letters, and confidential papers.',
  imageUrl: 'assets/img/products/product-envelopes.jpg',
  category: 'Office & Breakroom',
  supplyType: 'Printing Media',
  // img added
},
{
  name: 'Rulers / Geometry Box Sets',
  description: 'Durable rulers and complete geometry sets for precise drawing and measurement.',
  imageUrl: 'assets/img/products/product-geometrybox.jpg',
  category: 'Office & Breakroom',
  supplyType: 'Printing Media',
  // img added
},
{
  name: 'Office Diary / Planner / Calendar',
  description: 'Elegant diaries and planners ideal for professionals and executives.',
  imageUrl: 'assets/img/products/product-diaryplanner.jpg',
  category: 'Office & Breakroom',
  supplyType: 'Printing Media',
  // img added
},
{
  name: 'File Index / Divider Tabs',
  description: 'Labelled index sheets and dividers to keep files organized and accessible.',
  imageUrl: 'assets/img/products/product-fileindex.jpg',
  category: 'Office & Breakroom',
  supplyType: 'Printing Media',
  // img added
}






];


// // Controller to get all products, with filtering
// export const getProducts = async (req, res) => {
//   try {
//     // --- SEEDER LOGIC ---
//     const count = await Product.countDocuments();
//     if (count === 0) {
//       console.log('No products found. Seeding database with sample products...');
//       // We must make sure the new `supplyType` field is included
//       const productsWithSupplyType = sampleProducts.map(p => ({
//         ...p,
//         supplyType: p.supplyType || 'General' // Add a default just in case
//       }));
//       await Product.insertMany(productsWithSupplyType);
//       console.log('Database seeded successfully.');
//     }

//     // --- FILTERING LOGIC (NOW UPDATED) ---
//     let filter = {};
    
//     // Check if the URL has a 'category' query
//     if (req.query.category) {
//       filter.category = req.query.category;
//     }
    
//     // --- THIS IS THE NEW CODE ---
//     // Check if the URL also has a 'supplyType' query
//     if (req.query.supplyType) {
//       filter.supplyType = req.query.supplyType;
//     }
//     // --- END OF NEW CODE ---


//     // Find products based on the filter (which might be empty or have one or both keys)
//     const products = await Product.find(filter);
    
//     res.status(200).json(products);

//   } catch (error) {
//     console.error('Error fetching products:', error);
//     res.status(500).json({ message: 'Server error fetching products' });
//   }
// };///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



// --- Controller to get all products (with smart seeding + filtering) ---
export const getProducts = async (req, res) => {
  try {
    // Check if any products exist
    const count = await Product.countDocuments();

    // ✅ Only seed once (when DB is empty)
    if (count === 0) {
      console.log('⚙️ Seeding database with sample products...');

      // Remove duplicates by "name + category"
      const uniqueProducts = [];
      const seen = new Set();

      sampleProducts.forEach((p) => {
        const key = `${p.name}-${p.category}`;
        if (!seen.has(key)) {
          seen.add(key);
          uniqueProducts.push({
            ...p,
            supplyType: p.supplyType || 'General', // Default fallback
          });
        }
      });

      await Product.insertMany(uniqueProducts);
      console.log(`✅ Seeded ${uniqueProducts.length} products successfully.`);
    }

    // --- Filtering logic ---
    const filter = {};

    if (req.query.category) filter.category = req.query.category;
    if (req.query.supplyType) filter.supplyType = req.query.supplyType;

    // Fetch filtered or all products
    // const products = await Product.find(filter);
    const products = await Product.find(filter).sort({ _id: 1 });

    res.status(200).json(products);
  } catch (error) {
    console.error('❌ Error fetching products:', error);
    res.status(500).json({ message: 'Server error fetching products' });
  }
};


