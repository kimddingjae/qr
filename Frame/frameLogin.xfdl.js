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
            this.addChild(obj.name, obj);

            obj = new ImageViewer("imgTitle","167","93","845","127",null,null,null,null,null,null,this.divMain.form);
            obj.set_taborder("2");
            obj.set_text("image");
            obj.set_border("0px none");
            this.divMain.addChild(obj.name, obj);

            obj = new Div("divId","20","303",null,"100","20",null,null,null,null,null,this.divMain.form);
            obj.set_taborder("0");
            this.divMain.addChild(obj.name, obj);

            obj = new Static("staId","20","5","326","20",null,null,null,null,null,null,this.divMain.form.divId.form);
            obj.set_taborder("0");
            obj.set_text("ID");
            this.divMain.form.divId.addChild(obj.name, obj);

            obj = new Edit("edtId","20","35","377","24",null,null,null,null,null,null,this.divMain.form.divId.form);
            obj.set_taborder("1");
            obj.set_border("0px none");
            this.divMain.form.divId.addChild(obj.name, obj);

            obj = new Div("divPwd","20","493",null,"100","20",null,null,null,null,null,this.divMain.form);
            obj.set_taborder("1");
            obj.set_text("");
            this.divMain.addChild(obj.name, obj);

            obj = new Static("staPwd","20","5","326","20",null,null,null,null,null,null,this.divMain.form.divPwd.form);
            obj.set_taborder("0");
            obj.set_text("PASSWORD");
            this.divMain.form.divPwd.addChild(obj.name, obj);

            obj = new Edit("edtPwd","20","35","377","24",null,null,null,null,null,null,this.divMain.form.divPwd.form);
            obj.set_taborder("1");
            obj.set_border("0px none");
            this.divMain.form.divPwd.addChild(obj.name, obj);

            obj = new Button("btnLogin","309","577","535","73",null,null,null,null,null,null,this.divMain.form);
            obj.set_taborder("3");
            obj.set_text("Login");
            this.divMain.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","desktop",1280,720,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;


                // {{ this.divMain.form.divId
                p = rootobj.divMain.form.divId.form;

                p.staId.set_taborder("0");
                p.staId.set_text("ID");
                p.staId.move("20","5","326","20",null,null);

                p.edtId.set_taborder("1");
                p.edtId.set_border("0px none");
                p.edtId.move("20","35","377","24",null,null);
                // this.divMain.form.divId }}


                // {{ this.divMain.form.divPwd
                p = rootobj.divMain.form.divPwd.form;

                p.staPwd.set_taborder("0");
                p.staPwd.set_text("PASSWORD");
                p.staPwd.move("20","5","326","20",null,null);

                p.edtPwd.set_taborder("1");
                p.edtPwd.set_border("0px none");
                p.edtPwd.move("20","35","377","24",null,null);
                // this.divMain.form.divPwd }}


                // {{ this.divMain
                p = rootobj.divMain.form;

                p.imgTitle.set_taborder("2");
                p.imgTitle.set_text("image");
                p.imgTitle.set_border("0px none");
                p.imgTitle.move("167","93","845","127",null,null);

                p.divId.set_taborder("0");
                p.divId.move("20","303",null,"100","20",null);

                p.divPwd.set_taborder("1");
                p.divPwd.set_text("");
                p.divPwd.move("20","493",null,"100","20",null);

                p.btnLogin.set_taborder("3");
                p.btnLogin.set_text("Login");
                p.btnLogin.move("309","577","535","73",null,null);
                // this.divMain }}
                p = rootobj;
                p.set_titletext("Form_Work");

                p.divMain.set_taborder("0");
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


                // {{ this.divMain.form.divId
                p = rootobj.divMain.form.divId.form;

                p.staId.set_font("20px/normal \"Pretendard Variable Medium\"");
                p.staId.set_color("#d0d0d0");
                p.staId.move("20","25",null,"25","20",null);

                p.edtId.set_value("loginid123");
                p.edtId.set_font("24px/normal \"Pretendard Variable Medium\"");
                p.edtId.set_padding("0px");
                p.edtId.move("20",null,null,"30","20","25");
                // this.divMain.form.divId }}


                // {{ this.divMain.form.divPwd
                p = rootobj.divMain.form.divPwd.form;

                p.staPwd.set_font("20px/normal \"Pretendard Variable Medium\"");
                p.staPwd.set_color("#d0d0d0");
                p.staPwd.move("20","25",null,"25","20",null);

                p.edtPwd.set_value("********");
                p.edtPwd.set_font("24px/normal \"Pretendard Variable Medium\"");
                p.edtPwd.set_padding("0px");
                p.edtPwd.move("20",null,null,"30","20","25");
                // this.divMain.form.divPwd }}


                // {{ this.divMain
                p = rootobj.divMain.form;

                p.divId.set_background("white");
                p.divId.set_borderRadius("30px");
                p.divId.set_boxShadow("2px 2px 5px 0px #e0e0e0");
                p.divId.move("10.00%","263",null,"115","10.00%",null);

                p.divPwd.set_background("white");
                p.divPwd.set_borderRadius("30px");
                p.divPwd.set_boxShadow("2px 2px 5px 0px #e0e0e0");
                p.divPwd.move("10%","divId:20",null,"115","10%",null);

                p.imgTitle.set_text(" ");
                p.imgTitle.set_image("url(\'theme::default/images/img_logo.png\')");
                p.imgTitle.set_stretch("fixaspectratio");
                p.imgTitle.set_background("transparent");
                p.imgTitle.move("0","10%",null,"90","0",null);

                p.btnLogin.set_text("Login");
                p.btnLogin.set_background("#158c50");
                p.btnLogin.set_color("#ffffff");
                p.btnLogin.set_font("30px/normal \"Pretendard Variable Medium\"");
                p.btnLogin.set_borderRadius("20px");
                p.btnLogin.move("10.00%","divPwd:40",null,"100","10.00%",null);
                // this.divMain }}
                p = rootobj;
                p.divMain.set_background("url(\'theme::default/images/bg_circle.png\') no-repeat left top /55% #fafafa");
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


                // {{ this.divMain.form.divId
                p = rootobj.divMain.form.divId.form;

                p.staId.set_font("12px/normal \"Pretendard Variable Medium\"");
                p.staId.set_color("#d0d0d0");
                p.staId.move("20","15",null,"20","20",null);

                p.edtId.set_value("loginid123");
                p.edtId.set_font("13px/normal \"Pretendard Variable Medium\"");
                p.edtId.set_padding("0px");
                p.edtId.move("20",null,null,"24","20","15");
                // this.divMain.form.divId }}


                // {{ this.divMain.form.divPwd
                p = rootobj.divMain.form.divPwd.form;

                p.staPwd.set_font("12px/normal \"Pretendard Variable Medium\"");
                p.staPwd.set_color("#d0d0d0");
                p.staPwd.move("20","15",null,"20","20",null);

                p.edtPwd.set_value("********");
                p.edtPwd.set_font("13px/normal \"Pretendard Variable Medium\"");
                p.edtPwd.set_padding("0px");
                p.edtPwd.move("20",null,null,"24","20","15");
                // this.divMain.form.divPwd }}


                // {{ this.divMain
                p = rootobj.divMain.form;

                p.divId.set_background("white");
                p.divId.set_borderRadius("25px");
                p.divId.set_boxShadow("2px 2px 5px 0px #e0e0e0");
                p.divId.move("8%","imgTitle:100%",null,"75","8%",null);

                p.divPwd.set_background("white");
                p.divPwd.set_borderRadius("25px");
                p.divPwd.set_boxShadow("2px 2px 5px 0px #e0e0e0");
                p.divPwd.move("8%","divId:15",null,"75","8%",null);

                p.imgTitle.set_background("transparent");
                p.imgTitle.set_text(" ");
                p.imgTitle.set_stretch("fixaspectratio");
                p.imgTitle.set_image("url(\'theme::default/images/img_logo.png\')");
                p.imgTitle.move("0","20%",null,"70","0",null);

                p.btnLogin.set_text("Login");
                p.btnLogin.set_background("#158c50");
                p.btnLogin.set_color("#ffffff");
                p.btnLogin.set_font("18px/normal \"Pretendard Variable Medium\"");
                p.btnLogin.set_borderRadius("15px");
                p.btnLogin.move("8%","divPwd:20",null,"50","8%",null);
                // this.divMain }}
                p = rootobj;
                p.divMain.set_background("url(\'theme::default/images/bg_circle.png\') no-repeat left top /55% #fafafa");
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
        this.registerScript("frameLogin.xfdl", function() {
        var objApp = nexacro.getApplication();
        this.gvWorkFrame    = objApp.mainframe.WorkFrame;					//WorkForm

        this.divMain_btnLogin_onclick = function(obj,e)
        {
        	this.gvWorkFrame.set_formurl("Frame::frameMain.xfdl");
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.divMain.form.btnLogin.addEventHandler("onclick",this.divMain_btnLogin_onclick,this);
        };
        this.loadIncludeScript("frameLogin.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
