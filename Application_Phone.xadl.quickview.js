(function()
{
    return function()
    {
        this.on_loadAppVariables = function()
        {		
            var obj = null;
            
			// global dataobject
		
            // global dataset

            
            // global variable

            
            obj = null;
        };
        
        // property, event, createMainFrame
        this.on_initApplication = function()
        {
            // properties
            this.set_id("Application_Phone");
            this.set_screenid("mobile");

            if (this._is_attach_childframe)
            	return;
            
            // frame
            var mainframe = this.createMainFrame("mainframe","0","0","800","1280",null,null,this);
            mainframe.set_showtitlebar("false");
            mainframe.set_showstatusbar("false");
            mainframe.set_titletext("FullFrame");
            mainframe.set_showtitleicon("false");
            mainframe.on_createBodyFrame = this.mainframe_createBodyFrame;
            // tray

        };
        
        this.loadPreloadList = function()
        {

        };
        
        this.mainframe_createBodyFrame = function()
        {
            var obj = new ChildFrame("QuickViewFrame", null, null, null, null, null, null, "", this);
            
            obj.set_showtitlebar("false");
            obj.set_showstatusbar("false");
            obj.set_border("0px none");
			
            this.addChild(obj.name, obj);
            obj.set_formurl(nexacro._quickview_formurl);
            this.frame = obj;
            
            obj = null;
        };
        
        this.on_initEvent = function()
        {
        };
		// script Compiler
        this.registerScript("Application_Phone.xadl", function() {
        /**
        *  모바일 프레임 구성
        *  @MenuPath
        *  @FileName
        *  @Creator 	kmj
        *  @CreateDate 	2023.11.27
        *  @Desction         스크립트 표준 및 주석 표준 정의
        ************** 소스 수정 이력 ***********************************************
        *  date          		Modifier                Description
        *******************************************************************************
        *  2023.11.27     	    kmj	 	           		최초 생성
        *******************************************************************************
        */

        /************************************************************************************************
         * application 변수 선언 영역
        ************************************************************************************************/


        /***********************************************************************************************
        * Application EVENT 영역(onload, onbeforeclose)
        /***********************************************************************************************/
        this.Application_onload = function(obj,e)
        {
        	var objApp = nexacro.getApplication();
        	this.gvWorkFrame    = objApp.mainframe.WorkFrame;					//WorkForm

        	var windowUrl = window.location.href;
        	var urlPath = window.location.protocol + "//" + window.location.host;
        	var objEnv = nexacro.getEnvironment();

        	// service URL 설정
        	var objSrv = objEnv.services["svcurl"];

        	// 로그인 화면 open
        	this.gvWorkFrame.set_formurl("Frame::frameLogin.xfdl");
        };

        });
		this.checkLicense("");
        
        this.loadPreloadList();

    };
}
)();
