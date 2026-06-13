/* ==========================================
   中国古代科技史 · 华夏之光 — 主脚本
   ========================================== */

// ===== 科技成就数据（31项） =====
const techData = [
  // ---- 天文学（7项） ----
  {
    id: 't01', name: '二十八宿体系', category: '天文学', era: '上古至夏商周',
    inventor: '上古先民集体创造', year: '约公元前2000年',
    period: '上古至夏商周',
    desc: '二十八宿是中国古代天文学家为观测日、月、五星运行而划分的二十八个星区，将黄道和赤道附近的星空划分为二十八个天区，每宿包含若干颗恒星。这一体系的形成经历了漫长的历史过程：殷墟甲骨文中已出现"火""鸟"等宿名；《尚书·尧典》记载了"四仲中星"；湖北随州曾侯乙墓出土的漆箱盖面上（约公元前433年）完整绘有二十八宿名称，是迄今发现最早的文字证据。二十八宿不仅是天文观测的坐标系，更深刻影响了中国古代的历法制定、农业生产（节气划分）、建筑朝向乃至哲学思想（天人感应），将天文观测与人间秩序紧密相连。作为一项延续数千年的观测体系，二十八宿是中国天文学对世界文明的重要贡献。',
    source: '《尚书·尧典》；曾侯乙墓出土文物；陈遵妫《中国天文学史》'
  },
  {
    id: 't02', name: '甘石星经', category: '天文学', era: '春秋战国',
    inventor: '甘德、石申', year: '约公元前4世纪',
    period: '春秋战国',
    desc: '《甘石星经》是战国时期齐国人甘德与魏国人石申所著的两部天文学著作的合称，是世界现存最古老的星表之一。甘德著有《天文星占》八卷，石申著有《天文》八卷，二书均已散佚，但其主要内容被唐代《开元占经》大量引用而得以保存。石申的星表记录了121颗恒星的位置（赤道坐标），其数据精度令人惊叹——与现代计算值相比，平均误差仅约1度。甘德更以肉眼观测到木星的卫星（木卫三），比伽利略用望远镜发现木卫星早了近2000年。该星经还记载了日食、月食、彗星、流星等天象的观测记录，建立了初步的行星运动理论，为后世中国天文历法的发展奠定了观测基础。',
    source: '《开元占经》；陈遵妫《中国天文学史》；席泽宗《中国天文学史》'
  },
  {
    id: 't03', name: '浑天仪', category: '天文学', era: '秦汉',
    inventor: '张衡', year: '约公元117年',
    period: '秦汉',
    desc: '浑天仪（又称漏水转浑天仪）是东汉天文学家张衡（78—139年）在前人浑仪基础上创制的精密天文演示仪器。张衡是"浑天说"的集大成者，主张"浑天如鸡子，天体圆如弹丸，地如鸡中黄"，认为天大地小，天包地外。他设计的浑天仪以铜铸成，主体为一个直径约四尺六寸的空心铜球，球面刻有二十八宿、南北极、黄道、赤道等天象标记，利用漏壶流水的均匀动力驱动齿轮系统，使铜球绕轴旋转一周恰好与天球周日运动同步（一昼夜一周），可以自动演示日月星辰的出没、运行规律。这套装置是世界上最早的天象演示仪器和机械计时器的雏形之一，其齿轮传动系统的精密程度远超同时代其他文明。张衡还著有《灵宪》等天文学经典著作。',
    source: '《后汉书·张衡传》；《隋书·天文志》；李约瑟《中国科学技术史》第三卷'
  },
  {
    id: 't04', name: '地动仪', category: '天文学', era: '秦汉',
    inventor: '张衡', year: '公元132年',
    period: '秦汉',
    desc: '候风地动仪是张衡于东汉阳嘉元年（公元132年）发明的世界上第一台地震检测仪器。据《后汉书·张衡传》记载，该仪器"以精铜铸成，员径八尺，合盖隆起，形似酒尊"，外形如一个带盖的青铜酒樽。仪器内部设有精巧的"都柱"（惯性摆）结构，周围设有八条通道（"八道"），分别对应东、西、南、北、东南、东北、西南、西北八个方向。每条通道的出口处安装一个龙首，龙口内含铜丸，下方各有一只张口的铜蟾蜍。当远处发生地震时，震波传来使都柱向震源方向倾倒，触动相应方向的机关，龙口张开吐出铜丸落入蟾蜍口中，发出清脆响声，从而指示震中方向。东汉永和三年（公元138年），地动仪成功检测到陇西方向的一次地震，当时京师洛阳无人有感，数日后驿马来报证实了地震的发生。这一发明比西方最早的现代地震仪早了约1700年。',
    source: '《后汉书·张衡传》；冯锐等《张衡地动仪的科学复原》'
  },
  {
    id: 't05', name: '大明历', category: '天文学', era: '三国两晋南北朝',
    inventor: '祖冲之', year: '公元463年',
    period: '三国两晋南北朝',
    desc: '《大明历》是南朝数学家、天文学家祖冲之（429—500年）编制的一部精密历法。祖冲之在编制过程中首次将"岁差"（由于地球自转轴的缓慢进动导致春分点西移的现象）引入历法计算，这在世界历法史上是开创性的贡献——此前东晋虞喜虽已发现岁差，但祖冲之是第一个将其定量纳入历法体系的学者。大明历规定一回归年为365.2428日，与现代测定值365.2422日仅差约0.0006日，精度极高。此外，祖冲之还在大明历中给出了更精确的闰周（391年144闰），取代了此前通用的19年7闰法。大明历还计算了交点月（27.21223日），用以更准确地预报日食和月食。虽然因保守势力的阻挠该历法在祖冲之生前未能颁行，但经其子祖暅之三次上书力争，最终在梁武帝天监九年（公元510年）正式颁行，使用了约80年。',
    source: '《宋书·律历志》；《南齐书·祖冲之传》；陈美东《中国科学技术史·天文学卷》'
  },
  {
    id: 't06', name: '水运仪象台', category: '天文学', era: '宋元',
    inventor: '苏颂', year: '公元1088年',
    period: '宋元',
    desc: '水运仪象台是北宋天文学家苏颂（1020—1101年）主持建造的大型综合性天文仪器，建成于宋哲宗元祐三年（公元1088年），位于都城开封。这是一座高约12米、宽约7米的三层木结构建筑，集天文观测（浑仪）、天象演示（浑象）和计时报时（机械钟）三大功能于一体，是11世纪世界上最为复杂精密的机械装置。仪器的核心动力来自一个巨大的水轮，通过恒定水流推动水轮匀速旋转，再经过复杂的齿轮传动系统驱动整座仪器的运行。其中最关键的技术创新是"天衡"装置——一套类似现代机械钟表中"擒纵器"的控制机构，可确保水轮的间歇性匀速转动，这是世界已知最早的擒纵装置雏形。苏颂为此编写了《新仪象法要》一书，详细记载了仪器的设计图纸、零件尺寸和制造工艺，包含60多幅机械图，是世界现存最早、最完整的机械图纸集之一。',
    source: '苏颂《新仪象法要》；李约瑟《中国科学技术史》第四卷'
  },
  {
    id: 't07', name: '授时历', category: '天文学', era: '宋元',
    inventor: '郭守敬', year: '公元1280年',
    period: '宋元',
    desc: '《授时历》是元代天文学家郭守敬（1231—1316年）与王恂、许衡等人共同编制的中国古代最精密的历法，于至元十七年（公元1280年）颁行，一直使用到明末（1644年），历时364年，是中国历史上使用时间最长的历法。郭守敬为此进行了空前规模的全国性天文测量——组织了"四海测验"计划，在全国27个观测点（最北至北海即今西伯利亚，最南至南海即今西沙群岛）进行大规模纬度测量和黄赤交角测定。他测得的黄赤交角值为23°33\'34"，与现代值相差仅约1\'。授时历确定一回归年为365.2425日，这一数值与现行公历（格里高利历）完全相同，但比格里高利历早了约300年。授时历还创造性地使用"招差术"（三次差内插法）和"弧矢割圆术"（球面三角法近似解法）进行天文计算，代表了13世纪世界天文学和数学的最高水平。',
    source: '《元史·郭守敬传》；《元史·历志》；陈美东《中国科学技术史·天文学卷》'
  },

  // ---- 数学（5项） ----
  {
    id: 'm01', name: '十进制与算筹', category: '数学', era: '上古至夏商周',
    inventor: '上古先民集体创造', year: '约公元前14世纪',
    period: '上古至夏商周',
    desc: '中国是世界上最早完善使用十进制计数法的文明之一。商代甲骨文中已出现从一至万的完整十进制数字体系，采用"十进位值制"——即同一数字符号在不同位置表示不同的数值（如"三百六十五"）。这与古罗马、古埃及的非位值制记数法有本质区别，后者需要不断创造新符号来表示大数。算筹是中国古代进行计算的基本工具，通常为竹制或木制小棍，以纵横交错方式摆放表示数字，利用"空位"表示零（约公元前4世纪已出现）。算筹不仅可以进行加减乘除四则运算，还能解方程组、开平方、开立方甚至解高次方程，是一种功能极为强大的计算工具。十进制与算筹体系的建立，使中国古代数学在算法化发展道路上领先了世界许多世纪，是中华民族对世界数学发展的基础性贡献。',
    source: '甲骨文数字资料；《九章算术》；吴文俊《中国数学史大系》第一卷'
  },
  {
    id: 'm02', name: '九章算术', category: '数学', era: '秦汉',
    inventor: '佚名（经多人编纂）', year: '约公元1世纪',
    period: '秦汉',
    desc: '《九章算术》是中国古代最重要的数学经典，经先秦至汉代多人补充整理最终成书，共九卷，包含246个应用问题及其解法，系统涵盖了分数四则运算、比例分配、面积与体积计算、开平方开立方、勾股测量、线性方程组（方程术）、正负数运算法则等核心数学内容。该书最为突出的成就是"方程术"——世界上最早的系统线性方程组解法（类似于现代高斯消元法），以及在世界数学史上首次明确提出了正负数的概念和加减法则（"正负术"）。书中还系统给出各种面积体积公式，其中圆面积的计算使用了"径一周三"（π≈3）和更精确的数值。《九章算术》确立了中国古代数学以问题为中心、以算法为主导的理论体系，后世中国数学家（如刘徽、祖冲之、秦九韶等）均以此为基础进行注释和发展。该书在唐代传入朝鲜和日本，成为东亚数学教育的标准教材，后被译为多种文字传播至世界。',
    source: '《九章算术》（刘徽注本）；郭书春《九章算术译注》；吴文俊《中国数学史大系》'
  },
  {
    id: 'm03', name: '祖冲之圆周率', category: '数学', era: '三国两晋南北朝',
    inventor: '祖冲之', year: '约公元460年',
    period: '三国两晋南北朝',
    desc: '祖冲之在圆周率计算上取得的成就代表了5世纪世界数学的巅峰。他运用刘徽创立的"割圆术"——通过不断增加圆内接正多边形的边数来逼近圆周长——将计算推进到正12288边形，最终得出圆周率的不足近似值3.1415926和过剩近似值3.1415927。也就是说，他证明了3.1415926 < π < 3.1415927，精确至小数点后七位。此外，祖冲之还给出了圆周率的两个分数近似值：约率22/7（≈3.142857）和密率355/113（≈3.1415929），其中密率（祖率）是分母在113以内最接近π真值的分数，直到约1000年后才被德国数学家奥托（Valentin Otho）和荷兰数学家安托尼斯（Adriaan Anthonisz）重新发现。计算正12288边形边长需要重复使用半角公式和开平方运算12次以上，在当时没有算盘、仅靠算筹的情况下，这需要超乎寻常的毅力和技巧。祖冲之的精确值保持了约1000年的世界纪录。',
    source: '《隋书·律历志》；钱宝琮《中国数学史》；李约瑟《中国科学技术史》第三卷'
  },
  {
    id: 'm04', name: '杨辉三角', category: '数学', era: '宋元',
    inventor: '杨辉（载贾宪之法）', year: '公元1261年',
    period: '宋元',
    desc: '杨辉三角是二项式系数在三角形中的几何排列，在中国称为"开方作法本源图"。北宋数学家贾宪（约11世纪）在其失传的《黄帝九章算经细草》中首次提出了这一方法，南宋数学家杨辉（约1238—1298年）在《详解九章算法》（1261年）中引用并保存了贾宪的成果，故后世亦称之为"杨辉三角"。比法国数学家帕斯卡（Pascal）于1654年发表该三角早约400年。杨辉和贾宪将这一工具用于"增乘开方法"——一种可求任意高次方程数值解的系统算法，其原理与现代的霍纳法（Horner\'s method）完全一致。杨辉三角不仅是组合数学的核心成果，更被广泛应用于概率论、二项式定理、以及现代计算机科学中的动态规划等算法。这一成就证明中国古代数学绝非只是经验计算，而是蕴含了高度抽象的代数结构思维。',
    source: '杨辉《详解九章算法》；华罗庚《从杨辉三角谈起》；吴文俊《中国数学史大系》'
  },
  {
    id: 'm05', name: '数书九章（大衍求一术）', category: '数学', era: '宋元',
    inventor: '秦九韶', year: '公元1247年',
    period: '宋元',
    desc: '《数书九章》是南宋数学家秦九韶（约1202—1261年）的传世巨著，共九卷81个问题，涵盖大衍类（一次同余式组）、天时类（历法计算）、田域类（土地测量）、赋役类（赋税计算）、钱谷类（粮仓容积）、营建类（建筑工程）等九大类实际数学问题。该书最核心的贡献是"大衍求一术"——完整给出了一次同余式组的系统解法和理论证明，即现代数论中的"中国剩余定理"。该定理的核心思想是：对于一组两两互质的模数，如果知道一个数分别除以各个模数的余数，就可以唯一确定该数（在模的乘积范围内）。秦九韶不仅给出了算法，还对模数不两两互质的情形做了深入讨论，其数学思维的严密性远超时代水准。此外，秦九韶在书中还提出了以"正负开方术"求解任意高次方程的数值方法，其算法结构与500多年后英国数学家霍纳在1819年发表的霍纳法完全相同。',
    source: '秦九韶《数书九章》；钱宝琮《中国数学史》；吴文俊《秦九韶与<数书九章>》'
  },

  // ---- 农业与水利（4项） ----
  {
    id: 'a01', name: '都江堰', category: '农业与水利', era: '春秋战国',
    inventor: '李冰父子', year: '约公元前256年',
    period: '春秋战国',
    desc: '都江堰是战国时期秦国蜀郡太守李冰及其子李二郎主持修建的大型无坝引水水利工程，位于今四川成都平原西部的岷江出山口。工程由三大主体部分构成：鱼嘴分水堤（将岷江分为内江和外江）、飞沙堰溢洪道（排泄洪水和泥沙）、宝瓶口引水口（控制内江进水量），三者巧妙配合，实现了"分四六、平潦旱"的自动调控效果——枯水期六成水量进入内江灌溉、丰水期四成水量进入内江而六成从外江排走。整个工程利用自然地形和水流力学原理，以竹笼装卵石（杩槎）等简易材料实现了分水、泄洪、排沙、灌溉四大功能，使成都平原成为"水旱从人、不知饥馑"的"天府之国"。都江堰运行至今已逾2200年，灌溉面积从古代的数十万亩扩大到今天的逾1000万亩，是世界上历史最悠久、仍在发挥巨大效益的无坝引水工程，2000年被列为世界文化遗产。',
    source: '《史记·河渠书》；《华阳国志》；谭徐明《都江堰史》'
  },
  {
    id: 'a02', name: '齐民要术', category: '农业与水利', era: '三国两晋南北朝',
    inventor: '贾思勰', year: '约533—544年',
    period: '三国两晋南北朝',
    desc: '《齐民要术》是北魏农学家贾思勰（生卒年不详，约5—6世纪）所著的中国现存最早、最完整的综合性农学著作，全书共十卷九十二篇，约十一万字，"起自耕农，终于醯醢，资生之业，靡不毕书"。该书系统总结了公元6世纪以前中国黄河中下游地区（也包括部分南方）的农业生产经验和技术知识，涵盖谷物、蔬菜、果树、林木的栽培技术，家畜家禽的饲养和疾病防治，农产品加工（酿造、腌制、制糖等）、烹饪方法等方方面面，引用古代文献及当时农谚多达一百五六十种。贾思勰在书中提出了"顺天时、量地利"的农业生产原则和轮作、间作、套种、选种育种等先进农技思想，许多方法至今仍有实用价值。该书还详细记载了制作豆豉、酱、醋、酒曲的微生物发酵技术，以及果树的嫁接繁殖技术。作为世界农学史上的丰碑，《齐民要术》被翻译为多种语言，被国际学术界誉为"中国古代农业的百科全书"。',
    source: '贾思勰《齐民要术》；石声汉《齐民要术今释》；农业出版社'
  },
  {
    id: 'a03', name: '曲辕犁', category: '农业与水利', era: '隋唐',
    inventor: '唐代农民改良', year: '约公元7—8世纪',
    period: '隋唐',
    desc: '曲辕犁（又称江东犁）是唐代在传统直辕犁基础上改进创新的一种高效耕地农具，标志着中国传统犁具发展到了成熟阶段。据唐代陆龟蒙《耒耜经》详细记载，曲辕犁由犁辕、犁壁（翻土板）、犁铧（犁铲）、犁梢（手柄）、犁底、压铲、策额、犁箭、犁评、犁建、犁盘等11个部件组成，结构已十分精密。其最大创新是采用弯曲的犁辕代替此前直辕，使犁地时牵引点降低，操作更为灵活省力，一头牛即可拉动，且在转弯和调整耕深时更加轻便——通过调节"犁评"可以控制入土深度。曲辕犁还配备了犁壁（翻土板），能够将土垡翻转到一侧，提高了犁地的质量和效率。这一耕犁形制在此后近千年间基本保持不变，一直沿用到近代，并被广泛传播至朝鲜、日本和东南亚等地区，深刻影响了东亚农业文明的发展轨迹。',
    source: '陆龟蒙《耒耜经》；阎万英《中国农业史》；李根蟠《中国古代农业》'
  },
  {
    id: 'a04', name: '农政全书', category: '农业与水利', era: '明清',
    inventor: '徐光启', year: '明代（约1628年）',
    period: '明清',
    desc: '《农政全书》是明代科学家徐光启（1562—1633年）积毕生心血编著的大型农学百科全书，成书于崇祯元年（1628年）前后，全书共六十卷，约七十万字。徐光启身为礼部尚书兼内阁大学士，却一生心系农事，在天津、上海等地亲自设立试验田进行农作物栽培实验——他是中国历史上第一位将科学实验方法系统引入农学研究的学者。全书分为农本、田制、农事、水利、农器、树艺、蚕桑、蚕桑广类、种植、牧养、制造、荒政等十二大类，系统总结了传统农业技术和政策思想，同时吸收了大量传入中国的西方科技知识（如《泰西水法》中的水利技术）。徐光启特别关注"荒政"（饥荒救济）问题，详细记录了甘薯、玉米等外来高产作物的引种推广方法，对明末清初的粮食增产和人口增长产生了深远影响。《农政全书》是一部融贯中西、兼顾理论与实践、集传统农学大成的里程碑式著作。',
    source: '徐光启《农政全书》；梁家勉《徐光启年谱》；胡道静《农书·农史论集》'
  },

  // ---- 医学（5项） ----
  {
    id: 'me01', name: '黄帝内经', category: '医学', era: '春秋战国',
    inventor: '托名黄帝，多人编纂', year: '约战国至西汉（前3—前1世纪）',
    period: '春秋战国',
    desc: '《黄帝内经》是中国最早的医学理论经典，也是中医学理论体系的奠基之作，分为《素问》和《灵枢》两部分，各八十一篇。该书以黄帝与岐伯等医臣问答的形式，系统阐述了阴阳五行学说、脏腑经络学说、气血津液理论、病因病机学说、诊法治则等核心医学理论，构建了"天人相应"的整体医学观和"辨证论治"的方法论框架。书中强调"上工治未病"的预防医学思想，提出"正气存内，邪不可干"的发病学原理和"阴平阳秘，精神乃治"的健康标准。《灵枢》部分更详细描述了人体经络的循行路线，为针灸学奠定了解剖和理论基础。作为中医四大经典之首，《黄帝内经》虽托名黄帝，实为战国至西汉数百年间众多医家集体智慧的结晶，其理论体系至今仍指导着中医临床实践，并对整个东亚医学传统（日本汉方医学、韩国韩医学）产生了不可估量的影响。',
    source: '《黄帝内经·素问》《灵枢》；王洪图《黄帝内经研究大成》；范行准《中国医学史略》'
  },
  {
    id: 'me02', name: '伤寒杂病论', category: '医学', era: '秦汉',
    inventor: '张仲景', year: '约公元200—210年',
    period: '秦汉',
    desc: '《伤寒杂病论》是东汉末年医学家张仲景（约150—219年）所著，被尊为"方书之祖"，张仲景本人则被后世尊为"医圣"。该书原书十六卷，后经整理分为《伤寒论》和《金匮要略》两部分流传至今。《伤寒论》以六经（太阳、阳明、少阳、太阴、少阴、厥阴）辨证体系为核心，系统论述了外感热病的发生发展规律和治疗原则；《金匮要略》则以内伤杂病为主，提出"千般疢难，不越三条"的病因三因说。张仲景在书中确立了"辨证论治"的临床诊疗方法论——根据患者的具体症状（证候）来确定治疗法则和方剂，而非简单地按病名开方。书中记载了三百余首方剂，配伍严谨、疗效确切，至今仍广泛应用于临床，被誉为"经方"。其方剂中包含了麻黄汤的发汗、承气汤的泻下、小柴胡汤的和解等治法，已初具现代药理学分类的雏形。《伤寒杂病论》的医学思想和方法论对整个东亚传统医学体系的形成起到了决定性的影响。',
    source: '张仲景《伤寒论》《金匮要略》；刘渡舟《伤寒论讲解》；甄志亚《中国医学史》'
  },
  {
    id: 'me03', name: '麻沸散', category: '医学', era: '秦汉',
    inventor: '华佗', year: '约公元2世纪末',
    period: '秦汉',
    desc: '麻沸散是东汉末年著名医学家华佗（约145—208年）发明的全身麻醉剂，被认为是有史料记载的世界最早的麻醉药物。《后汉书·华佗传》明确记载："若疾发结于内，针药所不能及者，乃令先以酒服麻沸散，既醉无所觉，因刳破腹背，抽割积聚。若在肠胃，则断截湔洗，除去疾秽，既而缝合，敷以神膏，四五日创愈，一月之间皆平复。"这段文字清楚描述了在全身麻醉下进行腹部外科手术的完整过程——包括切开、切除、缝合、术后恢复等步骤，这在当时的世界医学史上是独一无二的成就。华佗因此被尊为"外科鼻祖"。据传麻沸散的主要成分可能包括曼陀罗花、乌头等具有麻醉镇痛作用的中草药，但其确切配方已随着华佗的被害而失传。华佗还创立了"五禽戏"——一套模仿虎、鹿、熊、猿、鸟五种动物动作的导引健身术，开创了中国预防医学和康复医学的先河。',
    source: '《后汉书·华佗传》；《三国志·方技传》；陈邦贤《中国医学史》'
  },
  {
    id: 'me04', name: '针灸铜人', category: '医学', era: '宋元',
    inventor: '王惟一', year: '公元1027年',
    period: '宋元',
    desc: '针灸铜人是北宋天圣五年（公元1027年）由太医局医官王惟一（约987—1067年）主持铸造的针灸教学模型，是中国乃至世界最早的标准化医学教学用具。据《宋史》等记载，宋仁宗因当时针灸经穴图谱和文字记载存在混乱和分歧，下令王惟一统一标准。王惟一考订了人体经络穴位的准确位置和主治功能，撰成《铜人腧穴针灸图经》三卷，并据此督造了两具青铜铸造的等身人像——"天圣铜人"。铜人外表刻有全身经脉路线和各穴位名称，内部中空，体表穴位小孔以黄蜡封堵，体内注满水银（一说清水）。教学考试时，学生根据考官指定的穴位刺针，如刺中正确穴位，水银（或水）即从孔中流出，实现"针入水出"的精准考核效果。两具铜人中一具在宋金战争中遗失，另一具历经辗转后流入日本，今已不存，但后世历代均有仿制。针灸铜人的铸造不仅统一了经穴标准，极大推动了针灸学术的规范化发展，也将人体解剖学知识以三维模型的直观形式呈现出来。',
    source: '《宋史》；王惟一《铜人腧穴针灸图经》；黄龙祥《中国针灸学术史大纲》'
  },
  {
    id: 'me05', name: '本草纲目', category: '医学', era: '明清',
    inventor: '李时珍', year: '公元1578年完稿（1596年刊行）',
    period: '明清',
    desc: '《本草纲目》是明代医学家李时珍（1518—1593年）花费27年心血编著的药物学巨著，全书共五十二卷，约190万字，载药1892种（其中新增药物374种），附方11096首，药图1100余幅。李时珍为编纂此书，遍阅古籍800余种，行程万余里，亲赴深山采药验证，纠正了历代本草书中的大量错误（如将两种不同药物混为一谈、药性归类不当等）。该书在药物学上的最大创新是建立了科学严密的药物分类体系——按"物以类聚、纲举目张"的原则，将药物分为水、火、土、金石、草、谷、菜、果、木、服器、虫、鳞、介、禽、兽、人等十六部，每部下再分若干类，整个体系暗含了朴素的进化论思想（从无机物到有机物、从低等到高等）。《本草纲目》不仅是一部药物学巨著，还广泛涉及植物学、动物学、矿物学、化学、农学及物候学等多个学科领域。被达尔文誉为"中国古代的百科全书"，并被翻译成日、英、法、德、俄、拉丁等多种文字。',
    source: '李时珍《本草纲目》；唐明邦《李时珍评传》；潘吉星《李时珍与<本草纲目>》'
  },

  // ---- 四大发明（5项） ----
  {
    id: 'f01', name: '造纸术', category: '四大发明', era: '秦汉',
    inventor: '蔡伦', year: '公元105年',
    period: '秦汉',
    desc: '造纸术是中国古代最伟大的发明之一。虽然考古发现的西汉灞桥纸（公元前2世纪）、放马滩纸等实物证明早在蔡伦之前已有原始纸（主要由麻纤维制成），但蔡伦（约63—121年）的贡献在于对造纸工艺进行了根本性改良。《后汉书·蔡伦传》明确记载："伦乃造意，用树肤（树皮）、麻头、敝布、鱼网以为纸。元兴元年（105年）奏上之，帝善其能，自是莫不从用焉，故天下咸称『蔡侯纸』。"蔡伦的创新体现在三个方面：一是大幅度拓展了造纸原料来源（从单一的麻扩展到树皮、破布、旧渔网等），使纸的大规模生产成为可能；二是完善了制浆、打浆、抄纸、压榨、烘干等一系列工艺环节；三是实现了纸的质量飞跃，使纸成为方便实用的书写材料。造纸术在8世纪由唐朝战俘中的造纸工匠传入阿拉伯，随后传入欧洲，成为推动人类文明进程的关键发明。',
    source: '《后汉书·蔡伦传》；潘吉星《中国造纸史》；钱存训《中国纸和印刷文化史》'
  },
  {
    id: 'f02', name: '雕版印刷', category: '四大发明', era: '隋唐',
    inventor: '佚名（唐代工匠）', year: '约公元7—8世纪',
    period: '隋唐',
    desc: '雕版印刷术发明于隋唐之际（约7世纪），是中国最早的大批量文字复制技术，也是印刷术的源头。其工艺为：将文字反刻在平整的木板（通常为梨木或枣木）上，然后在凸起的文字表面涂墨，铺纸加压后揭下，即可得到正写的文字页面。一版可反复印刷数百至数千次。现存最早有确切纪年的雕版印刷品是敦煌莫高窟藏经洞发现的唐咸通九年（公元868年）《金刚般若波罗蜜经》卷首扉画和经文，全长约4.9米，雕工精美、墨色均匀，表明此时的雕版印刷技术已臻成熟。此前1966年韩国庆州佛国寺释迦塔发现的《无垢净光大陀罗尼经》（约704—751年）被认为是现存最早的印刷品之一。雕版印刷极大地降低了书籍的生产成本，使知识传播从抄写时代进入印刷时代，直接推动了唐代文化的繁荣和佛教经典的普及。这一技术后来传播至朝鲜、日本、越南及西方，是后续活字印刷和现代印刷技术的直接先导。',
    source: '敦煌藏经洞《金刚经》印刷本；钱存训《中国纸和印刷文化史》；张秀民《中国印刷史》'
  },
  {
    id: 'f03', name: '活字印刷', category: '四大发明', era: '宋元',
    inventor: '毕昇', year: '约1040年代',
    period: '宋元',
    desc: '活字印刷术是北宋平民发明家毕昇（约990—1051年）在雕版印刷基础上实现的划时代创新。据沈括《梦溪笔谈·技艺》记载，毕昇用胶泥（黏土）刻制单字，每个字一个印，"薄如钱唇"，以火烧令坚硬，制成泥活字。排版时，先在一铁板上铺一层松脂、蜡和纸灰的混合物，将所需活字排列其上，以火加热铁板使松脂熔化，再以平版将字面压平，待冷却后活字即牢固地固定，便可上墨印刷。印毕后再次加热铁板，即可取下活字以备下次使用。为提高效率，常用字每个刻有多枚（如"之""也"等字各有二十余印），备有两块铁板交替排版，一板印刷一板排字，大大加快了印刷速度。毕昇还试验过木活字，但发现木纹疏密不一、遇水膨胀，不如泥活字好用。活字印刷使"一字多用"成为现实，大大降低了印刷成本并提高了排版灵活性。虽然由于中文字库庞大这一客观限制，活字印刷在中国古代未能完全取代雕版印刷，但其原理是后来谷登堡铅活字印刷和现代印刷技术的先驱。',
    source: '沈括《梦溪笔谈·技艺》；钱存训《中国纸和印刷文化史》；张秀民《中国印刷史》'
  },
  {
    id: 'f04', name: '火药', category: '四大发明', era: '隋唐',
    inventor: '唐代炼丹家', year: '约公元8—9世纪',
    period: '隋唐',
    desc: '火药是唐代炼丹家（方士）在炼制"长生不老药"的过程中偶然发现的。硫磺、硝石（硝酸钾）和木炭三种物质的混合物在受热时会发生剧烈的燃烧甚至爆炸——这被视为火药的原始发明。约成书于唐代中期的《真元妙道要略》（佚名）中记载了硫磺、硝石和蜜（含碳）混合燃烧会烧伤手和房屋，并警告炼丹者注意危险，这是有关火药配方最早的文献记录。北宋庆历年间（1044年）曾公亮、丁度等编纂的《武经总要》中，系统列出了三种火药配方（"火球火药方"、"蒺藜火药方"和"毒药烟球火药方"），分别为不同用途配备了不同的硝、硫、碳比例——这是世界上最早的火药配方集。宋代将火药用于军事，发明了火箭、火炮、突火枪（初期的管形火器）等多种火器。火药向西传播的路径大致为：蒙古西征时期（13世纪）火药技术传入阿拉伯地区，再经阿拉伯传入欧洲，最终改变了世界军事格局和历史进程。',
    source: '《武经总要》；《真元妙道要略》；冯家昇《火药的发明和西传》'
  },
  {
    id: 'f05', name: '指南针', category: '四大发明', era: '春秋战国',
    inventor: '古代先民', year: '约公元前4世纪—11世纪',
    period: '春秋战国',
    desc: '指南针的发明经历了从司南到指南针的漫长发展过程。最早的相关记载见于《韩非子·有度》（公元前3世纪）："先王立司南以端朝夕。"司南是一种利用天然磁石制成的勺形指向器，放置于光滑的方形"地盘"上，勺柄指向南方。但因天然磁石磁性弱、摩擦力大，司南的指向精度和实用性有限。真正意义上的指南针出现于北宋。沈括（1031—1095年）在《梦溪笔谈》中详细记载了四种磁针装置方法：水浮法（将磁针穿于灯芯草上浮于水面）、指甲法（将磁针置于指甲上）、碗唇法（置于碗沿）和缕悬法（以单根蚕丝悬挂磁针），并指出缕悬法最为灵敏。指南针最早应用于航海导航的时间约在11—12世纪，北宋朱彧《萍洲可谈》（1119年）首次记载了海上使用指南针："舟师识地理，夜则观星，昼则观日，阴晦则观指南针。"指南针经阿拉伯传入欧洲后，直接促成了大航海时代的到来。',
    source: '沈括《梦溪笔谈》；朱彧《萍洲可谈》；王振铎《中国古代磁针的发明和航海罗经的创造》'
  },

  // ---- 其他重大发明（5项） ----
  {
    id: 'o01', name: '蚕桑丝绸', category: '其他重大发明', era: '上古至夏商周',
    inventor: '上古先民', year: '约公元前4000年',
    period: '上古至夏商周',
    desc: '丝绸是中华民族最古老、最具代表性的发明之一，是中国人驯化野蚕（Bombyx mandarina）为家蚕（Bombyx mori）、发明缫丝织绸技术的成果。考古证据链极为完整：1926年山西夏县西阴村仰韶文化遗址（约公元前3500年）出土了经人工切割过的半颗蚕茧；1958年浙江吴兴钱山漾遗址（约公元前2700年）出土了丝带、丝线和绢片，是迄今发现最早的丝织品实物；商代甲骨文中已出现"蚕""桑""丝""帛"等字，安阳殷墟出土的青铜器上常附着丝织品印痕。汉代长沙马王堆一号墓（公元前2世纪）出土的素纱禅衣，整件仅重49克，薄如蝉翼、轻若烟雾，展现了极高的丝织技术水平。中国的蚕桑丝绸技术通过丝绸之路（陆上丝绸之路约公元前2世纪开通，海上丝绸之路则为唐宋时期）传播至中亚、西亚直至欧洲，对世界纺织文明和东西方文化交流产生了极其深远的影响。',
    source: '西阴村、钱山漾等考古遗址；《诗经·豳风》；朱新予《中国丝绸史》'
  },
  {
    id: 'o02', name: '瓷器', category: '其他重大发明', era: '隋唐',
    inventor: '历代陶瓷工匠', year: '商代萌芽—唐代成熟',
    period: '隋唐',
    desc: '瓷器是中国古代的伟大发明之一，其发展经历了从商代原始青瓷（约公元前16世纪，已具备瓷石或高岭土胎、约1200℃高温烧成、表面施石灰釉三个基本瓷器特征）到东汉晚期成熟青瓷、再到隋唐白瓷和唐三彩的完整技术演进序列，各时期均存有丰富的考古实物链。隋唐时期瓷器制造技术达到第一座高峰：以越窑青瓷和邢窑白瓷为代表的"南青北白"格局形成，胎质坚致、釉色莹润。唐代瓷器开始大量外销（所谓"海上陶瓷之路"），成为继丝绸之后最重要的对外贸易商品之一，以至于在英语中"china"一词既指"瓷器"又指"中国"。宋代是瓷器发展的巅峰时期，出现了汝、官、哥、钧、定五大名窑，各具独特釉色与风格。元代景德镇烧制出成熟的青花瓷，以钴料在白瓷胎上绘制蓝色纹饰，成为后来享誉世界的瓷器品类。瓷器的烧制涉及原料配比（高岭土—瓷石二元配方）、窑炉结构（龙窑→馒头窑→镇窑）和高温控制（1200—1300℃）等关键技术创新。',
    source: '中国硅酸盐学会《中国陶瓷史》；考古出土实物序列；李家治《中国科学技术史·陶瓷卷》'
  },
  {
    id: 'o03', name: '机械钟（擒纵装置）', category: '其他重大发明', era: '隋唐',
    inventor: '一行、梁令瓒', year: '约公元725年',
    period: '隋唐',
    desc: '唐代开元年间，著名天文学家、僧人一行（683—727年）与工程师梁令瓒合作制造了"水运浑天俯视图"（又称开元水运浑天仪），这是一台以水力驱动的天文钟。据《旧唐书·天文志》记载，该仪器的主体为一个铜制浑仪，利用漏壶流水的动力，通过齿轮传动系统驱动浑仪与天球同步旋转。仪器旁设有两个木人，每到一刻一个木人自动击鼓报时，每到一辰另一个木人自动撞钟报时——这是世界上最早的机械报时装置之一。该装置的核心技术在于包含了某种形式的"擒纵机构"（escapement）雏形，用以将水流的持续能量转换为间歇性的运动输出，这也是现代机械钟表的关键技术。一行在此前的天文工作中还主持了世界上第一次子午线弧长的实地测量（通过测量同一经线上不同纬度点的日影长短差异计算地球大小）。一行和梁令瓒的机械钟设计思想被宋代苏颂的水运仪象台所继承和发展。',
    source: '《旧唐书·天文志》；李约瑟《中国科学技术史》第四卷；陈久金《中国古代天文学家》'
  },
  {
    id: 'o04', name: '水转连磨', category: '其他重大发明', era: '宋元',
    inventor: '佚名（元代工匠）', year: '约公元13—14世纪',
    period: '宋元',
    desc: '水转连磨是元代在传统水力机械基础上发展出的高效粮食加工机械，是水力综合利用技术的重大创新。据元代王祯《农书》（1313年）记载与图示，水转连磨利用水流冲击一个大型水轮，通过齿轮传动系统将一个水轮的动力同时传递给多个石磨（通常为九磨或更多），实现"一水轮带多磨"的高效作业模式。磨盘直径可达三至四尺，一昼夜可加工谷物数十石。水转连磨还可通过更换传动齿轮，将动力从磨盘切换至砻（去稻壳）、碓（舂米）等其他加工工具，甚至可用于鼓风冶铁，实现一机多用。此外，连磨系统还包括筛选、分级的配套装置，形成了一条连续化、自动化的粮食加工流水线——这实质上是最早的机械化生产线之一。水转连磨代表了中国传统水力机械发展的最高水平，其"一动力源驱动多台工作机"的设计理念与近代工厂的传动系统在原理上是相通的。',
    source: '王祯《农书》；陆敬严《中国古代机械文明史》；张柏春《中国机械工程发明史》'
  },
  {
    id: 'o05', name: '郑和宝船', category: '其他重大发明', era: '明清',
    inventor: '明代造船工匠', year: '约公元1405年',
    period: '明清',
    desc: '郑和宝船是明代永乐年间（1405—1433年）郑和七下西洋时所乘船队中的旗舰，代表了中国古代木帆船制造技术的最高峰。据《明史·郑和传》记载，郑和首次下西洋"将士卒二万七千八百余人，多赍金币。造大舶，修四十四丈（约136米）、广十八丈（约56米），舶六十二。"若此记载属实，则宝船排水量可能超过万吨，是当时世界上最大的远洋木帆船（作为对比，哥伦布1492年横渡大西洋时的旗舰"圣玛利亚"号仅约30米长）。宝船采用了多项先进的造船技术：使用多层船底板增强了船体强度和水密性；水密隔舱技术（将船舱分隔为多个互不透水的独立舱室）在一两处破损时仍能保持不沉——这一技术在元代马可·波罗的游记中便有记载；采用可升降的平衡舵以提高不同水深下的操控性；使用多桅多帆（多达九桅十二帆）的帆装系统以充分利用风力。郑和船队七次远航，最远达非洲东海岸（今肯尼亚、索马里一带），开创了世界航海史上规模最大、时间最早的大洋航行。',
    source: '《明史·郑和传》；《瀛涯胜览》；席龙飞《中国造船史》'
  }
];

