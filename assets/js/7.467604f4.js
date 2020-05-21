(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{383:function(t,s,a){t.exports=a.p+"assets/img/morse.0af57b5d.png"},384:function(t,s,a){t.exports=a.p+"assets/img/baudot_code.401c3861.jpg"},385:function(t,s,a){t.exports=a.p+"assets/img/baudot_presskey.9e0d5f46.jpg"},386:function(t,s,a){t.exports=a.p+"assets/img/typewriter2.e00b4bcf.png"},387:function(t,s,a){t.exports=a.p+"assets/img/UtfCharsetList.9b03794f.png"},522:function(t,s,a){"use strict";a.r(s);var n=a(4),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("blockquote",[n("p",[t._v("这段时间，在github上贡献了一个读取媒体头文件的JS项目，此作者的repos中有很多关于字符编码的库，而且作者很给力，有任何不\n懂的问题和想要了解的东西可以给他发issue，热爱讨论，然后我以一个学习者的身份，把关于编码的一些repo fork了下来，顺便和最近正\n在读的《隐匿在计算机后的编码》串起来总结一下。")])]),t._v(" "),n("br"),t._v(" "),n("h2",{attrs:{id:"计算机的基础编码结构"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#计算机的基础编码结构"}},[t._v("#")]),t._v(" 计算机的基础编码结构")]),t._v(" "),n("br"),t._v(" "),n("h3",{attrs:{id:"集成电路-数据的最小单元"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#集成电路-数据的最小单元"}},[t._v("#")]),t._v(" 集成电路-数据的最小单元")]),t._v(" "),n("hr"),t._v(" "),n("p",[t._v("计算机说白了就是一个"),n("code",[t._v("集成电路(integrated circuit)")]),t._v("，电路可以形成逻辑，"),n("code",[t._v("逻辑")]),t._v("作为形式上的计算机最小运算单元，我们通常把它称作为布尔值。布尔值慕名思意来源于布尔代数，它是数学家布尔发明了用数学表达逻辑的运算方式😂，\n发明了很多年之后，布尔代数才与电路相互结合，然后出现我们现在比较熟悉的"),n("code",[t._v("逻辑门")]),t._v("，"),n("code",[t._v("触发器")]),t._v("，"),n("code",[t._v("晶体管")]),t._v(", "),n("code",[t._v("加法器")]),t._v(", "),n("code",[t._v("继电器")]),t._v("。\n其实继电器是比计算机出现的早得多，早在电报时期它就被发明出来，主要的目的是"),n("code",[t._v("刷新")]),t._v("电压提高电流以传输得更远，\n但是后来继电器不仅仅是"),n("code",[t._v("继电")]),t._v("那么简单，玩法开始越来越多，这个后期会提一下。\n以上只是随便说了点历史和硬件，这里只需了解电路和二进制和逻辑的关系，逻辑最小可解构为两个部分，分别为1,0，也就是是或者否，二进制表示为0或者1，\n它们完全符合电路的打开和闭合的规则。所以任何事情在计算机中，都无非是电路的闭合或开关组成的。")]),t._v(" "),n("h3",{attrs:{id:"二进制-binary"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#二进制-binary"}},[t._v("#")]),t._v(" 二进制(Binary)")]),t._v(" "),n("p",[t._v("通过上面，我们知道二进制只是符合计算机运算规律的进制数，\n就好比我们人类擅长使用10进制来计算一样，我们在代码中一般都会使用10进制数字进行运行，甚至是8进制，16进制等等各类表示方法，\n总之怎么方便计算，方便表示，我们就用几进制，但是总归该是要转换成2进制给计算机的，这也就是我们编译器做的事情，对于运行时语言，\n则又多了一层"),n("code",[t._v("宿主语言")]),t._v("也就是母语言，就比如c++于js。")]),t._v(" "),n("h2",{attrs:{id:"莫尔斯电码-morse-code"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#莫尔斯电码-morse-code"}},[t._v("#")]),t._v(" 莫尔斯电码(Morse code)")]),t._v(" "),n("p",[t._v("Morse电码是"),n("code",[t._v("莫尔斯")]),t._v("于"),n("code",[t._v("1837")]),t._v("年(电子计算机未出现，还处于电报时期)发明的, 它是早期的数字化通信的一种形式，使用电流的"),n("code",[t._v("闭合")]),t._v(","),n("code",[t._v("断开")]),t._v(","),n("code",[t._v("长短")]),t._v("的方式帮助人们走上了"),n("strong",[t._v("电子")]),t._v("通讯时代。")]),t._v(" "),n("p",[t._v("它有四种信号，分别是，"),n("code",[t._v("短信号")]),t._v("，"),n("code",[t._v("长信号")]),t._v(", "),n("code",[t._v("短停顿")]),t._v(", "),n("code",[t._v("长停顿")]),t._v("，基于这四种状态，可以扩展很多"),n("code",[t._v("表现形式")]),t._v("，比如，"),n("code",[t._v("字形")]),t._v("(盲人也可以用)，\n"),n("code",[t._v("灯光")]),t._v("(军队使用手电筒交换暗号)，"),n("code",[t._v("声音")]),t._v("(最原始的使用方式，比如电报机)。所以，它可以让人们从听觉，视觉，触觉上非常方便的传递信息。")]),t._v(" "),n("p",{staticClass:"text-center"},[n("img",{attrs:{src:a(383),width:"400"}})]),t._v(" "),n("p",[t._v("上图是图形化的莫尔斯码编码集，它的外形很好辨认，比如现在我们如果发一个求救信号(国际求救信号为："),n("code",[t._v("SOS")]),t._v("),\n就可以把"),n("code",[t._v("Morse电码")]),t._v("带入，书写方式为 "),n("code",[t._v("...---...")]),t._v(", 三点表示S，三个破折号表示O，合起来就是SOS。")]),t._v(" "),n("p",[t._v("如果声音表示的话，就是三短三长三短, 电流声大概是，"),n("code",[t._v("哒哒哒 | 嘀嘀嘀 | 哒哒哒")]),t._v("。灯光的话也是如此，如手电，三短三长三短(开关灯)。\n每个字符之间的信号是短停顿，如果过了一个字符就是长停顿，以上的哒哒和嘀嘀每个字之间的停顿就属于短停顿，但每组之间属于长停顿。")]),t._v(" "),n("p",[t._v("所以这也就是为什么抗日剧里的电报员为什么戴个耳机🎧，拿个笔头✏️在那点点，点完之后还得译码("),n("strong",[t._v("早期的中国电报系统不使用Morse电码集，是有自己的编码集，\n但是还是这四个信号的基础形式是不变的")]),t._v(")。")]),t._v(" "),n("p",[t._v("从此，基于电流传输信息的电子时代来临，注：如果想使用莫尔斯编码的可以在"),n("a",{attrs:{href:"https://morsecode.world/international/translator.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("这个"),n("OutboundLink")],1),t._v("地址上试试。")]),t._v(" "),n("h2",{attrs:{id:"博多电码-baudot-code"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#博多电码-baudot-code"}},[t._v("#")]),t._v(" 博多电码(Baudot code)")]),t._v(" "),n("p",[t._v("莫尔斯电码虽然有4个状态，但我们基础操作就只需要"),n("strong",[t._v("一个键来开启和闭合电流就可以发送一段段电码")]),t._v("，这也是它不易使用的一个主要原因。\n因为"),n("code",[t._v("输入键")]),t._v("太少，增加了译码和编码的难度。"),n("code",[t._v("博多电码")]),t._v("正是弥补了这一缺陷，把它扩充到了个5个键，那么这样一来，就有32个状态了(5的二次方)。")]),t._v(" "),n("p",[t._v("但对于26个英文字母和0-9数字还有一些常用符号来说，其数量远远大于32个状态，这种情况"),n("code",[t._v("博多")]),t._v("并没有增加bit位，而是把它们分成了两个"),n("code",[t._v("字符集")]),t._v("，\n在每个字符集中增加一个"),n("code",[t._v("符号")]),t._v("(注意这里是符号，而不是bit，因为那个年代还没有出现电子计算机，纯机械式的计算工程增加一个bit是很复杂的)来切换两种模式，\n就好比我们现在的切换大小写模式一样。")]),t._v(" "),n("p",[n("img",{attrs:{src:a(384),alt:"clipboard.png"}})]),t._v(" "),n("p",[t._v("如上图，虽然是32个按钮，实际上我们可以通过"),n("code",[t._v("切换符号")]),t._v("(位于键盘上的一个按钮)来表示"),n("code",[t._v("64")]),t._v("(32*2)个符号，基本上能覆盖常用字母数字和符号，\n但还不能全部包括大小写字母。")]),t._v(" "),n("p",[t._v("基于"),n("code",[t._v("机械式的电报机")]),t._v("来传输信息对于人们来说过于繁琐，因为需要在线发送和接受，不能作为离线的数据段存储起来，并且在发送端，\n它只是"),n("code",[t._v("纯按钮")]),t._v("，并不是人们可识别的字体，如下图。")]),t._v(" "),n("p",{staticClass:"text-center"},[n("img",{attrs:{src:a(385),width:"400"}})]),t._v(" "),n("p",[t._v("所以"),n("code",[t._v("1899")]),t._v("年，美国人"),n("code",[t._v("Donald Murray")]),t._v("的"),n("code",[t._v("电传打字机(teleprinter)")]),t._v("诞生，什么是电传打字机呢？")]),t._v(" "),n("p",[n("img",{attrs:{src:a(386),alt:"clipboard.png"}})]),t._v(" "),n("p",[t._v("初期的电传打字机也广泛应用"),n("code",[t._v("博多电码")]),t._v("，眼尖的同学也可以看到图的左边会有"),n("code",[t._v("穿孔纸带")]),t._v("(一个数据存储方式，后来被磁带和硬盘替代)，这键盘上有A-Z字母和数字还有常用符号，\n然后接收端可以自动打印"),n("code",[t._v("穿孔纸带")]),t._v("，这要比"),n("code",[t._v("博多电报机")]),t._v("在输入上更为方便。")]),t._v(" "),n("h2",{attrs:{id:"ascii-编码"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#ascii-编码"}},[t._v("#")]),t._v(" Ascii 编码")]),t._v(" "),n("p",[t._v("时间来到了"),n("code",[t._v("1963")]),t._v("年，ASCII诞生，并发布了它的第一个版本，最初的设计也是为了强化"),n("code",[t._v("电传打字机")]),t._v("。（ASCII这里之所以叫编码而不叫电码，是因为在它诞生的年代已经完全抛弃了电报机，逐渐走向电子计算机的时代，这意味着，它可以嵌入计算机系统中，\n通过网络传输）")]),t._v(" "),n("p",[t._v("它支持大小写字母和更多的标点符号，还有为了应用在更多的设备上而生的"),n("code",[t._v("控制字符")]),t._v("(无字形)，起初范围只有0-127(7bit, 不到一个字节)，也就是128个字符，\n前32个字符是为了在早期表示一些元信息，并无实际字形，比如在打印机上，码点10代表需要换行，然后打印机会把打印纸向上抽一点，\n碰到码点2时，就说明是开头，那么就会从头开始印。")]),t._v(" "),n("p",[t._v("真正的有字形的码点是从 32 开始到 126 的(因为127是"),n("code",[t._v("删除字符")]),t._v(", 也是无字形的), 我们可以通过javascript打印看一下这些有字形的字符。")]),t._v(" "),n("div",{staticClass:"language-javascript extra-class"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" i"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("32")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<=")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("126")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n     console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"有字形"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" String"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("fromCodePoint")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("i"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" i"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<=")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("31")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n     console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"无字形"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" String"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("fromCodePoint")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("i"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\nconsole"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"无字形"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" String"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("fromCodePoint")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("127")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),n("p",[t._v("打印出来的有字形字符包含0-9,a-z,A-Z,和一些常用的字符，作为使用英文的国家，这些字符能够满足日常沟通的需求，\n但有一些专业的学科论文会包含一些数学字符和音乐符号，这在当时的应用中也是无法满足的。(就比如数学计算中除号之前是一个横线上下两个点，\n但在电子设备中中用/符号表示，这就是早期为了节省符号而做出的重用选择)")]),t._v(" "),n("p",[t._v("后来ASCII被广泛应用后，发现它表示英语还行，但是其他语言的字符就没啥用了，这时为了兼容其他语言，ASCII还尝试利用剩下的一个bit去表达更多的字符，\n即2的8次方被扩充到了256个字符，但即使这样，对于法语等西方语言来说是有可行性的，因为他们都是基于拉丁字母的语言，差异只是在个别的扩充字符上，所以多出来的\n这一个比特位可以兼容，但是亚洲区语言就不行了，光汉语就好几万个字符，之后万国码(Unicode)出现。")]),t._v(" "),n("h2",{attrs:{id:"unicode-字符集"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#unicode-字符集"}},[t._v("#")]),t._v(" Unicode 字符集")]),t._v(" "),n("hr"),t._v(" "),n("p",[t._v("好了，重头戏来了，上面介绍了19世纪和20世纪早期的编码历程，可以发现不管是莫尔斯，博多，还是ASCII，他们都是为了让人类文字信息能够在"),n("code",[t._v("电子")]),t._v("设备中传输，\n存储，所做的"),n("code",[t._v("编码")]),t._v("手段。Unicode也是为了更好的解决这个问题，但有了ASCII的前车之鉴，它并没有插手"),n("code",[t._v("编码")]),t._v("部分。")]),t._v(" "),n("p",[t._v("为什么这么说呢，大家想一下，ASCII没有被广泛流行起来的主要原因其实是它不能根据不同的语言区域划分不同的编码方式。也就是说，ASCII其实是字符集+编码的组合体。\n但Unicode玩的就是字符集，没有编码，编码交给上层去做，上层想要兼容哪个语言，你自己去选编码方法，我这里只给你们"),n("strong",[t._v("字符集")]),t._v("(可以简单理解成一个"),n("code",[t._v("映射表")]),t._v(")。")]),t._v(" "),n("p",[t._v("自11.0版本以来，Unicode已经支持了十三万多个字符，也包含了很多小语种，几乎大多数的语言全都覆盖了。")]),t._v(" "),n("p",[t._v("在电脑系统中设置字符集为Unicode时(在windows中，可以通过"),n("code",[t._v("chcp")]),t._v("命令来查看当前所使用的字符集，详情查看"),n("a",{attrs:{href:"https://www.cnblogs.com/xpws/p/3625177.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("这里"),n("OutboundLink")],1),t._v(")，\n输入的每个字母都映射到了一个码点("),n("code",[t._v("code point")]),t._v(")上，而一个码点又映射到了字形("),n("code",[t._v("glyphs")]),t._v(")，")]),t._v(" "),n("p",[t._v("关于字形与"),n("code",[t._v("码点")]),t._v("的对应关系，可以参考"),n("a",{attrs:{href:"https://unicodemap.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Unicdeo官方文档"),n("OutboundLink")],1),t._v("，这里不过多赘述关于字形的事情，只需了解每个字形(glyph)都对应一个"),n("code",[t._v("码点")]),t._v("，这就是Unicode做的事情。")]),t._v(" "),n("p",[n("code",[t._v("码点")]),t._v("的设计也很好理解，它是纯数字(通常为了简洁，都使用16进制表示)，从0开始递增，分别表示各个国家的各种语言字符，大致分两个部分，一个是"),n("code",[t._v("无字形")]),t._v("编码主要用于格式的处理和一些在特定系统和编码下的功能键，\n它被分为"),n("code",[t._v("c0")]),t._v("和"),n("code",[t._v("c1")]),t._v("两个部分，比如换行的"),n("code",[t._v("码点(code point)")]),t._v("就是"),n("code",[t._v("10")]),t._v("，属于c0部分，另一个部分属于"),n("code",[t._v("有字形")]),t._v("部分。")]),t._v(" "),n("br"),t._v(" "),n("h3",{attrs:{id:"字符编码"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#字符编码"}},[t._v("#")]),t._v(" 字符编码")]),t._v(" "),n("hr"),t._v(" "),n("p",[t._v("Unicode只是提供了一个映射表(Map table)，")]),t._v(" "),n("p",[t._v("我现在想打印四个字："),n("code",[t._v("我喜欢你")]),t._v("，我们使用打字机输入四个字符，然后打字机通过使用Unicode的Map把他们转换成字符序列。")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("11000100,0010001 // 我\n10101011,0011100 // 喜\n11010110,0100010 // 欢\n10011110,1100000 // 你\n")])])]),n("p",[t._v("假如我们没有任何修饰符，我们将这些二进制"),n("code",[t._v("序列")]),t._v("合起来就是通过unicode转换出来的这四个字。")]),t._v(" "),n("p",[t._v("但把它们放在一起，会出现一个问题。比如，我们把"),n("code",[t._v("我")]),t._v("字序列中的第一个字节拿出来，同样也是一个字符。")]),t._v(" "),n("div",{staticClass:"language-javascript extra-class"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[t._v("String"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("fromCodePoint")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("parseInt")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"11000100"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// "Ä" (德语字母)')]),t._v("\n")])])]),n("p",[t._v("所以，"),n("strong",[t._v("计算机不知道到底多少个字节才是一个字符，一定要有一个上层规范再包装一下Unicode的这个映射表，计算机才能更清晰正确的组合这些字节")]),t._v("。\n我们比较常用的 UTF系列和GBK，windows UCS等等很多编码，它们其实都是处理的这部分事情，最大不同点是"),n("code",[t._v("它们的算法(组合序列映射为字符)不一样，支持的字符也不相同")]),t._v("。")]),t._v(" "),n("p",[t._v("大部分我们熟知的编码都是"),n("code",[t._v("为了建立在更少的码点占用内存和查找效率的基础上，更好的解析不同场景的Unicode码")]),t._v("(查找问题就比如我们在浏览器中搜索字符串一样，搜索之前也是需要经过编码对齐，和按照字符编码查询)。\n比如下面")]),t._v(" "),n("br"),t._v(" "),n("p",[t._v("** Waiting for writing. **")]),t._v(" "),n("h3",{attrs:{id:"utf-系列"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#utf-系列"}},[t._v("#")]),t._v(" Utf-*系列")]),t._v(" "),n("p",[n("code",[t._v("UTF(Unicode Transformation Format)")]),t._v("系列编码直译为Unicode转换格式。它们基于Unicode定义了一些自己的规则。")]),t._v(" "),n("br"),t._v(" "),n("h3",{attrs:{id:"utf-8"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#utf-8"}},[t._v("#")]),t._v(" UTF-8")]),t._v(" "),n("p",[t._v("Utf-8与ASCII完全兼容，它的定义规则是这样的，贴一张图。\n"),n("img",{attrs:{src:a(387),alt:"clipboard.png"}})]),t._v(" "),n("h3",{attrs:{id:"utf-16"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#utf-16"}},[t._v("#")]),t._v(" UTF-16")]),t._v(" "),n("h3",{attrs:{id:"utf-32"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#utf-32"}},[t._v("#")]),t._v(" UTF-32")]),t._v(" "),n("h3",{attrs:{id:"gbk"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#gbk"}},[t._v("#")]),t._v(" GBK")]),t._v(" "),n("h3",{attrs:{id:"ucs"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#ucs"}},[t._v("#")]),t._v(" UCS")]),t._v(" "),n("h3",{attrs:{id:"big"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#big"}},[t._v("#")]),t._v(" Big")]),t._v(" "),n("h2",{attrs:{id:"gb2312-字符集"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#gb2312-字符集"}},[t._v("#")]),t._v(" GB2312 字符集")]),t._v(" "),n("hr"),t._v(" "),n("h2",{attrs:{id:"加密编码"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#加密编码"}},[t._v("#")]),t._v(" 加密编码")]),t._v(" "),n("p",[t._v("加密编码和上面说的普通编码不同，前者为了保护数据，后者为了显示。对于非对称加密，加密有 SHA, SHA-1, MD5, HEX, 我通常叫这种加密方式为"),n("code",[t._v("加盐")]),t._v("。\n对称编码，和对称加密，我们熟知的base64和Zip压缩算法等等，对称加密就需要提供一对秘钥。")]),t._v(" "),n("hr"),t._v(" "),n("h2",{attrs:{id:"乱码的问题"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#乱码的问题"}},[t._v("#")]),t._v(" 乱码的问题")]),t._v(" "),n("p",[t._v("编码出现的地方有两种，我们在代码编辑器中编辑时的编码，解析时编码，比如HTML中的元标签(meta)第一行我们通常都会指定一个charset。\n总之，编码也就是两部分，第一是你用什么编码写入的这个文件，第二是运行上下文使用什么编码来解析这个文件，两头对不上，那就会出现乱码的情况。")]),t._v(" "),n("h2",{attrs:{id:"如何互相转各类编码"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#如何互相转各类编码"}},[t._v("#")]),t._v(" 如何互相转各类编码")]),t._v(" "),n("p",[t._v("对于各类的上层编码我们应该如何转换呢？比如UTF8 -> UTF16 -> UCS?")]),t._v(" "),n("h2",{attrs:{id:"在-javascript-中的问题"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#在-javascript-中的问题"}},[t._v("#")]),t._v(" 在 JavaScript 中的问题")]),t._v(" "),n("p",[n("strong",[t._v("千万不要被字符表象所迷惑，屏幕上的字符只是CodePoint的映射(Map)，表现可能一样，但codePoint不一样")]),t._v("。")]),t._v(" "),n("div",{staticClass:"language-javascript extra-class"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" s "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" String"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("fromCharCode")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" d "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" String"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("fromCharCode")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nconsole"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("d"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// ""')]),t._v("\nconsole"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("s"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// ""')]),t._v("\ns "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//false")]),t._v("\nd "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//false")]),t._v("\ns "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" d"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// false")]),t._v("\nd "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" s"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//true")]),t._v("\n")])])]),n("p",[t._v("由于32码点之内的字符是"),n("code",[t._v("无字形")]),t._v("的，所以我们打印出来并不能看到什么，但实际上在比较时，引擎还是以codePoint为准。自然排序也就是Sort方法也是比较码点了。\n我们也可以在代码中直接使用Unicode码，这需要使用\\u前缀标明接下来应该被识别为对应"),n("code",[t._v("编码类型")]),t._v("的转义后的字符。")]),t._v(" "),n("p",[n("strong",[t._v("怎么才能知道一个字符需要charCode几次才是一个字符？")]),t._v("。")]),t._v(" "),n("p",[t._v("在JS中，String.prototype.charCodeAt为捕获指定下标字符的codePoint, 但是")]),t._v(" "),n("h2",{attrs:{id:"在-python-中的问题"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#在-python-中的问题"}},[t._v("#")]),t._v(" 在 Python 中的问题")]),t._v(" "),n("div",{staticClass:"language-pyton extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("def uu() {\n\n}\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);