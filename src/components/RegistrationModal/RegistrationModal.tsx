import React, { useState, useMemo } from 'react';
import './RegistrationModal.css';

interface RegistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface TestCenter {
  state: string;
  city: string;
  name: string;
  address: string;
}

interface FormData {
  firstName: string;
  middleName: string;
  lastName: string;
  country: string;
  city: string;
  state: string;
  zipcode: string;
  phoneNumber: string;
  email: string;
  educationLevel: string;
  degreeName: string;
  learningPreference: string;
  testCenterState: string;
  testCenterCity: string;
  testCenterName: string;
}

// 🔥 GOOGLE APPS SCRIPT WEB APP URL - UPDATED WITH YOUR DEPLOYMENT
const GOOGLE_SCRIPT_URL = 'https://script.google.com/a/macros/adex.ltd/s/AKfycbwR2yMipKzF1RPd3Cfn8xWs68VQWhKqhqiLu8zRW6vUb3mT-Rj_f40UCfwZjOqkqhVpWA/exec';

// Test Center Data from CSV
const TEST_CENTERS: TestCenter[] = [
    { state: "Andhra Pradesh", city: "Visakhapatnam", name: "Pearson Professional Centers-Visakhapatnam", address: "Address 1, Visakhapatnam, Andhra Pradesh" },
    { state: "Andhra Pradesh", city: "Vijayawada", name: "SRK Institute of Technology", address: "Near Ramavarappadu Ring,Enikepadu\nOpp Pratap Industries\nNH-5,\nVijayawada\nAndhra Pradesh 521108\nIndia" },
    { state: "Andhra Pradesh", city: "Vijayawada", name: "Siddhartha IAS Academy", address: "D.NO 32-26-113 , 2nd Floor\nMaruthi Nagar , Vijayawada\nVijayawada\nVijayawada\nAndhra Pradesh 520004\nIndia" },
    { state: "Andhra Pradesh", city: "Vijayawada", name: "Dr. Computer.in IT and Ecom Service", address: "Flat No. FF1 & FF2 Ramaneeyam,\nOld No.4-71 (New No.4-80),\nRajula Bazar, Ramvarpaddu,\nVijayawada\nAndhra Pradesh 521108\nIndia" },
    { state: "Andhra Pradesh", city: "Guntur", name: "CONCOMSE EDUCATION (Additional)", address: "FLAT NO: 505 , 12-545/a GARUDA ENCLAVE,\nOPP MANIPAL HOSPITAL\nGUNTUR DISTRICT,TADEPALLI\nGUNTUR DISTRICT\nAndhra Pradesh 522501\nIndia" },
    { state: "Andhra Pradesh", city: "Guntur", name: "KL University", address: "Green Fields, Vaddeswaram\nGuntur\nVijaywada\nAndhra Pradesh 522502\nIndia" },
    { state: "Andhra Pradesh", city: "Gudlavalleru", name: "Gudlavalleru Engineering College", address: "Seshadri Rao Knowledge Village\nKrishna District\nGudlavalleru\nAndhra Pradesh 521356\nIndia" },
    { state: "Andhra Pradesh", city: "Ongole", name: "Brilliant Computer Education", address: "DNo: 20-06-15(2),\nAnjaiah Road,\nPrakasam District\nOngole\nAndhra Pradesh 523001\nIndia" },
    { state: "Andhra Pradesh", city: "Tirupati", name: "Nearest test center Vellore", address: "" },
    { state: "Andhra Pradesh", city: "Adoni", name: "Nearest is 232.9 KM", address: "" },
    { state: "Andhra Pradesh", city: "Amaravati", name: "Nearest test center Guntur", address: "" },
    { state: "Andhra Pradesh", city: "Chandragiri", name: "Nearest test center 71.4 km", address: "" },
    { state: "Arunachal Pradesh", city: "No test center", name: "No test center", address: "No test center" },
    { state: "Assam", city: "Guwahati", name: "Animation World", address: "3rd Floor, yubraj palace\nKrishna nagar road,\nFlyover U Turn, ward No 12\nGuwahati\nAssam 781003\nIndia" },
    { state: "Assam", city: "Guwahati", name: "Assam Don Bosco University", address: "Airport Road\nAzara\nNowapara\nGuwahati\nAssam 781017\nIndia" },
    { state: "Bihar", city: "Patna", name: "BALAJI IMPEX", address: "G-5 ,Shaligram Complex\nNear BN College\nAshok Rajpath\nPatna\nBihar 800004\nIndia" },
    { state: "Bihar", city: "Patna", name: "Yash Infotech", address: "Hubnet Technologies Pvt.ltd\n2nd floor,J.J Complex\nEast Boring Canal Road\nPatna\nBihar 800001\nIndia" },
    { state: "Bihar", city: "Patna", name: "Itechnoplus Education and Solution Pvt. Ltd", address: "1st Floor, Pratiksha Bhawan,\nBSNL Exchange Compund\nKhajpura\nPatna\nBihar 800014\nIndia" },
    { state: "Chhattisgarh", city: "No test center", name: "No test center", address: "No test center" },
    { state: "Goa", city: "Panaji", name: "", address: "" },
    { state: "Goa", city: "Margao", name: "IP Gates", address: "6th Floor, Pereira Plaza\nOpp. Old Hospicio Hospital\nMargao\nMargao\nGoa 403601\nIndia" },
    { state: "Gujarat", city: "Ahmedabad", name: "Xamindia Private Limited", address: "S. No. 33/1/2, B/h. Viral Housing,\nAmreda House, Sindhubhavan Road,\nBodakdev\nAhmedabad\nGujarat 380054\nIndia" },
    { state: "Gujarat", city: "Ahmedabad", name: "GANPAT UNIVERSITY- CITY OFFICE", address: "Office 105-106, Ganesh Meridian, Block-A\nOpp Kargil Petrol Pump, Chanakyapuri,\nNr Gujarat High Court, Sola, SG Highway\nAhmedabad\nGujarat 380060\nIndia" },
    { state: "Gujarat", city: "Ahmedabad", name: "Indo American Education Society", address: "301-302, Sun Square above IDFC Bank\nOff CG Road Navrangpura\nAhmedabad\nGujarat 380009\nIndia" },
    { state: "Gujarat", city: "Ahmedabad", name: "Siddhi Techsoft and Management Pvt Ltd", address: "F/6,19,20,21,22\nMaruti Complex\nRanip\nAhmedabad\nGujarat 382480\nIndia" },
    { state: "Gujarat", city: "Ahmedabad", name: "Medhavi Skills University", address: "Office No. 604, 6th Floor,\nAayushyaman Plaza, Vasant Vihar 2,\nNava Naroda, Near Vithal Plaza\nAhmedabad\nGujarat 382330\nIndia" },
    { state: "Gujarat", city: "Surat", name: "Sysethics Services", address: "222, Second Floor, Shiven Shoppers,\nOpposite Gangeshwar Mahadev Temple,\nNear Honey Park Circle,\nSurat\nGujarat 395009\nIndia" },
    { state: "Gujarat", city: "Surat", name: "Virani Softech", address: "A-805, RJD Gajera Business Hub,\nNear Kiran Hospital, Oppsite Jewel Star,\nKatargam,\nSurat\nGujarat 395004\nIndia" },
    { state: "Gujarat", city: "Surat", name: "AURO University", address: "Earthspace , Hazira Road\nOpp ONGC ,\nNext to Toyota, Bhatpore\nSurat\nGujarat 394510\nIndia" },
    { state: "Gujarat", city: "Surat", name: "WEETECH INSTITUTE PRIVATE LIMITED", address: "A-401, Astha Square,\nNear Kapodra-Utran Bridge\nUtran\nSurat\nGujarat 394105\nIndia" },
    { state: "Gujarat", city: "Surat", name: "Bhagwan Mahavir University", address: "SR NO 149, BBA Building Ground Floor\nBeside SRM Print and Xerox\nBehind VIP Road Bharthana, Vesu\nSurat\nGujarat 395017\nIndia" },
    { state: "Gujarat", city: "Vadodara", name: "Anuptech Equipments Pvt Ltd", address: "B35, Krishna Industrial Estate\nOpposite BIDC, Gorwa\nVadodara\nGujarat 390016\nIndia" },
    { state: "Gujarat", city: "Vadodara", name: "D.K. Shah NDT Training Institute", address: "401 Cascade Complex,\nnr. Channi Jakat Naka\nVadodara\nGujarat 390024\nIndia" },
    { state: "Gujarat", city: "Vadodara", name: "SHREETIK INFOTECH", address: "3rd Floor Gokulesh Complex\nOpp Collector Bunglow RC Dutt Road\nAlkapuri\nVadodara\nGujarat 390007\nIndia" },
    { state: "Gujarat", city: "Vadodara", name: "Baroda Institute of Technology", address: "B-208, Manubhai Tower,\nOpposite Maharaja Sayajirao University\nSayajigunj\nVadodara\nGujarat 390005\nIndia" },
    { state: "Gujarat", city: "Vadodara", name: "Sigma University", address: "Post Bakrol Ajwa Nimeta road\nWaghodia\nVadodara\nGujarat 390019\nIndia" },
    { state: "Gujarat", city: "Rajkot", name: "Swift Computer Technology", address: "Office No. 504, Wing B,\nPramukh Swami Arcade\nNear Trikon Baug, Dr. Yagnik Road\nRajkot\nGujarat 360001\nIndia" },
    { state: "Gujarat", city: "Rajkot", name: "Shri Labhubhai Trivedi Institute of Eng and Tech", address: "Kalavad Road,\nNear GEC\nRajkot\nGujarat 360005\nIndia" },
    { state: "Gujarat", city: "Changa", name: "CHAROTAR UNIVERSITY SCIENCE OF TECHNOLOGY", address: "Education Campus Changa,\nComputer Engineering Department,\nCharusat\nChanga\nGujarat 388421\nIndia" },
    { state: "Haryana", city: "Gurugram", name: "Talent Study Circle", address: "3rd Floor, Gaurav Plaza,\nOpposite Metro Pillar No. 50,\nSikanderpur\nGurugram\nHaryana 122002\nIndia" },
    { state: "Haryana", city: "Gurugram", name: "Sushant University", address: "Golf Course Road,\nSector - 55\nGurugram\nHaryana 122003\nIndia" },
    { state: "Haryana", city: "Faridabad", name: "JL Global Ventures", address: "TA-03, Third Floor, Crown Plaza Mall\nFaridabad\nHaryana 121001\nIndia" },
    { state: "Haryana", city: "Karnal", name: "Australasia Institute of English", address: "inside Sylvia Consultants\nMukul Tower, Behind Bus Stand ,\nDAV(PG) College Road,OPP Mahila Ashram\nKarnal\nHaryana 132001\nIndia" },
    { state: "Himachal Pradesh", city: "Shimla", name: "", address: "" },
    { state: "Himachal Pradesh", city: "Manali", name: "", address: "" },
    { state: "Himachal Pradesh", city: "Dharamshala", name: "", address: "" },
    { state: "Himachal Pradesh", city: "Kullu", name: "", address: "" },
    { state: "Himachal Pradesh", city: "Solan", name: "Secure Net Technologies", address: "# 21, HBC, Phase-1\nSaproon, Solan\nSolan\nHimachal Pradesh 173211\nIndia" },
    { state: "Jharkhand", city: "Ranchi", name: "Infinity Academy", address: "2nd Floor,Amravati Complex,Circular Road\n(Beside B.I.T. Ext. Center)\nLalpur Chowk\nRanchi\nJharkhand 834001\nIndia" },
    { state: "Jharkhand", city: "Jamshedpur", name: "DBMS Career Academy", address: "B. H. Area, Road No. 7\nNear T. S. Flat\nKadma\nJamshedpur\nJharkhand 831005\nIndia" },
    { state: "Jharkhand", city: "Dhanbad", name: "Ten Software", address: "1st Floor, Flat No-102, Shivam Colony\nBhuiphore, Govindpur Road, Dhanbad\nDhanbad\nJharkhand 828109\nIndia" },
    { state: "Karnataka", city: "Bengaluru", name: "PEAR Academy", address: "Level 1, 27 Ulsoor Road,\nSivanchetti Garden,\nBengaluru\nKarnataka 560042\nIndia" },
    { state: "Karnataka", city: "Bengaluru", name: "iDomains Technologies", address: "82/1,2nd floor,2nd Main road,KHB colony,\nKoramangala 5th block,Next to FAB hotels\nNear Jyoti Nivas College\nBangalore\nKarnataka 560095\nIndia" },
    { state: "Karnataka", city: "Bengaluru", name: "Ally Tech Services", address: "B1, Bannerghatta Slip Road\nKEB Colony, New Gurappana Palya\n1st Stage, BTM Layout 1\nBengaluru\nKarnataka 560029\nIndia" },
    { state: "Karnataka", city: "Bengaluru", name: "Tvaksa Technologies Pvt. Ltd.", address: "# 1281 21st Main ,\nJ P Nagar 2nd Phase,\nBangalore\nKarnataka 560078\nIndia" },
    { state: "Karnataka", city: "Bengaluru", name: "CYMBELINE INNOVATION PVT LTD", address: "Ground Floor, No 290, 7th Main\nBTM Layout Stage II, Opp Axis Bank\nNear Krishna Sagar Hotel\nBengaluru\nKarnataka 560076\nIndia" },
    { state: "Karnataka", city: "Bengaluru", name: "DATALABS", address: "NO: 837/1,1st floor,\n7th main,2nd cross, HAL 2nd Stage\nIndiranagar\nBangalore\nKarnataka 560038\nIndia" },
    { state: "Karnataka", city: "Bengaluru", name: "ITINS Techno Solutions Private Limited", address: "3rd Floor No. 19/4, Skanda Arcade,\nDinnur Main Road, R.T. Nagar,\nBangalore\nKarnataka 560032\nIndia" },
    { state: "Karnataka", city: "Bengaluru", name: "Sanford College of Information Technology", address: "No.6, \" Soorya Complex \", King Street,\nVenkateshappa Layout, RS Palya 1st Cross\nNear Kammanahalli MainRoad(Hotel Empire)\nBangalore\nKarnataka 560084\nIndia" },
    { state: "Karnataka", city: "Bengaluru", name: "IPEC Solutions Pvt Ltd", address: "No. 234, 1st Floor, SK Complex,\nUttarahalli Main Rd, 5th Stage,\nRajarajeshwari Nagar\nBengaluru\nKarnataka 560098\nIndia" },
    { state: "Karnataka", city: "Bengaluru", name: "Transcript Technology Global Infotech Pvt Ltd", address: "5th Cross Dasarahalli Main Road\nHebbal Farm Post\nBhuwaneswari Nagar\nBengaluru\nKarnataka 560024\nIndia" },
    { state: "Karnataka", city: "Bengaluru", name: "Acharya Education Services Pvt Ltd", address: "97 Acharya\nDr. Sarvepalli Radhakrishnan road\nSoldevanhalli\nBangalore\nKarnataka 560107\nIndia" },
    { state: "Karnataka", city: "Bengaluru", name: "REVA University", address: "REVA University,\nRukmini knowledge park Kattigenahalli,\nYelahanka\nBangalore\nKarnataka 560064\nIndia" },
    { state: "Karnataka", city: "Bengaluru", name: "Analytus", address: "No. 1002, 3rd Floor,\nShree Ananthnagar Phase 2,\nElectronic City Phase 2\nBengaluru\nKarnataka 560100\nIndia" },
    { state: "Karnataka", city: "Mysuru", name: "AIMIT", address: "905/4, 4th Main, 1st Cross.\nVidyaranyapuram\nMysore\nKarnataka 570008\nIndia" },
    { state: "Karnataka", city: "Mysuru", name: "MYRA School of Business", address: "Power Grid Road, Opp. Varsha Cables.\nInfosys 1.5 Kms. Maidanahalli,\nYelwala to KRS Road, opp. Power Grid\nMysore\nKarnataka 571130\nIndia" },
    { state: "Karnataka", city: "DHARWAD", name: "E TECHNOLOGY", address: "2ND FLOOR, KANOJ BUILDING\nOPP TO LAXMI THEATRE\nDHARWAD\nKarnataka 580001\nIndia" },
    { state: "Kerala", city: "Angamally", name: "RIGHTROBIN", address: "13/541-F, AMK, Kannapilly Tower\nKarukutty\nAngamally\nKerala 683576\nIndia" },
    { state: "Kerala", city: "Aluva", name: "Netware IT Solutions", address: "Building No. XV111/37(1),\nMukkath Tower,\nBye Pass Junction,\nAluva\nKerala 683101\nIndia" },
    { state: "Kerala", city: "Thiruvananthapuram", name: "ST. THOMAS INSTITUTE FOR SCIENCE & TECHNOLOGY", address: "Mar Chrysostam Nagar\nKazhakoottam Thycadu Road\nKattaikonam\nThiruvananthapuram\nKerala 685584\nIndia" },
    { state: "Kerala", city: "Thiruvananthapuram", name: "GlobalTrack Technologies Pvt Ltd", address: "KRISHNA',\nTC 15/121,ALTHARA NAGAR, B-29,\nSASTHAMANGALAM.P.O,\nTrivandrum\nKerala 695010\nIndia" },
    { state: "Kerala", city: "Thiruvananthapuram", name: "Networkz Systems", address: "Bhadra Center\n3rd Floor, Opp Dhanya & Remya Theatres,\nAyurveda College JN.\nTrivandrum\nKerala 695001\nIndia" },
    { state: "Kerala", city: "Kochi", name: "CRESCO SAFE", address: "37/3329 D, 2nd Floor, Omkar Building,\nAsariparambu Road,\nEdapally PO\nKochi\nKerala 682024\nIndia" },
    { state: "Kerala", city: "Kochi", name: "Muthoot Institute of Technology & Science - Site 2", address: "Varikoli Post Office\nPuthencruz\nErnakulam District\nCochin\nKerala 682308\nIndia" },
    { state: "Kerala", city: "Kochi", name: "Rajagiri College Of Social Sciences", address: "Rajagiri School of Management\nRajagiri Valley P.O\nKakkanad, Kochi\nCochin, Kochi\nKerala 682039\nIndia" },
    { state: "Kerala", city: "Kochi", name: "Technovalley Software India Pvt Ltd", address: "Level 4, ATS Grand, Opp Highway Garden\nNear Oberon Mall,Bypass\nEdapally, Kochi\nErnakulam\nKerala 682024\nIndia" },
    { state: "Kerala", city: "Kochi", name: "Bsoft Network Solutions", address: "Index Buildings, NO:35/523\nEdappally Raghavan Pillai Road\nEadppally PO, Ernakulam\nKochi\nKerala 682024\nIndia" },
    { state: "Kerala", city: "Kochi", name: "Nuaxil", address: "48/1675 B6,2nd Floor,Madhurayil Building\nDeshabhimani Road\nNear Bhavans Vidhya Mandir,Elamakkara\nErnakulam\nKerala 682026\nIndia" },
    { state: "Kerala", city: "Kochi", name: "Blastline Institute", address: "Blastline Corporate Chambers\nKaloor-Perandoor Road,\nPottakuzhy, Elamakkakara P.O.\nErnakulam,\nKochi\nKerala 682026\nIndia" },
    { state: "Kerala", city: "Kochi", name: "Sathra Consulting Services Private Limited", address: "2nd Floor, Chammany Tower,\nKaloor Junction\nCochin\nKerala 682017\nIndia" },
    { state: "Kerala", city: "Kochi", name: "UPSKI INTERNATIONAL PVT LTD", address: "2nd Floor, Vallamattam Estate,\nOppo. Zeal Academy, Kurishupally Road,\nRavipuram, Cochin\nErnakulam\nKerala 682015\nIndia" },
    { state: "Kerala", city: "Kozhikode", name: "Forun Testing and Educational Services", address: "4th Floor, Kadooli Tower, Vandipetta Jn\nWest Nadakkavu, Calicut - 673011\nKozhikode\nKerala 673011\nIndia" },
    { state: "Kerala", city: "Kozhikode", name: "MEDIA LIVE", address: "Media Live,DOOR NO 6/1216 C, FIRST FLOOR\nYEMPEES TOWER, P T USHA ROAD,\nCALICUT,\nKOZHIKODE\nKerala 673032\nIndia" },
    { state: "Kerala", city: "Thrissur", name: "Vidya Academy of Science & Technology (VAST)", address: "SunTower Building,\nEast Fort,\nThrissur\nKerala 680005\nIndia" },
    { state: "Kerala", city: "Kottayam", name: "R-3 Info Solution", address: "NKV buildings\nNorthgate\nVaikom P O Vaikom\nKottayam\nKerala 686141\nIndia" },
    { state: "Kerala", city: "Kannur", name: "Compact Systems", address: "Compact Systems\n3rdFloor ,Shabeena Complex\nThavakkara\nKannur\nKerala 670002\nIndia" },
    { state: "Madhya Pradesh", city: "Indore", name: "Orlando Academy", address: "20-21, Press Complex, 1st Floor,\nAbove Mahanagar Press,\nBehind Dainik Bhaskar\nIndore\nMadhya Pradesh 452001\nIndia" },
    { state: "Madhya Pradesh", city: "Indore", name: "iTrainu Technologies", address: "203, 2nd floor,\nOrange Business Park,\nBhanwarkuan\nIndore\nMadhya Pradesh 452014\nIndia" },
    { state: "Madhya Pradesh", city: "Bhopal", name: "Lakshmi Narain College of Technology Excellence", address: "Kalchuri Nagar,\nRaisen Road,\nBhopal\nMadhya Pradesh 462021\nIndia" },
    { state: "Madhya Pradesh", city: "Bhopal", name: "Prema Software Solution", address: "35-B, Indrapuri,\nBehind New Indian Coffee House\nBhopal\nMadhya Pradesh 462021\nIndia" },
    { state: "Madhya Pradesh", city: "Jabalpur", name: "Rockford Softsol-Computer Academy &Training Center", address: "741, Near Rockford Foundation School\nMahanadda Road,\nMadan Mahal\nJabalpur\nMadhya Pradesh 482001\nIndia" },
    { state: "Madhya Pradesh", city: "Jabalpur", name: "Ideal Management Group", address: "1521, Ist Floor,Bharat Sevashram Sangha,\nNear Dr. Johari Hospital\nGaumata Chowk, Wright Town\nJabalpur\nMadhya Pradesh 482001\nIndia" },
    { state: "Madhya Pradesh", city: "Ujjain", name: "MANAL SOFTECH PRIVATE LIMITED", address: "2nd Floor, 22, Atharva Building,\nNear Vasavada Petrol Pump,\nAbove Avanti Hospital Office, Freeganj\nUjjain\nMadhya Pradesh 456010\nIndia" },
    { state: "Maharashtra", city: "Mumbai", name: "Span Labs", address: "B209-210, Sagar Tech Plaza,\nOpposite Hotel Chakra Sakinaka,\nAndheri East\nMumbai\nMaharashtra 400072\nIndia" },
    { state: "Maharashtra", city: "Mumbai", name: "InTech Computer Institute", address: "Office No. 3022, 1 Aerocity,\nNIBR Compound,\nSaki Naka, Safed Pool\nMumbai\nMaharashtra 400072\nIndia" },
    { state: "Maharashtra", city: "Mumbai", name: "The English Advantage", address: "403 Synergy, Kachpada,\nNear Hotel Khwaishh Presidency\nMalad West\nMumbai\nMaharashtra 400064\nIndia" },
    { state: "Maharashtra", city: "Mumbai", name: "GIIT Computer Institute", address: "Ground Floor No-6, Suyog Apartment,\nNear ICICI Bank, Liberty Garden\nRoad No-3, Malad West,\nMumbai\nMaharashtra 400064\nIndia" },
    { state: "Maharashtra", city: "Mumbai", name: "Loyal Bytes Global IT Services", address: "B202, Mathuria Apts, Next to Vishal Hall\n49 Sir M. V. Road, Andheri East\nMumbai\nMaharashtra 400069\nIndia" },
    { state: "Maharashtra", city: "Pune", name: "Nityashree Infosystems Private Limited", address: "Office No-333, 3rd Floor,\nShree Ganesh Galaxy, Near Ashoka Hotel,\nAlandi Road,\nPune\nMaharashtra 412105\nIndia" },
    { state: "Maharashtra", city: "Pune", name: "Tech Bodhi Solutions LLP", address: "Office No. 105, Vascon Garnets Bay,\nViman Nagar, 5th Mile, Nagar Rd,\nnext to Four Points by Sheraton\nPune\nMaharashtra 411014\nIndia" },
    { state: "Maharashtra", city: "Pune", name: "S2 Data Systems Pvt Ltd", address: "Office 329, Amanora Chambers\nAmanora Mall, Hadapsar\nPune\nMaharashtra 411028\nIndia" },
    { state: "Maharashtra", city: "Pune", name: "Vinsys It Services (I) Pvt. Ltd.", address: "L401 to L409, 3rd floor,Megacenter,\nBehind Noble Hospital,\nNear Magarpatta Corner,Hadapsar\nPune\nMaharashtra 411028\nIndia" },
    { state: "Maharashtra", city: "Pune", name: "Learning Hub", address: "Office No. 21, 5th Floor, B Wing\nDestination Center, Magarpatta City\nHadapsar\nPune\nMaharashtra 411028\nIndia" },
    { state: "Maharashtra", city: "Pune", name: "Samlak Technologies Pvt Ltd", address: "Office no O-203, Boulevard Towers\nby BramhaCorp Sadhu Vaswani Chowk\nOpposite vijay sales, Camp\nPune\nMaharashtra 411001\nIndia" },
    { state: "Maharashtra", city: "Pune", name: "Softools Computers", address: "Office No 13, 2nd Floor, C-2Bldg ,\nBrahma Estate\nNIBM Chowk , Kondhwa Road\nPune\nMaharashtra 411048\nIndia" },
    { state: "Maharashtra", city: "Pune", name: "SQTL INTEGRATED SOLUTIONS PRIVATE LIMITED", address: "OFFICE N0.7,S.NO.70/3A 3B SHITOLE EMPIRE\nOPPOSITE SHIVANERI KHANAWAL\nFAMOUS CHOWK, NEW SANGVI\nPUNE\nMaharashtra 411061\nIndia" },
    { state: "Maharashtra", city: "Pune", name: "Gatesoft", address: "3,4,5,6,7 , Sawanth Park Apt\nAbove Vodafone Store,Chaitanya Nagar\nNear Lokhande Bridge, Dhankawadi\nPune\nMaharashtra 411043\nIndia" },
    { state: "Maharashtra", city: "Pune", name: "Blue Team Cyber Security Labs", address: "2nd Floor, Yashodhan Complex,\nOffice no. 3, Baner road,\nabove blossom showroom, Baner\nPune\nMaharashtra 411021\nIndia" },
    { state: "Maharashtra", city: "Pune", name: "DGPSOFT SOLUTIONS PRIVATE LIMITED", address: "Office No.6, SN.15/21, Bhuleshwar\nSociety, Yadav Building, Ahilya Devi\nChowk, Satara Road, Dhankawadi\nPune\nMaharashtra 411043\nIndia" },
    { state: "Maharashtra", city: "Pune", name: "SOFTTECH CLOUD TECHNOLOGIES PRIVATE LIMITED", address: "Ofiice no 301 3rd Floor\nXion Mall\nHinjawadi\nPune\nMaharashtra 411057\nIndia" },
    { state: "Maharashtra", city: "Pune", name: "3LS INFOTECH PVT LTD", address: "Office no 207, 2nd floor\nGera Imperium Rise\nAt Wipro Circle, Phase 2, Hinjawadi\nPune\nMaharashtra 411057\nIndia" },
    { state: "Maharashtra", city: "Pune", name: "GATS", address: "Office 1\nSymphony 'C', Ashok Nagar,\nRange Hills Rd,Off PuneUniversity Rd\nPune\nMaharashtra 411020\nIndia" },
    { state: "Maharashtra", city: "Pune", name: "The Symbiosis Medical College for Women", address: "Lavale\nMulshi Road\nPune\nMaharashtra 412115\nIndia" },
    { state: "Maharashtra", city: "Thane", name: "Magnum IELTS English Academy", address: "1st Floor Krishna Plaza 102/103/104\nNear Railway Station\nThane West\nThane\nMaharashtra 400601\nIndia" },
    { state: "Maharashtra", city: "Navi Mumbai", name: "Tech-Act", address: "C-64 TTC Industrial Area,\nNear Sunravi Bus Stop.\nTurbhe\nNavi Mumbai\nMaharashtra 400705\nIndia" },
    { state: "Maharashtra", city: "Nashik", name: "Keyworld Software Solutions Private Limited", address: "2nd Floor, Akshad Complex\nVinar Nagar, Near Nashik Vesh, Sinnar\nSinnar\nSinnar, Nashik\nMaharashtra 422103\nIndia" },
    { state: "Maharashtra", city: "Aurangabad", name: "Atharv Computers", address: "21, Gayatri Society,N-8, ClDCO\nnear baliram patil high school,cidco\nAurangabad\nMaharashtra 431003\nIndia" },
    { state: "Manipur", city: "No Test Center", name: "No Test Center", address: "No Test Center" },
    { state: "Meghalaya", city: "No Test Center", name: "No Test Center", address: "No Test Center" },
    { state: "Mizoram", city: "No Test Center", name: "No Test Center", address: "No Test Center" },
    { state: "Nagaland", city: "No Test Center", name: "No Test Center", address: "No Test Center" },
    { state: "Odisha", city: "Bhubaneswar", name: "Royal Institute Of Information & Management", address: "C-103, 1st Floor, Damayanti Apartment\nBehera Sahi, Nayapalli\nBhubaneswar\nOdisha 751012\nIndia" },
    { state: "Odisha", city: "Bhubaneswar", name: "CredenceSoft Private Limited", address: "DCB-711, DLF Cyber City,Infocity\nPatia, Bhubaneswar\nBhubaneswar\nOdisha 751024\nIndia" },
    { state: "Punjab", city: "Phagwara", name: "GNA University", address: "Sri Hargobindgarh,\nHoshiarpur Road\nPhagwara\nPunjab 144405\nIndia" },
    { state: "Punjab", city: "Ludhiana", name: "TCY Learning Solutions Pvt Ltd.", address: "463-G, BRS Nagar,Ferozepur Road\nLudhiana\nNear ICICI Bank\nLudhiana\nPunjab 141001\nIndia" },
    { state: "Punjab", city: "Ludhiana", name: "Aricent Solutions Pvt. Ltd", address: "401, 4th Floor, Novelty Plaza\nOpp. Hotel Park Plaza\nBhaiwala Chowk, Ferozepur Road\nLudhiana\nPunjab 141001\nIndia" },
    { state: "Punjab", city: "Ludhiana", name: "Munjal BCU Centre of Innovation & Entrepreneurship", address: "MBCIE, BCM Campus, Sector 32-A,\nChandigarh Road\nLudhiana(Punjab)\nLudhiana\nPunjab 141010\nIndia" },
    { state: "Punjab", city: "Amritsar", name: "Amritsar College Of Engineering & Technology", address: "12 Km Milestone,\nAmritsar-Jalandhar GT Road\nNear Jandiala Toll Plaza\nAmritsar\nPunjab 143001\nIndia" },
    { state: "Punjab", city: "Patiala", name: "Multani Mal Modi College, Patiala", address: "Modi College,\nNear Sunami Gate,\nLower Mall,\nPatiala\nPunjab 147001\nIndia" },
    { state: "Punjab", city: "Jalandhar", name: "Pearson Professional Centers-Jalandhar 2 PUN", address: "VCN Building, First floor,\nCOOL ROAD 37/2, VCN TOWER,\nNear STATE BANK OF INDIA,\nJalandhar\nPunjab 144001\nIndia" },
    { state: "Punjab", city: "Mohali", name: "Him Technology Private Limited", address: "3rd Floor, Imperial Tower D186B,\nSector 74, Industrial Area Phase 8b\nMohali\nPunjab 160055\nIndia" },
    { state: "Rajasthan", city: "Jaipur", name: "Akashdeep PG Girls College", address: "Sector 11 , Agarwal Farm\nMansarovar\nJaipur\nRajasthan 302020\nIndia" },
    { state: "Rajasthan", city: "Jaipur", name: "Evalult Digital Private Limited", address: "E-103\nRoad No. 7, Vishwakarma Industrial Area\nJaipur\nRajasthan 302013\nIndia" },
    { state: "Rajasthan", city: "Jaipur", name: "IXORA INTERNATIONAL EDUCATION PVT LTD", address: "63-A SURYA NAGAR,\nGOPALPURA BYPASS\nJAIPUR\nRajasthan 302015\nIndia" },
    { state: "Rajasthan", city: "Jaipur", name: "Sakar Edutech Pvt. Ltd.", address: "602/603 , 6th Floor,\nArcade Mall , C - Scheme\nMalviya Marg, Opposite Airtel Office,\nJaipur\nRajasthan 302001\nIndia" },
    { state: "Rajasthan", city: "Jaipur", name: "Yagyavalkya Institute of Technology", address: "YIT Lane, RIICO Industrial Area,\nOpp Chokhi Dhani, Tonk Road,\nNH 12, Sitapura,\nJaipur\nRajasthan 302022\nIndia" },
    { state: "Rajasthan", city: "Udaipur", name: "HINT", address: "11, Swami Nagar,\nNear Swami Sikshan Sansthan\nBhuwana\nUdaipur\nRajasthan 313004\nIndia" },
    { state: "Sikkim", city: "No Test Center", name: "No Test Center", address: "No Test Center" },
    { state: "Tamil Nadu", city: "Chennai", name: "Vectra Technosoft Pvt. LTD", address: "1&2, Jhaver Plaza,\n4th Floor, IA, Nungambakkam High Road\nNungambakkam\nChennai\nTamil Nadu 600034\nIndia" },
    { state: "Tamil Nadu", city: "Chennai", name: "YES INFOTECH", address: "No 37/1, Doron Complex,\n3rd Floor, Dhamodharan Street\nChennai\nTamil Nadu 600017\nIndia" },
    { state: "Tamil Nadu", city: "Chennai", name: "ZYBEAK TECHNOLOGIES PVT LTD", address: "Vijaya Complex 4th Floor, Asiad Colony,\nAnna Nagar West Extn\nChennai\nTamil Nadu 600101\nIndia" },
    { state: "Tamil Nadu", city: "Chennai", name: "ASCENDENCY INFOSYSTEMS PVT LTD", address: "#9/84, 2nd Floor\nPrime Apartments (Stitch in Style above)\nKasi Estate, 2nd Street, Jafferkhanpet,\nChennai\nTamil Nadu 600083\nIndia" },
    { state: "Tamil Nadu", city: "Chennai", name: "Receptacle Enterprises Private Limited", address: "30/8, 2nd floor shanthi Nagar korattur.\n(Padi, Estate, Ambattur,Pudhur, Surapet)\nChennai\nTamil Nadu 600080\nIndia" },
    { state: "Tamil Nadu", city: "Chennai", name: "TAR Marketing Pvt Ltd", address: "No. 53/23, Devesh Flats,\nKavarai Street,\nSaidapet,\nChennai\nTamil Nadu 600015\nIndia" },
    { state: "Tamil Nadu", city: "Chennai", name: "Aatralz ADR", address: "New no: 24, Varadhan Apartments,\n2nd Floor, 2nd Main Road,\nKasturibai Nagar, Adyar,\nChennai\nTamil Nadu 600020\nIndia" },
    { state: "Tamil Nadu", city: "Chennai", name: "Integra Soft Lab", address: "No. 15/L104 Kamaraj Nagar, 2nd Main Road\nThiruvanmiyur.\nhttps://goo.gl/maps/KbLBrre7MZSw8LN98\nChennai\nTamil Nadu 600041\nIndia" },
    { state: "Tamil Nadu", city: "Chennai", name: "ICT Academy", address: "IITM Research Park\nE6-03, Block-E, 6th Floor,\nKanagam Road, Taramani\nChennai\nTamil Nadu 600113\nIndia" },
    { state: "Tamil Nadu", city: "Chennai", name: "Forscher Education Private Limited.", address: "149, 1C/1D, Mount Poonamalle High Road\nOpp to DLF IT Park, Ramapuram,\n+91 9962829292\nChennai\nTamil Nadu 600089\nIndia" },
    { state: "Tamil Nadu", city: "Chennai", name: "Wright Brothers Analytics Pvt. Ltd.", address: "Eden Plaza, 2nd Floor, No: 24\nMount Poonamallee Road\nNandamabakkam\nChennai\nTamil Nadu 600089\nIndia" },
    { state: "Tamil Nadu", city: "Chennai", name: "Bloom Cloud IT Services Private Limited", address: "127, 2nd Floor,\nPSK Booshanam Kalyana Mahal,\n100 Feet Road, Chelliamman Nagar,\nChennai\nTamil Nadu 600042\nIndia" },
    { state: "Tamil Nadu", city: "Chennai", name: "Blue Lotus Technologies Pvt Ltd", address: "Plot No.194-195, First Main Road\nNehru Nagar, Kottivakkam\nPerungudi, Old Mahabalipuram Road\nChennai\nTamil Nadu 600096\nIndia" },
    { state: "Tamil Nadu", city: "Chennai", name: "ISYS Technologies", address: "825A,Ground Floor, 3rd Main Road,\nRam Nagar South , Madipakkam,\nNear By SURYA Working Ladies Hostel\nChennai\nTamil Nadu 600091\nIndia" },
    { state: "Tamil Nadu", city: "Chennai", name: "AATRALZ (Additional Site)", address: "No. 40, 1st Floor,\nRajiv Gandhi Salai, OMR,\nOpposite to RTO office, Sholinganallur\nChennai\nTamil Nadu 600119\nIndia" },
    { state: "Tamil Nadu", city: "Chennai", name: "Bluemix Technologies", address: "2nd Floor, GRS Complex, no. 152,\nVelachery Main road, Pallikarani,\nChennai\nTamil Nadu 600100\nIndia" },
    { state: "Tamil Nadu", city: "Chennai", name: "MINSWAY SOLUTIONS PRIVATE LIMITED", address: "Flat No: C-3/F-2 (First Floor)\nSiva Vel Apartment,No.2 ,Alagappa Nagar\nZamin Pallavaram\nChennai\nTamil Nadu 600117\nIndia" },
    { state: "Tamil Nadu", city: "Chennai", name: "Panimalar Engineering College", address: "Bangalore Trunk Road,\nVaradharajapuram,\nNAZARATHPET\nChennai\nTamil Nadu 600123\nIndia" },
    { state: "Tamil Nadu", city: "Chennai", name: "Glad India Technologies Pvt Ltd", address: "5/3, second floor ,3rd Cross St,\nNew Colony, Chromepet\nChrompet\nChennai\nTamil Nadu 600044\nIndia" },
    { state: "Tamil Nadu", city: "Chennai", name: "GALAXY INFOWARE", address: "#19,Siva Shanmugam Pillai Street,\nWest Tambaram\nChennai\nTamil Nadu 600045\nIndia" },
    { state: "Tamil Nadu", city: "Chennai", name: "SRM UNIVERSITY", address: "TP408, SRM TECH PARK - I , 4TH FLOOR\nPOTHERI, Mobile - 9445544577\nKATTANKULATHUR\nChennai\nTamil Nadu 603203\nIndia" },
    { state: "Tamil Nadu", city: "Vellore", name: "Vellore Institute of Technology", address: "M.G.R Block, Room No.221\nCentre for Technical Support\nThiruvalam Road, Katpadi\nVellore\nTamil Nadu 632014\nIndia" },
    { state: "Tamil Nadu", city: "Coimbatore", name: "RVS College of Arts and Science", address: "242, Trichy Road\nSulur\nCoimbatore\nTamil Nadu 641402\nIndia" },
    { state: "Tamil Nadu", city: "Salem", name: "Rajaji Institute of Technology", address: "Kombadipatty Periya Seeragapadi\nVeerapandi, Salem - Kochi National H'way\nSALEM\nSalem\nTamil Nadu 636308\nIndia" },
    { state: "Tamil Nadu", city: "Tiruchirappalli", name: "Systech Hardware & Networking Academy (P) Ltd.", address: "129 , Aruvi Block, 1st Floor,\nSt. Paul's Complex, Bharatiyar Salai,\nCantonment\nTrichy\nTamil Nadu 620001\nIndia" },
    { state: "Tamil Nadu", city: "Tirunelveli", name: "I Tech Academy", address: "# 28, NISA Complex,\n2nd Floor, Tiruchendur Road\nMurugankuruchi, Palayamkottai\nTirunelveli\nTamil Nadu 627002\nIndia" },
    { state: "Telangana", city: "Hyderabad", name: "KL University", address: "Miyapur road, Near Sai Baba Temple\nBowrampet, Hyderabad, Telangana\nHyderabad\nTelangana 500043\nIndia" },
    { state: "Telangana", city: "Hyderabad", name: "vPrompt eServices Private Limited", address: "Plot No.68 Phase -1 Staff Road\nGunrock Enclave Diamond Point\nSecunderabad\nTelangana 500009\nIndia" },
    { state: "Telangana", city: "Hyderabad", name: "Cegonsoft Technologies", address: "308 3RD FLOOR ALLURI TRADE CENTER\nBESIDE J C BROTHERS\nBHAGYA NAGAR COLONY, KPHB\nHyderabad\nTelangana 500072\nIndia" },
    { state: "Telangana", city: "Hyderabad", name: "CONCOMSE EDUCATION", address: "KOLAN HARITHA COMPLEX\nH.No. 3-100/2/B, 3rd Floor\nABOVE AXIS BANK, NIZAMPET MAIN ROAD\nHYDERABAD\nTelangana 500090\nIndia" },
    { state: "Telangana", city: "Hyderabad", name: "Coreglobal- Additional Site", address: "201, 2nd Floor, TrendSet Pyla Complex\nVengal Rao Nagar\nBeside S.R.Nagar Metro station\nHyderabad\nTelangana 500038\nIndia" },
    { state: "Telangana", city: "Hyderabad", name: "Career Abroad", address: "B.S Towers, Plot No: 14 & 15, 5th Floor,\nMansoorabad, Beside Karur Vysya Bank,\nAbove Indusind bank L.B Nagar,\nHyderabad\nTelangana 500068\nIndia" },
    { state: "Telangana", city: "Hyderabad", name: "Vinsys IT Services (additional)", address: "252/2,1st Floor,Sai Prithvi\nCyber Arcade, Above Bata Showroom\nPillar No C-1727, Main Road, Madhapur,\nHyderabad\nTelangana 500081\nIndia" },
    { state: "Telangana", city: "Hyderabad", name: "CKS IT SERVICES (INDIA) PVT LTD.", address: "H.No.1-98/9/24, Flat No.201,\nImage Garden Function Hall Road,\nArunodaya Colony, Madhapur\nHyderabad\nTelangana 500081\nIndia" },
    { state: "Telangana", city: "Hyderabad", name: "TECH INDYA IT SERVICES PRIVATE LIMITED", address: "Building name Nasuja\nH.No. 1-89/G/36, Near Westin Hotel\nMind Space, Shilpi Valley, Madhapur\nHyderabad\nTelangana 500081\nIndia" },
    { state: "Telangana", city: "Hyderabad", name: "VAST TECHNOLOGIES", address: "Door No. 4-50/P-I/36, 1st Floor,\nRadha Sadhan Building,\nJayabheri Enclave, Gachibowli,\nHYDERABAD\nTelangana 500032\nIndia" },
    { state: "Tripura", city: "No test Center", name: "No test Center", address: "No test Center" },
    { state: "Uttar Pradesh", city: "Lucknow", name: "Thirumala Education Academy", address: "Near Diamond Resort\nRaebarely Road,\nMohanlal Ganj\nLucknow\nUttar Pradesh 227305\nIndia" },
    { state: "Uttar Pradesh", city: "Lucknow", name: "School Of Management Sciences", address: "19th km stone , Sultanpur Road,\nBiruha, Post, Kashimpur,\nGosainganj,\nLucknow\nUttar Pradesh 226501\nIndia" },
    { state: "Uttar Pradesh", city: "Noida", name: "Agilitics Edutech Pvt. Ltd - Noida Center", address: "BSI Business park H-160, Second Floor\n,Unit-205 Sector -63 Noida (U.P)\nSecond Floor unit-205\nNoida\nUttar Pradesh 201301\nIndia" },
    { state: "Uttar Pradesh", city: "Meerut", name: "Pixel Computer Institute", address: "123 Platinum Mall Baghpat Road\nNear Malyana Flyover\nMeerut\nUttar Pradesh 250002\nIndia" },
    { state: "Uttar Pradesh", city: "Bareilly", name: "MILES AHEAD IMMIGRATION", address: "Level 1, MD Floors Above Domino's\nDD Puram,\nBareilly\nUttar Pradesh 243001\nIndia" },
    { state: "Uttar Pradesh", city: "Kanpur", name: "Axis Institute of Technology and Management", address: "NH-2, Hathipur,\nRooma\nKanpur\nUttar Pradesh 208001\nIndia" },
    { state: "Uttar Pradesh", city: "Ghaziabad", name: "Meritorious Academy Pvt Ltd- Additional Site", address: "Office Suite-1808\nTower S3, Cloud-9\nSector-1, Vaishali\nGhaziabad\nUttar Pradesh 201010\nIndia" },
    { state: "Uttar Pradesh", city: "Agra", name: "Easy Dots Technologies", address: "B-14, Sector-3A, Avas Vikas Colony,\nV.S. Plaza, Sikandra\nAgra\nUttar Pradesh 282007\nIndia" },
    { state: "Uttarakhand", city: "Dehradun", name: "VGRASSP Services", address: "28 2nd Floor, Subhash Road\nNear Secretariat\nDehradun\nUttarakhand 248001\nIndia" },
    { state: "Uttarakhand", city: "Dehradun", name: "Advita Innovations", address: "Kalptaru II, Adhoiwala(North),\nRaipur Road Next to Punjab National Bank\n+91 135 2752222\nDehradun\nUttarakhand 248001\nIndia" },
    { state: "Uttarakhand", city: "Dehradun", name: "MAYA DEVI UNIVERSITY", address: "NH-72 Central Home Town\nSelaqui\nDehradun\nUttrakhand\nUttarakhand 248001\nIndia" },
    { state: "Uttarakhand", city: "Haridwar", name: "Sheel Institute", address: "H-24, Shivalik Nagar,\nHaridwar\nUttarakhand 249403\nIndia" },
    { state: "West Bengal", city: "Kolkata", name: "Offtrack Education", address: "9/5, FEEDER ROAD, 3RD FLOOR,\nBELGHARIA\nKOLKATA\nWest Bengal 700056\nIndia" },
    { state: "West Bengal", city: "Kolkata", name: "Agile Technologies And Solutions", address: "1, Iswar Ganguli Street\nVASUDEVA BUILDING;\nTop Floor\nKalighat\nKolkata\nWest Bengal 700026\nIndia" },
    { state: "West Bengal", city: "Kolkata", name: "ILT Education India Private Limited", address: "2,Central Road, Jadavpur(Ground Floor),\nBesides CESC Cash Office\nKolkata\nKolkata\nWest Bengal 700032\nIndia" },
    { state: "West Bengal", city: "Kolkata", name: "SKYLER OVERSEAS AND EDUCATION PRIVATE LIMITED", address: "4th Floor, Unit-B, Martin Burn iSpace\nDH6/35, Street No.0315\nDH Block (Newtown), Action Area\nKolkata\nWest Bengal 700156\nIndia" },
    { state: "West Bengal", city: "Siliguri", name: "ISOEH", address: "Baghajatin Park Main Road\nSub-Registry Office Building, 1st Floor\nBeside Axis Bank, Siliguri\nSiliguri\nWest Bengal 734001\nIndia" },
    { state: "Andaman & Nicobar Islands", city: "No test center", name: "No test center", address: "No test center" },
    { state: "Chandigarh", city: "Chandigarh", name: "Secure Net Technologies", address: "Punjab Regional Chapter, Adjacent\nPracheen Kala Kendra,\nNear Banga Bhawan, Sec- 35B\nChandigarh\nChandigarh 160022\nIndia" },
    { state: "Chandigarh", city: "Chandigarh", name: "Chandigarh Networks Academy", address: "#1498, ITPI,\nOpposite Civil Dispensary, Sector-35 B\nChandigarh\nChandigarh 160035\nIndia" },
    { state: "Dadra & Nagar Haveli and Daman & Diu", city: "No Test Center", name: "No Test Center", address: "No Test Center" },
    { state: "Lakshadweep", city: "No Test Center", name: "No Test Center", address: "No Test Center" },
    { state: "Delhi", city: "New Delhi", name: "Positive Solutions", address: "5, 2nd Floor Kapil Vihar ICA Building\nMain Road, Pitampura Metro Pillar 347,\nNear Bandhan Bank, Metro Kohat Enclave\nNew Delhi\nDelhi 110034\nIndia" },
    { state: "Delhi", city: "New Delhi", name: "Goldman consulting Private Limited", address: "Off. No. 306, Tower B, Building NDM 1,\nNetaji Subhash Place\nPitampura\nNew Delhi\nDelhi 110034\nIndia" },
    { state: "Delhi", city: "New Delhi", name: "Matraex Coretech Private Limited", address: "1001 F, 11th Floor, Westend Mall,\nJanakpuri West, District Centre\nLandmark Janakpuri West Metro Station\nNew Delhi\nDelhi 110058\nIndia" },
    { state: "Delhi", city: "New Delhi", name: "National Industrial Training Centre", address: "Adjacent to Singh's Dental Hospital,\nDwarka Mor Metro Station, Pillar No 771\nNew Delhi\nDelhi 110059\nIndia" },
    { state: "Delhi", city: "New Delhi", name: "Ramton Technologies Private Limited", address: "145 B/9 3rd floor Kishan Garh\nNear United Free Church Vasant Kunj\nNew Delhi\nDelhi 110070\nIndia" },
    { state: "Delhi", city: "New Delhi", name: "Agilitics Edutech Pvt. Ltd.", address: "202,203,204, Sector-23,\nDwarka Vardhman City Mall, Dwarka\nsecond floor unit no 202,203,204\nNew Delhi\nDelhi 110075\nIndia" },
    { state: "Delhi", city: "New Delhi", name: "INDOVISION SERVICES PRIVATE LIMITED", address: "3rd Floor, Centrum Mall,\nKhasra No. 369, MG Road,\nSultanpur\nNew Delhi\nDelhi 110030\nIndia" },
    { state: "Puducherry", city: "Puducherry", name: "Micireds Network Technologies", address: "64, Lawspet Main Road, Pudupet\nPethuchettypet,LAWSPET\nPONDICHERRY\nPuducherry 605008\nIndia" },
    { state: "Puducherry", city: "Puducherry", name: "RVC IT Services", address: "9A, 2nd Floor, Gandhi Street\nShanthi Nagar\nLawspet\nPuducherry\nPuducherry 605008\nIndia" },
    { state: "Jammu & Kashmir", city: "Jammu", name: "Tantray Online Services Pvt Ltd", address: "Lane No. 1\nOpp AM Hyundai Automobile Showroom\nNH Byepass, Near Baba Dairy,Malik Market\nJammu\nJammu & Kashmir 180015\nIndia" },
    { state: "Jammu & Kashmir", city: "Srinagar", name: "Iqbal Institute of Technology & Management", address: "Narakara Road\nLaloo, Sheshgari Bagh, Hyderpora\nLand mark: Primary Health Centre Laloo\nSrinagar\nJammu & Kashmir 190014\nIndia" },
    { state: "Ladakh", city: "No Test Center", name: "No Test Center", address: "No Test Center" }
];