// ===== 朝代/时期数据 =====
const eraData = [
  { id: '上古至夏商周', label: '上古至\n夏商周', date: '约前2000—前256' },
  { id: '春秋战国', label: '春秋战国', date: '前770—前221' },
  { id: '秦汉', label: '秦汉', date: '前221—220' },
  { id: '三国两晋南北朝', label: '三国两晋\n南北朝', date: '220—589' },
  { id: '隋唐', label: '隋唐', date: '581—907' },
  { id: '宋元', label: '宋元', date: '960—1368' },
  { id: '明清', label: '明清', date: '1368—1912' }
];

// ===== 全局状态 =====
let activeCategory = '全部';
let activeEra = null; // null = 不限朝代
let searchQuery = '';

// ===== DOM 元素引用 =====
const cardsGrid = document.getElementById('cardsGrid');
const timelineTrack = document.getElementById('timelineTrack');
const modalOverlay = document.getElementById('modalOverlay');
const modalInner = document.getElementById('modalInner');
const modalClose = document.getElementById('modalClose');
const modalContent = document.getElementById('modalContent');
const backTopBtn = document.getElementById('backTop');
const filterNav = document.getElementById('filterNav');
const filterBtns = document.querySelectorAll('.filter-btn');
const searchInput = document.getElementById('searchInput');
const searchClear = document.getElementById('searchClear');
const searchResultHint = document.getElementById('searchResultHint');
const threeContainer = document.getElementById('three-container');
const heroSeal = document.getElementById('heroSeal');

// ===== 滚动提示点击 → 平滑滚动到内容区 =====
function initScrollHint() {
  const scrollHint = document.querySelector('.scroll-hint');
  if (scrollHint) {
    scrollHint.style.cursor = 'pointer';
    scrollHint.addEventListener('click', () => {
      document.querySelector('#timelinePage').scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  }
}

// ===== 朝代弹窗：列出该时期发明 =====
function openEraModal(eraId) {
  const era = eraData.find(e => e.id === eraId);
  if (!era) return;
  const items = techData.filter(item => item.period === eraId);
  const listItems = items.length > 0
    ? items.map(item => `<li>📌 <strong>${item.name}</strong> <span class="era-item-cat">[${item.category}]</span></li>`).join('')
    : '<li style="color:var(--ink-mid);">该时期暂无收录的科技成就</li>';

  modalInner.innerHTML = `
    <span class="modal-category">📜 朝代纵览</span>
    <h2>${era.label.replace(/\n/g, '')}</h2>
    <p class="modal-era">📅 ${era.date}</p>
    <p class="modal-inventor">📊 共收录 <strong>${items.length}</strong> 项科技成就</p>
    <ul class="era-invention-list">${listItems}</ul>
    <p style="margin-top:16px;font-size:0.85rem;color:var(--ink-mid);">💡 点击下方卡片可查看每项发明的详细介绍</p>
  `;
  modalOverlay.classList.add('active');
  document.body.style.overflow = 'hidden';
}

// ===== 构建蛇形时间轴 =====
function buildTimeline() {
  timelineTrack.innerHTML = '';
  eraData.forEach((era, index) => {
    // 获取该朝代的前5项发明作为预览
    const eraInventions = techData
      .filter(item => item.period === era.id)
      .slice(0, 5);

    const item = document.createElement('div');
    item.className = 'tl-era-item';
    item.dataset.era = era.id;
    item.innerHTML = `
      <div class="tl-node"></div>
      <div class="tl-connector"></div>
      <div class="tl-era-label">${era.label.replace(/\n/g, '')}</div>
      <div class="tl-content-box">
        <h3>${era.label.replace(/\n/g, '')}</h3>
        <div class="tl-era-date">📅 ${era.date}</div>
        <div class="tl-count">📊 共 ${eraInventions.length} 项突出发明</div>
        <ul class="tl-inventions">
          ${eraInventions.map(inv => `<li>${inv.name}</li>`).join('')}
        </ul>
      </div>
    `;

    // 点击整个区块切换筛选
    item.addEventListener('click', (e) => {
      // 防止点击内容框内的标签也触发
      if (activeEra === era.id) {
        activeEra = null;
      } else {
        activeEra = era.id;
      }
      updateTimelineActive();
      renderCards();
      if (activeEra !== null) {
        openEraModal(activeEra);
      }
      // 滚动到卡片区
      //document.querySelector('#cardsGrid').scrollIntoView({ behavior: 'smooth', block: 'start' });
    });

    timelineTrack.appendChild(item);
  });

  // IntersectionObserver：滚动进入视口时触发淡入动画
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('tl-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  document.querySelectorAll('.tl-era-item').forEach(el => observer.observe(el));
}

function updateTimelineActive() {
  document.querySelectorAll('.tl-era-item').forEach(node => {
    if (activeEra === node.dataset.era) {
      node.classList.add('active');
    } else {
      node.classList.remove('active');
    }
  });
}

// ===== 构建卡片 =====
function renderCards() {
  // 先筛选
  const filtered = filterData();
  const currentCards = Array.from(cardsGrid.children);

  // 获取应该显示的卡片ID集合
  const visibleIds = new Set(filtered.map(item => item.id));

  // 获取当前已存在的卡片
  const existingIds = new Set();
  currentCards.forEach(card => {
    existingIds.add(card.dataset.id);
  });

  // 隐藏不需要的卡片
  currentCards.forEach(card => {
    if (!visibleIds.has(card.dataset.id)) {
      card.classList.add('card-hide');
      card.addEventListener('animationend', function handler() {
        card.removeEventListener('animationend', handler);
        if (card.parentNode) card.remove();
      }, { once: true });
    }
  });

  // 添加新的卡片（如果还没在DOM中）
  filtered.forEach((item, index) => {
    if (!existingIds.has(item.id)) {
      const card = createCardElement(item, index);
      // 如果卡片还没插入，插入它
      const existingCard = cardsGrid.querySelector(`[data-id="${item.id}"]`);
      if (!existingCard) {
        cardsGrid.appendChild(card);
        // 触发进入动画
        requestAnimationFrame(() => {
          card.classList.add('card-show');
        });
      }
    }
  });
}

function filterData() {
  let result = techData;

  // 文本搜索（名称、分类、发明者、朝代、描述）
  if (searchQuery.trim() !== '') {
    const q = searchQuery.trim().toLowerCase();
    result = result.filter(item =>
      item.name.toLowerCase().includes(q) ||
      item.category.toLowerCase().includes(q) ||
      item.inventor.toLowerCase().includes(q) ||
      item.period.toLowerCase().includes(q) ||
      item.era.toLowerCase().includes(q) ||
      item.desc.toLowerCase().includes(q)
    );
  }

  // 先按分类筛选
  if (activeCategory !== '全部') {
    result = result.filter(item => item.category === activeCategory);
  }

  // 再按朝代筛选
  if (activeEra !== null) {
    result = result.filter(item => item.period === activeEra);
  }

  return result;
}

function createCardElement(item, index) {
  const card = document.createElement('div');
  card.className = 'tech-card';
  card.dataset.id = item.id;
  card.dataset.category = item.category;
  card.style.animationDelay = `${index * 0.05}s`;

  card.innerHTML = `
    <span class="card-category">${item.category}</span>
    <h3 class="card-name">${item.name}</h3>
    <p class="card-era">📅 ${item.period} · ${item.year}</p>
    <p class="card-inventor">👤 ${item.inventor}</p>
    <p class="card-desc-preview">${item.desc.substring(0, 100)}……</p>
    <span class="card-more">点击查看详情 →</span>
  `;

  card.addEventListener('click', (e) => {
    openDetail(item);
    // 墨点粒子飞溅效果
    createInkSplash(e.clientX, e.clientY);
  });

  return card;
}

function renderAllCards() {
  cardsGrid.innerHTML = '';
  const filtered = filterData();
  filtered.forEach((item, index) => {
    const card = createCardElement(item, index);
    cardsGrid.appendChild(card);
    // 触发入场动画
    requestAnimationFrame(() => {
      card.classList.add('card-show');
    });
  });
}

// ===== 弹窗 =====
function openDetail(item) {
  modalInner.innerHTML = `
    <span class="modal-category">${item.category}</span>
    <h2>${item.name}</h2>
    <p class="modal-era">📅 ${item.period} · ${item.year}</p>
    <p class="modal-inventor">👤 ${item.inventor}</p>
    <div class="modal-desc">${item.desc}</div>
    <div class="modal-source">📚 史料来源：${item.source}</div>
  `;
  modalOverlay.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  modalOverlay.classList.remove('active');
  document.body.style.overflow = '';
}

modalClose.addEventListener('click', closeModal);
modalOverlay.addEventListener('click', (e) => {
  if (e.target === modalOverlay) {
    closeModal();
  }
});

// ESC 关闭弹窗
document.addEventListener('keydown', (e) => {
  // ESC 键处理
  if (e.key === 'Escape') {
    // 优先：搜索框聚焦时清空搜索
    if (document.activeElement === searchInput) {
      searchInput.value = '';
      searchQuery = '';
      updateSearchUI();
      renderAllCards();
      searchInput.blur();
      return;
    }
    // 其次：关闭弹窗
    closeModal();
  }

  // 左右方向键切换分类筛选（弹窗打开时不可用）
  if (!modalOverlay.classList.contains('active') && document.activeElement !== searchInput) {
    const categories = ['全部', '天文学', '数学', '农业与水利', '医学', '四大发明', '其他重大发明'];
    const currentIndex = categories.indexOf(activeCategory);
    if (e.key === 'ArrowRight' && currentIndex < categories.length - 1) {
      setCategory(categories[currentIndex + 1]);
    } else if (e.key === 'ArrowLeft' && currentIndex > 0) {
      setCategory(categories[currentIndex - 1]);
    }
  }

  // Ctrl+K 或 / 快速聚焦搜索框（不在输入框或弹窗中时）
  if (e.target.tagName !== 'INPUT' && e.target.tagName !== 'TEXTAREA' && !modalOverlay.classList.contains('active')) {
    if ((e.ctrlKey && e.key === 'k') || e.key === '/') {
      e.preventDefault();
      searchInput.focus();
      searchInput.select();
    }
  }
});

// ===== 分类筛选 =====
function setCategory(category) {
  activeCategory = category;
  activeEra = null;
  searchQuery = '';
  searchInput.value = '';
  updateSearchUI();
  updateTimelineActive();
  updateFilterButtons();
  renderAllCards();
  // 滚动到卡片区域
  document.querySelector('.cards-section').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const category = btn.dataset.category;
    setCategory(category);
  });
});

function updateFilterButtons() {
  filterBtns.forEach(btn => {
    if (btn.dataset.category === activeCategory) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });
}

// ===== 墨点粒子飞溅 =====
function createInkSplash(x, y) {
  const container = document.createElement('div');
  container.className = 'ink-splash';
  container.style.left = x + 'px';
  container.style.top = y + 'px';

  const count = 12;
  for (let i = 0; i < count; i++) {
    const particle = document.createElement('div');
    particle.className = 'ink-particle';
    const angle = (Math.PI * 2 * i) / count + (Math.random() - 0.5) * 0.5;
    const distance = 20 + Math.random() * 40;
    particle.style.setProperty('--dx', Math.cos(angle) * distance + 'px');
    particle.style.setProperty('--dy', Math.sin(angle) * distance + 'px');
    particle.style.animationDuration = (0.5 + Math.random() * 0.5) + 's';
    // 随机颜色：墨色、朱砂、金色
    const colors = ['#1a1a1a', '#b22222', '#c9a96e'];
    particle.style.background = colors[Math.floor(Math.random() * colors.length)];
    container.appendChild(particle);
  }

  document.body.appendChild(container);
  setTimeout(() => container.remove(), 1000);
}

// ===== 返回顶部 =====
function handleBackTopVisibility() {
  if (window.scrollY > 500) {
    backTopBtn.classList.add('visible');
  } else {
    backTopBtn.classList.remove('visible');
  }
}

backTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ===== 视差滚动效果 =====
function handleParallax() {
  const scrollY = window.scrollY;
  const hero = document.querySelector('.hero-content');
  if (hero) {
    hero.style.transform = `translateY(${scrollY * 0.2}px)`;
    hero.style.opacity = Math.max(0, 1 - scrollY / 600);
  }
}

// ===== 筛选导航 sticky 效果 =====
function handleStickyNav() {
  const stickyHeader = document.querySelector('.sticky-header');
  if (!stickyHeader) return;
  if (window.scrollY > 100) {
    stickyHeader.classList.add('sticky-active');
  } else {
    stickyHeader.classList.remove('sticky-active');
  }
}

// ===== 全局滚动处理 =====
window.addEventListener('scroll', () => {
  handleBackTopVisibility();
  handleParallax();
  handleStickyNav();
});

// ===== Three.js 3D 场景 =====
function initThreeJS() {
  if (typeof THREE === 'undefined') {
    // 优雅降级：隐藏3D容器
    threeContainer.style.display = 'none';
    console.log('Three.js 未加载，3D背景已禁用');
    return;
  }

  try {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 8;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    threeContainer.appendChild(renderer.domElement);

    // ===== 星空粒子（300个） =====
    const starsGeometry = new THREE.BufferGeometry();
    const starCount = 300;
    const positions = new Float32Array(starCount * 3);
    const colors = new Float32Array(starCount * 3);

    const colorPalette = [
      new THREE.Color('#c9a96e'), // 金色
      new THREE.Color('#e8d5b0'), // 银白
      new THREE.Color('#b22222'), // 朱砂红
      new THREE.Color('#f5f0e6'), // 宣纸米
    ];

    for (let i = 0; i < starCount; i++) {
      // 球形分布
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const radius = 4 + Math.random() * 5;
      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = radius * Math.cos(phi);

      const color = colorPalette[Math.floor(Math.random() * colorPalette.length)];
      colors[i * 3] = color.r;
      colors[i * 3 + 1] = color.g;
      colors[i * 3 + 2] = color.b;
    }

    starsGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    starsGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const starsMaterial = new THREE.PointsMaterial({
      size: 0.04,
      vertexColors: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      transparent: true,
      opacity: 0.8,
    });

    const stars = new THREE.Points(starsGeometry, starsMaterial);
    scene.add(stars);

    // ===== 二十八宿连线（模拟） =====
    const xiuGroup = new THREE.Group();
    const xiuCount = 28;
    const xiuPoints = [];
    for (let i = 0; i < xiuCount; i++) {
      const angle = (i / xiuCount) * Math.PI * 2;
      const r = 3.5 + Math.sin(i * 2.3) * 0.8;
      const x = Math.cos(angle) * r;
      const y = Math.sin(angle) * r * 0.6;
      const z = Math.cos(i * 0.5) * 0.6;
      xiuPoints.push(new THREE.Vector3(x, y, z));
    }
    // 闭合回路
    xiuPoints.push(xiuPoints[0].clone());

    const xiuLineGeometry = new THREE.BufferGeometry().setFromPoints(xiuPoints);
    const xiuLineMaterial = new THREE.LineBasicMaterial({
      color: 0xc9a96e,
      opacity: 0.25,
      transparent: true,
    });
    const xiuLine = new THREE.Line(xiuLineGeometry, xiuLineMaterial);
    xiuGroup.add(xiuLine);

    // 宿点（小球体）
    for (let i = 0; i < xiuCount; i++) {
      const dotGeo = new THREE.SphereGeometry(0.04, 8, 8);
      const dotMat = new THREE.MeshBasicMaterial({ color: 0xc9a96e });
      const dot = new THREE.Mesh(dotGeo, dotMat);
      dot.position.copy(xiuPoints[i]);
      xiuGroup.add(dot);
    }

    scene.add(xiuGroup);

    // ===== 旋转环（仿浑天仪） =====
    const ringGroup = new THREE.Group();

    function createRing(radius, color, opacity, rotation) {
      const geometry = new THREE.TorusGeometry(radius, 0.015, 16, 100);
      const material = new THREE.MeshBasicMaterial({ color, opacity, transparent: true });
      const ring = new THREE.Mesh(geometry, material);
      ring.rotation.set(rotation.x || 0, rotation.y || 0, rotation.z || 0);
      return ring;
    }

    // 三个主要环
    const ring1 = createRing(3.2, 0xc9a96e, 0.3, { x: 0, y: 0, z: 0 });
    const ring2 = createRing(3.0, 0xb22222, 0.2, { x: Math.PI * 0.35, y: 0, z: 0 });
    const ring3 = createRing(2.8, 0xc9a96e, 0.22, { x: Math.PI * 0.55, y: Math.PI * 0.25, z: 0 });
    const ring4 = createRing(2.6, 0xb22222, 0.18, { x: Math.PI * 0.2, y: Math.PI * 0.5, z: Math.PI * 0.1 });

    ringGroup.add(ring1, ring2, ring3, ring4);
    scene.add(ringGroup);

    // ===== 中心金色球体 =====
    const centerSphereGeo = new THREE.SphereGeometry(0.4, 32, 32);
    const centerSphereMat = new THREE.MeshBasicMaterial({
      color: 0xc9a96e,
      transparent: true,
      opacity: 0.7,
    });
    const centerSphere = new THREE.Mesh(centerSphereGeo, centerSphereMat);
    scene.add(centerSphere);

    // 球体光晕
    const glowGeo = new THREE.SphereGeometry(0.55, 32, 32);
    const glowMat = new THREE.MeshBasicMaterial({
      color: 0xc9a96e,
      transparent: true,
      opacity: 0.15,
    });
    const glow = new THREE.Mesh(glowGeo, glowMat);
    scene.add(glow);

    // ===== 动画循环 =====
    function animate() {
      requestAnimationFrame(animate);

      // 整体缓慢旋转
      const time = Date.now() * 0.0001;

      stars.rotation.x += 0.0002;
      stars.rotation.y += 0.0003;
      stars.rotation.z += 0.0001;

      xiuGroup.rotation.x = Math.sin(time * 0.7) * 0.05;
      xiuGroup.rotation.y += 0.0004;
      xiuGroup.rotation.z += 0.0002;

      ringGroup.rotation.x += 0.0003;
      ringGroup.rotation.y += 0.0005;
      ringGroup.rotation.z += 0.0002;

      centerSphere.rotation.y += 0.002;
      glow.rotation.y += 0.001;
      glow.scale.setScalar(1 + Math.sin(time * 3) * 0.08);

      renderer.render(scene, camera);
    }

    animate();

    // 首帧渲染完成后，触发渐入动画
    requestAnimationFrame(() => {
      threeContainer.classList.add('three-ready');
    });

    // ===== 响应窗口大小变化 =====
    window.addEventListener('resize', () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    });

    console.log('Three.js 3D场景初始化完成');
  } catch (e) {
    console.error('Three.js 初始化失败：', e);
    threeContainer.style.display = 'none';
  }
}

// ===== 页面一打开即启动3D背景（不等DOMContentLoaded） =====
(function startThreeJSImmediately() {
  let started = false;
  function tryStart() {
    if (started) return;
    const container = document.getElementById('three-container');
    if (container) {
      started = true;
      initThreeJS();
    } else {
      // DOM还没就绪，下一帧再试
      requestAnimationFrame(tryStart);
    }
  }
  // 如果THREE还在异步加载中，也轮询等待
  if (typeof THREE === 'undefined') {
    const checkThree = setInterval(() => {
      if (typeof THREE !== 'undefined') {
        clearInterval(checkThree);
        tryStart();
      }
    }, 50);
    // 最多等5秒
    setTimeout(() => { clearInterval(checkThree); tryStart(); }, 5000);
  } else {
    tryStart();
  }
})();

// ===== 印章点击动画重播 =====
if (heroSeal) {
  heroSeal.addEventListener('click', () => {
    heroSeal.style.animation = 'none';
    heroSeal.offsetHeight; // 触发回流
    heroSeal.style.animation = 'sealStamp 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) both';
  });
}

// ===== 全局卡片点击（墨点飞溅） =====
document.addEventListener('click', (e) => {
  const card = e.target.closest('.tech-card');
  if (!card) return;
  // 墨点飞溅在 createCardElement 中已绑定
});

// ===== 移除加载指示器 =====
function removeLoadingIndicator() {
  const loading = document.querySelector('.cards-loading');
  if (loading) loading.remove();
}

// ===== 滚轮下滑：首次滚动直接跳到内容区 =====
(function initWheelScroll() {
  let scrolled = false;
  window.addEventListener('wheel', function handler(e) {
    if (scrolled) return;
    if (e.deltaY > 0) {
      scrolled = true;
      e.preventDefault();
      const target = document.querySelector('#timelinePage');
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  }, { passive: false });
})();

// ===== 搜索功能 =====
function updateSearchUI() {
  // 清除按钮可见性
  if (searchQuery.trim() !== '') {
    searchClear.classList.add('visible');
  } else {
    searchClear.classList.remove('visible');
  }

  // 结果提示
  const filtered = filterData();
  if (searchQuery.trim() !== '') {
    searchResultHint.textContent = `找到 ${filtered.length} 项匹配发明`;
    searchResultHint.classList.add('visible');
  } else {
    searchResultHint.textContent = '';
    searchResultHint.classList.remove('visible');
  }
}

function handleSearch() {
  searchQuery = searchInput.value;
  updateSearchUI();
  renderAllCards();
  // 自动滚动到卡片区，避免吸顶栏遮挡
  document.querySelector('.cards-section').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// 搜索输入事件（实时筛选）
searchInput.addEventListener('input', handleSearch);

// 清除按钮
searchClear.addEventListener('click', () => {
  searchInput.value = '';
  searchQuery = '';
  updateSearchUI();
  renderAllCards();
  searchInput.focus();
});

// ===== 初始化 =====
function init() {
  buildTimeline();
  renderAllCards();
  removeLoadingIndicator();
  updateFilterButtons();
  updateSearchUI();
  initScrollHint();
  handleBackTopVisibility();
}

// ===== DOM 就绪后初始化 =====
document.addEventListener('DOMContentLoaded', init);
