(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Form_Work");
            this.set_titletext("Form_Work");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Div("divMain","0","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Div("divUsr","1060","32","200","60",null,null,null,null,null,null,this.divMain.form);
            obj.set_taborder("0");
            this.divMain.addChild(obj.name, obj);

            obj = new Static("staEmpNo","10","0",null,"25","0",null,null,null,null,null,this.divMain.form.divUsr.form);
            obj.set_taborder("0");
            obj.set_text("123456789");
            obj.set_font("bold 18pt/normal \"Arial\"");
            obj.set_textAlign("center");
            this.divMain.form.divUsr.addChild(obj.name, obj);

            obj = new Static("staEmpNm","10","staEmpNo:5",null,"25","0",null,null,null,null,null,this.divMain.form.divUsr.form);
            obj.set_taborder("1");
            obj.set_text("안녕하세요. 홍길동님");
            obj.set_font("14pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_color("#9d9d9d");
            this.divMain.form.divUsr.addChild(obj.name, obj);

            obj = new Div("divMenu","0","100",null,null,"0","100",null,null,null,null,this.divMain.form);
            obj.set_taborder("1");
            this.divMain.addChild(obj.name, obj);

            obj = new Div("divMenu1","20","20","280","205",null,null,null,null,null,null,this.divMain.form.divMenu.form);
            obj.set_taborder("2");
            obj.set_border("1px solid");
            obj.set_text("");
            this.divMain.form.divMenu.addChild(obj.name, obj);

            obj = new Static("staMenuTitleKor","16","46","137","30",null,null,null,null,null,null,this.divMain.form.divMenu.form.divMenu1.form);
            obj.set_taborder("0");
            obj.set_text("입하");
            this.divMain.form.divMenu.form.divMenu1.addChild(obj.name, obj);

            obj = new Static("staMenuTitleEng","16","26","137","20",null,null,null,null,null,null,this.divMain.form.divMenu.form.divMenu1.form);
            obj.set_taborder("1");
            obj.set_text("In stock");
            this.divMain.form.divMenu.form.divMenu1.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer00","16","76","80","80",null,null,null,null,null,null,this.divMain.form.divMenu.form.divMenu1.form);
            obj.set_taborder("2");
            obj.set_image("url(\'theme::default/images/img_menu1.png\')");
            obj.set_stretch("fixaspectratio");
            obj.set_border("0px none");
            this.divMain.form.divMenu.form.divMenu1.addChild(obj.name, obj);

            obj = new Div("divMenu3","20","245","280","205",null,null,null,null,null,null,this.divMain.form.divMenu.form);
            obj.set_taborder("1");
            obj.set_border("1px solid");
            this.divMain.form.divMenu.addChild(obj.name, obj);

            obj = new Static("staMenuTitleKor","16","46","137","30",null,null,null,null,null,null,this.divMain.form.divMenu.form.divMenu3.form);
            obj.set_taborder("0");
            obj.set_text("QC");
            this.divMain.form.divMenu.form.divMenu3.addChild(obj.name, obj);

            obj = new Static("staMenuTitleEng","16","26","137","20",null,null,null,null,null,null,this.divMain.form.divMenu.form.divMenu3.form);
            obj.set_taborder("1");
            obj.set_text("Quality control");
            this.divMain.form.divMenu.form.divMenu3.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer00","16","76","80","80",null,null,null,null,null,null,this.divMain.form.divMenu.form.divMenu3.form);
            obj.set_taborder("2");
            obj.set_image("url(\'theme::default/images/img_menu3.png\')");
            obj.set_stretch("fixaspectratio");
            obj.set_border("0px none");
            this.divMain.form.divMenu.form.divMenu3.addChild(obj.name, obj);

            obj = new Div("divMenu2","320","20","280","205",null,null,null,null,null,null,this.divMain.form.divMenu.form);
            obj.set_taborder("3");
            obj.set_border("1px solid");
            this.divMain.form.divMenu.addChild(obj.name, obj);

            obj = new Static("staMenuTitleKor","16","46","137","30",null,null,null,null,null,null,this.divMain.form.divMenu.form.divMenu2.form);
            obj.set_taborder("0");
            obj.set_text("도면");
            this.divMain.form.divMenu.form.divMenu2.addChild(obj.name, obj);

            obj = new Static("staMenuTitleEng","16","26","137","20",null,null,null,null,null,null,this.divMain.form.divMenu.form.divMenu2.form);
            obj.set_taborder("1");
            obj.set_text("Floor plan");
            this.divMain.form.divMenu.form.divMenu2.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer00","16","86","80","80",null,null,null,null,null,null,this.divMain.form.divMenu.form.divMenu2.form);
            obj.set_taborder("2");
            obj.set_image("url(\'theme::default/images/img_menu2.png\')");
            obj.set_stretch("fixaspectratio");
            obj.set_border("0px none");
            this.divMain.form.divMenu.form.divMenu2.addChild(obj.name, obj);

            obj = new Div("divMenu4","divMenu3:20","divMenu2:20","280","205",null,null,null,null,null,null,this.divMain.form.divMenu.form);
            obj.set_taborder("0");
            obj.set_border("1px solid");
            this.divMain.form.divMenu.addChild(obj.name, obj);

            obj = new Static("staMenuTitleKor","16","46","137","30",null,null,null,null,null,null,this.divMain.form.divMenu.form.divMenu4.form);
            obj.set_taborder("0");
            obj.set_text("조회");
            this.divMain.form.divMenu.form.divMenu4.addChild(obj.name, obj);

            obj = new Static("staMenuTitleEng","16","26","137","20",null,null,null,null,null,null,this.divMain.form.divMenu.form.divMenu4.form);
            obj.set_taborder("1");
            obj.set_text("Look up");
            this.divMain.form.divMenu.form.divMenu4.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer00","16","76","80","80",null,null,null,null,null,null,this.divMain.form.divMenu.form.divMenu4.form);
            obj.set_taborder("2");
            obj.set_image("url(\'theme::default/images/img_menu4.png\')");
            obj.set_stretch("fixaspectratio");
            obj.set_border("0px none");
            this.divMain.form.divMenu.form.divMenu4.addChild(obj.name, obj);

            obj = new Button("btnBack","10","5","144","30",null,null,null,null,null,null,this.divMain.form);
            obj.set_taborder("2");
            this.divMain.addChild(obj.name, obj);

            obj = new ImageViewer("logo","520","650","260","50",null,null,null,null,null,null,this.divMain.form);
            obj.set_taborder("3");
            obj.set_image("url(\'theme::default/images/img_logo.png\')");
            obj.set_stretch("fixaspectratio");
            obj.set_border("0px none");
            this.divMain.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","desktop",1280,720,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;


                // {{ this.divMain.form.divUsr
                p = rootobj.divMain.form.divUsr.form;

                p.staEmpNo.set_taborder("0");
                p.staEmpNo.set_text("123456789");
                p.staEmpNo.set_font("bold 18pt/normal \"Arial\"");
                p.staEmpNo.set_textAlign("center");
                p.staEmpNo.move("10","0",null,"25","0",null);

                p.staEmpNm.set_taborder("1");
                p.staEmpNm.set_text("안녕하세요. 홍길동님");
                p.staEmpNm.set_font("14pt/normal \"Arial\"");
                p.staEmpNm.set_textAlign("center");
                p.staEmpNm.set_color("#9d9d9d");
                p.staEmpNm.move("10","staEmpNo:5",null,"25","0",null);
                // this.divMain.form.divUsr }}


                // {{ this.divMain.form.divMenu.form.divMenu1
                p = rootobj.divMain.form.divMenu.form.divMenu1.form;

                p.staMenuTitleKor.set_taborder("0");
                p.staMenuTitleKor.set_text("입하");
                p.staMenuTitleKor.move("16","46","137","30",null,null);

                p.staMenuTitleEng.set_taborder("1");
                p.staMenuTitleEng.set_text("In stock");
                p.staMenuTitleEng.move("16","26","137","20",null,null);

                p.ImageViewer00.set_taborder("2");
                p.ImageViewer00.set_image("url(\'theme::default/images/img_menu1.png\')");
                p.ImageViewer00.set_stretch("fixaspectratio");
                p.ImageViewer00.set_border("0px none");
                p.ImageViewer00.move("16","76","80","80",null,null);
                // this.divMain.form.divMenu.form.divMenu1 }}


                // {{ this.divMain.form.divMenu.form.divMenu3
                p = rootobj.divMain.form.divMenu.form.divMenu3.form;

                p.staMenuTitleKor.set_taborder("0");
                p.staMenuTitleKor.set_text("QC");
                p.staMenuTitleKor.move("16","46","137","30",null,null);

                p.staMenuTitleEng.set_taborder("1");
                p.staMenuTitleEng.set_text("Quality control");
                p.staMenuTitleEng.move("16","26","137","20",null,null);

                p.ImageViewer00.set_taborder("2");
                p.ImageViewer00.set_image("url(\'theme::default/images/img_menu3.png\')");
                p.ImageViewer00.set_stretch("fixaspectratio");
                p.ImageViewer00.set_border("0px none");
                p.ImageViewer00.move("16","76","80","80",null,null);
                // this.divMain.form.divMenu.form.divMenu3 }}


                // {{ this.divMain.form.divMenu.form.divMenu2
                p = rootobj.divMain.form.divMenu.form.divMenu2.form;

                p.staMenuTitleKor.set_taborder("0");
                p.staMenuTitleKor.set_text("도면");
                p.staMenuTitleKor.move("16","46","137","30",null,null);

                p.staMenuTitleEng.set_taborder("1");
                p.staMenuTitleEng.set_text("Floor plan");
                p.staMenuTitleEng.move("16","26","137","20",null,null);

                p.ImageViewer00.set_taborder("2");
                p.ImageViewer00.set_image("url(\'theme::default/images/img_menu2.png\')");
                p.ImageViewer00.set_stretch("fixaspectratio");
                p.ImageViewer00.set_border("0px none");
                p.ImageViewer00.move("16","86","80","80",null,null);
                // this.divMain.form.divMenu.form.divMenu2 }}


                // {{ this.divMain.form.divMenu.form.divMenu4
                p = rootobj.divMain.form.divMenu.form.divMenu4.form;

                p.staMenuTitleKor.set_taborder("0");
                p.staMenuTitleKor.set_text("조회");
                p.staMenuTitleKor.move("16","46","137","30",null,null);

                p.staMenuTitleEng.set_taborder("1");
                p.staMenuTitleEng.set_text("Look up");
                p.staMenuTitleEng.move("16","26","137","20",null,null);

                p.ImageViewer00.set_taborder("2");
                p.ImageViewer00.set_image("url(\'theme::default/images/img_menu4.png\')");
                p.ImageViewer00.set_stretch("fixaspectratio");
                p.ImageViewer00.set_border("0px none");
                p.ImageViewer00.move("16","76","80","80",null,null);
                // this.divMain.form.divMenu.form.divMenu4 }}


                // {{ this.divMain.form.divMenu
                p = rootobj.divMain.form.divMenu.form;

                p.divMenu1.set_taborder("2");
                p.divMenu1.set_border("1px solid");
                p.divMenu1.set_text("");
                p.divMenu1.move("20","20","280","205",null,null);

                p.divMenu3.set_taborder("1");
                p.divMenu3.set_border("1px solid");
                p.divMenu3.move("20","245","280","205",null,null);

                p.divMenu2.set_taborder("3");
                p.divMenu2.set_border("1px solid");
                p.divMenu2.move("320","20","280","205",null,null);

                p.divMenu4.set_taborder("0");
                p.divMenu4.set_border("1px solid");
                p.divMenu4.move("divMenu3:20","divMenu2:20","280","205",null,null);
                // this.divMain.form.divMenu }}


                // {{ this.divMain
                p = rootobj.divMain.form;

                p.divUsr.set_taborder("0");
                p.divUsr.move("1060","32","200","60",null,null);

                p.divMenu.set_taborder("1");
                p.divMenu.move("0","100",null,null,"0","100");

                p.btnBack.set_taborder("2");
                p.btnBack.move("10","5","144","30",null,null);

                p.logo.set_taborder("3");
                p.logo.set_image("url(\'theme::default/images/img_logo.png\')");
                p.logo.set_stretch("fixaspectratio");
                p.logo.set_border("0px none");
                p.logo.move("520","650","260","50",null,null);
                // this.divMain }}
                p = rootobj;
                p.set_titletext("Form_Work");

                p.divMain.set_taborder("0");
                p.divMain.set_text("");
                p.divMain.move("0","0",null,null,"0","0");
            	}
            );
            this.addLayout(obj.name, obj);

            //-- Normal Layout : this
            obj = new Layout("tablet","tablet",1280,800,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;


                // {{ this.divMain.form.divUsr
                p = rootobj.divMain.form.divUsr.form;

                p.staEmpNm.set_font("18pt/normal \"Pretendard Variable\"");
                p.staEmpNm.set_textAlign("right");
                p.staEmpNm.set_text("안녕하세요, 홍길동님");
                p.staEmpNm.move("0","staEmpNo:0","300","33","0",null);

                p.staEmpNo.set_textAlign("right");
                p.staEmpNo.set_font("26pt/normal \"Pretendard Variable SemiBold\"");
                p.staEmpNo.move("0","0","300","46",null,null);
                // this.divMain.form.divUsr }}


                // {{ this.divMain.form.divMenu.form.divMenu1
                p = rootobj.divMain.form.divMenu.form.divMenu1.form;

                p.staMenuTitleEng.set_font("22px/normal \"Pretendard Variable\"");
                p.staMenuTitleEng.set_color("#b5b5b5");
                p.staMenuTitleEng.move("35",null,"180","25",null,"staMenuTitleKor:5");

                p.staMenuTitleKor.set_font("45px/normal \"Pretendard Variable SemiBold\"");
                p.staMenuTitleKor.move("35",null,"90","52",null,"30");

                p.ImageViewer00.move(null,"30","70","70","35",null);
                // this.divMain.form.divMenu.form.divMenu1 }}


                // {{ this.divMain.form.divMenu.form.divMenu3
                p = rootobj.divMain.form.divMenu.form.divMenu3.form;

                p.staMenuTitleEng.set_font("22px/normal \"Pretendard Variable\"");
                p.staMenuTitleEng.set_color("#b5b5b5");
                p.staMenuTitleEng.move("35",null,"180","25",null,"staMenuTitleKor:5");

                p.staMenuTitleKor.set_font("45px/normal \"Pretendard Variable SemiBold\"");
                p.staMenuTitleKor.move("35",null,"90","52",null,"30");

                p.ImageViewer00.move(null,"30","65","65","35",null);
                // this.divMain.form.divMenu.form.divMenu3 }}


                // {{ this.divMain.form.divMenu.form.divMenu2
                p = rootobj.divMain.form.divMenu.form.divMenu2.form;

                p.staMenuTitleEng.set_font("22px/normal \"Pretendard Variable\"");
                p.staMenuTitleEng.set_color("#b5b5b5");
                p.staMenuTitleEng.move("35",null,"180","25",null,"staMenuTitleKor:5");

                p.staMenuTitleKor.set_font("45px/normal \"Pretendard Variable SemiBold\"");
                p.staMenuTitleKor.move("35",null,"90","52",null,"30");

                p.ImageViewer00.move(null,"30","65","65","35",null);
                // this.divMain.form.divMenu.form.divMenu2 }}


                // {{ this.divMain.form.divMenu.form.divMenu4
                p = rootobj.divMain.form.divMenu.form.divMenu4.form;

                p.staMenuTitleEng.set_font("22px/normal \"Pretendard Variable\"");
                p.staMenuTitleEng.set_color("#b5b5b5");
                p.staMenuTitleEng.move("35",null,"180","25",null,"staMenuTitleKor:5");

                p.staMenuTitleKor.set_font("45px/normal \"Pretendard Variable SemiBold\"");
                p.staMenuTitleKor.move("35",null,"90","52",null,"30");

                p.ImageViewer00.move(null,"30","60","60","35",null);
                // this.divMain.form.divMenu.form.divMenu4 }}


                // {{ this.divMain.form.divMenu
                p = rootobj.divMain.form.divMenu.form;

                p.divMenu1.set_background("#ffffff");
                p.divMenu1.set_borderRadius("30px");
                p.divMenu1.set_border("0px none");
                p.divMenu1.set_boxShadow("0px 0px 10px 0px #f2f2f2");
                p.divMenu1.move("8%","20","40%","32%",null,null);

                p.divMenu2.set_background("#ffffff");
                p.divMenu2.set_borderRadius("30px");
                p.divMenu2.set_border("0px none");
                p.divMenu2.set_boxShadow("0px 0px 10px 0px #f2f2f2");
                p.divMenu2.set_text("");
                p.divMenu2.move(null,"20","40%","32%","8%",null);

                p.divMenu3.set_background("#ffffff");
                p.divMenu3.set_borderRadius("30px");
                p.divMenu3.set_border("0px none");
                p.divMenu3.set_boxShadow("0px 0px 10px 0px #f2f2f2");
                p.divMenu3.move("8%","divMenu1:30","40%","32%",null,null);

                p.divMenu4.set_background("#ffffff");
                p.divMenu4.set_borderRadius("30px");
                p.divMenu4.set_border("0px none");
                p.divMenu4.set_boxShadow("0px 0px 10px 0px #f2f2f2");
                p.divMenu4.move(null,"divMenu2:30","40%","32%","8%",null);
                // this.divMain.form.divMenu }}


                // {{ this.divMain
                p = rootobj.divMain.form;

                p.divUsr.move(null,"40","300","85","8%",null);

                p.divMenu.set_text("");
                p.divMenu.move("0","divUsr:20",null,null,"0","140");

                p.logo.set_background("transparent");
                p.logo.set_text("");
                p.logo.move("0",null,null,"60","0","40");

                p.btnBack.set_background("url(\'theme::default/images/img_back.png\') no-repeat left top /contain");
                p.btnBack.set_border("0px none");
                p.btnBack.move("7.88%","55","60","60",null,null);
                // this.divMain }}
                p = rootobj;
                p.divMain.set_background("url(\'theme::default/images/bg_circle.png\') no-repeat left top /55% #fafafa");
                p.divMain.set_text("");
            	}
            );
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);

            //-- Normal Layout : this
            obj = new Layout("mobile","mobile",480,768,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;


                // {{ this.divMain.form.divUsr
                p = rootobj.divMain.form.divUsr.form;

                p.staEmpNm.set_font("14pt/normal \"Pretendard Variable\"");
                p.staEmpNm.set_textAlign("right");
                p.staEmpNm.set_text("안녕하세요, 홍길동님");
                p.staEmpNm.move("30","staEmpNo:0",null,"25","0",null);

                p.staEmpNo.set_textAlign("right");
                p.staEmpNo.set_font("18pt/normal \"Pretendard Variable SemiBold\"");
                p.staEmpNo.move("30","0",null,"30","0",null);
                // this.divMain.form.divUsr }}


                // {{ this.divMain.form.divMenu.form.divMenu1
                p = rootobj.divMain.form.divMenu.form.divMenu1.form;

                p.staMenuTitleEng.set_font("15px/normal \"Pretendard Variable\"");
                p.staMenuTitleEng.set_color("#b5b5b5");
                p.staMenuTitleEng.move("25",null,"120","25",null,"staMenuTitleKor:0");

                p.staMenuTitleKor.set_font("34px/normal \"Pretendard Variable SemiBold\"");
                p.staMenuTitleKor.move("25",null,"90","39",null,"20");

                p.ImageViewer00.move(null,"25","50","50","25",null);
                // this.divMain.form.divMenu.form.divMenu1 }}


                // {{ this.divMain.form.divMenu.form.divMenu3
                p = rootobj.divMain.form.divMenu.form.divMenu3.form;

                p.staMenuTitleEng.set_font("15px/normal \"Pretendard Variable\"");
                p.staMenuTitleEng.set_color("#b5b5b5");
                p.staMenuTitleEng.move("25",null,"120","25",null,"staMenuTitleKor:0");

                p.staMenuTitleKor.set_font("34px/normal \"Pretendard Variable SemiBold\"");
                p.staMenuTitleKor.move("25",null,"90","39",null,"20");

                p.ImageViewer00.move(null,"25","45","45","25",null);
                // this.divMain.form.divMenu.form.divMenu3 }}


                // {{ this.divMain.form.divMenu.form.divMenu2
                p = rootobj.divMain.form.divMenu.form.divMenu2.form;

                p.staMenuTitleEng.set_font("15px/normal \"Pretendard Variable\"");
                p.staMenuTitleEng.set_color("#b5b5b5");
                p.staMenuTitleEng.move("25",null,"120","25",null,"staMenuTitleKor:0");

                p.staMenuTitleKor.set_font("34px/normal \"Pretendard Variable SemiBold\"");
                p.staMenuTitleKor.move("25",null,"90","39",null,"20");

                p.ImageViewer00.move(null,"25","45","45","25",null);
                // this.divMain.form.divMenu.form.divMenu2 }}


                // {{ this.divMain.form.divMenu.form.divMenu4
                p = rootobj.divMain.form.divMenu.form.divMenu4.form;

                p.staMenuTitleEng.set_font("15px/normal \"Pretendard Variable\"");
                p.staMenuTitleEng.set_color("#b5b5b5");
                p.staMenuTitleEng.move("25",null,"120","25",null,"staMenuTitleKor:0");

                p.staMenuTitleKor.set_font("34px/normal \"Pretendard Variable SemiBold\"");
                p.staMenuTitleKor.move("25",null,"90","39",null,"20");

                p.ImageViewer00.move(null,"25","40","40","25",null);
                // this.divMain.form.divMenu.form.divMenu4 }}


                // {{ this.divMain.form.divMenu
                p = rootobj.divMain.form.divMenu.form;

                p.divMenu1.set_background("#ffffff");
                p.divMenu1.set_borderRadius("30px");
                p.divMenu1.set_border("0px none");
                p.divMenu1.set_boxShadow("0px 0px 10px 0px #f2f2f2");
                p.divMenu1.move("8%","20","40%","30%",null,null);

                p.divMenu2.set_background("#ffffff");
                p.divMenu2.set_borderRadius("30px");
                p.divMenu2.set_border("0px none");
                p.divMenu2.set_boxShadow("0px 0px 10px 0px #f2f2f2");
                p.divMenu2.set_text("");
                p.divMenu2.move(null,"20","40%","30%","8%",null);

                p.divMenu3.set_background("#ffffff");
                p.divMenu3.set_borderRadius("30px");
                p.divMenu3.set_border("0px none");
                p.divMenu3.set_boxShadow("0px 0px 10px 0px #f2f2f2");
                p.divMenu3.move("8%","divMenu1:20","40%","30%",null,null);

                p.divMenu4.set_background("#ffffff");
                p.divMenu4.set_borderRadius("30px");
                p.divMenu4.set_border("0px none");
                p.divMenu4.set_boxShadow("0px 0px 10px 0px #f2f2f2");
                p.divMenu4.move(null,"divMenu2:20","40%","30%","8%",null);
                // this.divMain.form.divMenu }}


                // {{ this.divMain
                p = rootobj.divMain.form;

                p.divUsr.move(null,"40","250","55","8%",null);

                p.divMenu.set_text("");
                p.divMenu.move("0","divUsr:20",null,null,"0","80");

                p.logo.set_background("transparent");
                p.logo.move("0%",null,null,"40","0%","20");

                p.btnBack.set_background("url(\'theme::default/images/img_back.png\') no-repeat left top /contain");
                p.btnBack.set_border("0px none");
                p.btnBack.move("7.92%","47","40","40",null,null);
                // this.divMain }}
                p = rootobj;
                p.divMain.set_background("url(\'theme::default/images/bg_circle.png\') no-repeat left top /55% #fafafa");
                p.divMain.set_text("");
            	}
            );
            obj.set_mobileorientation("portrait");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("frameMain.xfdl", function() {
        var objApp = nexacro.getApplication();
        this.gvWorkFrame    = objApp.mainframe.WorkFrame;					//WorkForm

        this.divMain_btnBack_onclick = function(obj,e)
        {
        	// 로그인 화면 open
        	this.gvWorkFrame.set_formurl("Frame::frameLogin.xfdl");
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.divMain.form.btnBack.addEventHandler("onclick",this.divMain_btnBack_onclick,this);
        };
        this.loadIncludeScript("frameMain.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