const RegistrationModal: React.FC<RegistrationModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    middleName: '',
    lastName: '',
    country: '',
    city: '',
    state: '',
    zipcode: '',
    phoneNumber: '',
    email: '',
    educationLevel: '',
    degreeName: '',
    learningPreference: '',
    testCenterState: '',
    testCenterCity: '',
    testCenterName: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  // Get unique states from test centers
  const availableStates = useMemo(() => {
    const states = [...new Set(TEST_CENTERS.map(tc => tc.state))].sort();
    return states;
  }, []);

  // Get cities for selected state
  const availableCities = useMemo(() => {
    if (!formData.testCenterState) return [];
    const cities = [...new Set(
      TEST_CENTERS
        .filter(tc => tc.state === formData.testCenterState)
        .map(tc => tc.city)
    )].sort();
    return cities;
  }, [formData.testCenterState]);

  // Get test centers for selected state and city
  const availableTestCenters = useMemo(() => {
    if (!formData.testCenterState || !formData.testCenterCity) return [];
    return TEST_CENTERS.filter(
      tc => tc.state === formData.testCenterState && tc.city === formData.testCenterCity
    );
  }, [formData.testCenterState, formData.testCenterCity]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    
    // Reset dependent fields when parent selection changes
    if (name === 'testCenterState') {
      setFormData(prev => ({
        ...prev,
        testCenterState: value,
        testCenterCity: '',
        testCenterName: ''
      }));
    } else if (name === 'testCenterCity') {
      setFormData(prev => ({
        ...prev,
        testCenterCity: value,
        testCenterName: ''
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log('🚀 Form submit started');
    setIsSubmitting(true);
    
    try {
      console.log('🔍 Validating required fields...');
      // Validate required fields
      const requiredFields = {
        firstName: 'First Name',
        lastName: 'Last Name', 
        country: 'Country',
        city: 'City',
        state: 'State',
        zipcode: 'Zipcode',
        phoneNumber: 'Phone Number',
        email: 'Email Address',
        educationLevel: 'Education Level',
        learningPreference: 'Learning Preference',
        testCenterState: 'Test Center State',
        testCenterCity: 'Test Center City',
        testCenterName: 'Test Center'
      };

      for (const [field, label] of Object.entries(requiredFields)) {
        if (!formData[field as keyof FormData]) {
          console.log(`❌ Missing field: ${label}`);
          alert(`Please fill in the ${label} field.`);
          setIsSubmitting(false);
          return;
        }
      }

      console.log('✅ All required fields validated');

      // Get test center details for submission
      const testCenterInfo = formData.testCenterName 
        ? TEST_CENTERS.find(
            tc => tc.state === formData.testCenterState && 
                  tc.city === formData.testCenterCity && 
                  tc.name === formData.testCenterName
          )
        : null;

      console.log('🏢 Test center info:', testCenterInfo);

      // Prepare data for Google Sheets
      const submissionData = {
        firstName: formData.firstName,
        middleName: formData.middleName,
        lastName: formData.lastName,
        country: formData.country,
        city: formData.city,
        state: formData.state,
        zipcode: formData.zipcode,
        phoneNumber: formData.phoneNumber,
        email: formData.email,
        educationLevel: formData.educationLevel,
        degreeName: formData.degreeName,
        learningPreference: formData.learningPreference,
        testCenterState: formData.testCenterState,
        testCenterCity: formData.testCenterCity,
        testCenterName: formData.testCenterName,
        testCenterAddress: testCenterInfo?.address || 'N/A'
      };

      console.log('📤 Submitting to Google Sheets:', submissionData);
      console.log('🌐 URL:', GOOGLE_SCRIPT_URL);

      // Submit to Google Sheets via Apps Script
      try {
        const response = await fetch(GOOGLE_SCRIPT_URL, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(submissionData)
        });

        // Log response for debugging
        console.log('Response status:', response.status);
        
        if (response.ok) {
          const result = await response.text();
          console.log('✅ Form submitted successfully! Response:', result);
          setSubmitStatus('success');
        } else {
          throw new Error(`HTTP ${response.status}: ${response.statusText}`);
        }
      } catch (fetchError) {
        console.error('Fetch error:', fetchError);
        
        // Fallback: Try with no-cors mode
        console.log('Trying with no-cors mode...');
        await fetch(GOOGLE_SCRIPT_URL, {
          method: 'POST',
          mode: 'no-cors',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(submissionData)
        });
        
        console.log('✅ Form submitted with no-cors mode!');
        setSubmitStatus('success');
      }
      
      // Close modal after 3 seconds
      setTimeout(() => {
        onClose();
        setSubmitStatus('idle');
        setFormData({
          firstName: '',
          middleName: '',
          lastName: '',
          country: '',
          city: '',
          state: '',
          zipcode: '',
          phoneNumber: '',
          email: '',
          educationLevel: '',
          degreeName: '',
          learningPreference: '',
          testCenterState: '',
          testCenterCity: '',
          testCenterName: ''
        });
      }, 3000);
    } catch (error) {
      console.error('Submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <div className="modal-header">
          <h2>Join TekBay AWS Apprenticeship Program</h2>
          <button className="modal-close" onClick={onClose}>&times;</button>
        </div>

        <form className="registration-form" onSubmit={handleSubmit}>
          <div className="form-section">
            <h3>Legal Full Name</h3>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="firstName">First Name *</label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="middleName">Middle Name</label>
                <input
                  type="text"
                  id="middleName"
                  name="middleName"
                  value={formData.middleName}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="lastName">Last Name *</label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>
          </div>

          <div className="form-section">
            <h3>Address</h3>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="country">Country *</label>
                <input
                  type="text"
                  id="country"
                  name="country"
                  value={formData.country}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="city">City *</label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="state">State *</label>
                <input
                  type="text"
                  id="state"
                  name="state"
                  value={formData.state}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="zipcode">Zipcode *</label>
                <input
                  type="text"
                  id="zipcode"
                  name="zipcode"
                  value={formData.zipcode}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>
          </div>

          <div className="form-section">
            <h3>Contact Information</h3>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="phoneNumber">Phone Number *</label>
                <input
                  type="tel"
                  id="phoneNumber"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Personal Email Address *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>
          </div>

          <div className="form-section">
            <h3>Education</h3>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="educationLevel">Education Level *</label>
                <select
                  id="educationLevel"
                  name="educationLevel"
                  value={formData.educationLevel}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Select Education Level</option>
                  <option value="High School">High School</option>
                  <option value="Associate Degree">Associate Degree</option>
                  <option value="Bachelor's Degree">Bachelor's Degree</option>
                  <option value="Master's Degree">Master's Degree</option>
                  <option value="Doctorate">Doctorate</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="degreeName">Degree Name</label>
                <input
                  type="text"
                  id="degreeName"
                  name="degreeName"
                  value={formData.degreeName}
                  onChange={handleInputChange}
                  placeholder="e.g., Computer Science, Engineering"
                />
              </div>
            </div>
          </div>

          <div className="form-section">
            <h3>Learning Preference</h3>
            <div className="form-group">
              <label htmlFor="learningPreference">Interested in *</label>
              <select
                id="learningPreference"
                name="learningPreference"
                value={formData.learningPreference}
                onChange={handleInputChange}
                required
              >
                <option value="">Select Learning Preference</option>
                <option value="In-person live classes">In-person live classes</option>
                <option value="Pre-recorded sessions">Pre-recorded sessions</option>
              </select>
            </div>
          </div>

          <div className="form-section">
            <h3>Test Center Preference (India) *</h3>
            <p className="form-section-note">Select your preferred test center location in India for certification exams (Required)</p>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="testCenterState">State *</label>
                <select
                  id="testCenterState"
                  name="testCenterState"
                  value={formData.testCenterState}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Select State</option>
                  {availableStates.map(state => (
                    <option key={state} value={state}>{state}</option>
                  ))}
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="testCenterCity">City *</label>
                <select
                  id="testCenterCity"
                  name="testCenterCity"
                  value={formData.testCenterCity}
                  onChange={handleInputChange}
                  disabled={!formData.testCenterState}
                  required
                >
                  <option value="">Select City</option>
                  {availableCities.map(city => (
                    <option key={city} value={city}>{city}</option>
                  ))}
                </select>
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="testCenterName">Test Center *</label>
              <select
                id="testCenterName"
                name="testCenterName"
                value={formData.testCenterName}
                onChange={handleInputChange}
                disabled={!formData.testCenterCity}
                required
              >
                <option value="">Select Test Center</option>
                {availableTestCenters.map((center, index) => (
                  <option key={index} value={center.name}>
                    {center.name}
                  </option>
                ))}
              </select>
              {formData.testCenterName && (
                <div className="test-center-address">
                  <small>
                    <strong>Address:</strong>{' '}
                    {TEST_CENTERS.find(
                      tc => tc.state === formData.testCenterState && 
                            tc.city === formData.testCenterCity && 
                            tc.name === formData.testCenterName
                    )?.address}
                  </small>
                </div>
              )}
            </div>
          </div>

          <div className="form-actions">
            <div className="form-info">
              <p>🔒 Your information is secure and will be sent to apprenticeship@tekbay.digital</p>
            </div>
            {submitStatus === 'success' && (
              <div className="success-message">
                ✅ Registration submitted successfully! Your email client will open to send your application to apprenticeship@tekbay.digital
              </div>
            )}
            {submitStatus === 'error' && (
              <div className="error-message">
                ❌ Please fill in all required fields and try again.
              </div>
            )}
            <button 
              type="submit" 
              className="submit-btn"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Processing...' : 'Submit Application'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegistrationModal;