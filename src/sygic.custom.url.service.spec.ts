import {
    ACTION,
    ACTION_TYPE,
    TRUCK_ROUTING_TYPE,
    CustomUrlService
} from ".";

describe("SygicCustomUrlService", () => {
    let customUrlService: CustomUrlService;

    beforeEach(() => {
        customUrlService = new CustomUrlService();
    });

    it("should be defined", () => {
        expect(customUrlService).toEqual(jasmine.any(CustomUrlService));
    });

    describe("address", () => {
        it("should create show url", () => {
            const url: string = "com.sygic.aura://address|SVK|Bratislava|85101|Einsteinova|21|show";

            expect(customUrlService.showAddress(
                "SVK",
                "Bratislava",
                "85101",
                "Einsteinova",
                "21"
            )).toEqual(url);
        });

        it("should create drive url", () => {
            const url: string = "com.sygic.aura://address|SVK|Bratislava|85101|Einsteinova|21|drive";

            expect(customUrlService.driveAddress(
                "SVK",
                "Bratislava",
                "85101",
                "Einsteinova",
                "21"
            )).toEqual(url);
        });

        it("should create walk url", () => {
            const url: string = "com.sygic.aura://address|SVK|Bratislava|85101|Einsteinova|21|walk";

            expect(customUrlService.walkAddress(
                "SVK",
                "Bratislava",
                "85101",
                "Einsteinova",
                "21"
            )).toEqual(url);
        });
    });

    describe("coordinate", () => {
        it("shoud create show url", () => {
            const url: string = "com.sygic.aura://coordinate|15.06591|47.73341|show";
            expect(customUrlService.showCoordinates(15.06591, 47.73341)).toEqual(url);
        });

        it("shoud create drive url", () => {
            const url: string = "com.sygic.aura://coordinate|15.06591|47.73341|drive";
            expect(customUrlService.driveCoordinates(15.06591, 47.73341)).toEqual(url);
        });

        it("shoud create walk url", () => {
            const url: string = "com.sygic.aura://coordinate|15.06591|47.73341|walk";
            expect(customUrlService.walkCoordinates(15.06591, 47.73341)).toEqual(url);
        });
    });

    describe("coordinateaddr", () => {
        it("should create drive url", () => {
            const url: string = "com.sygic.aura://coordinateaddr|15.06591|47.73341|Customer John Smith|drive";
            expect(customUrlService.driveCoordinateaddr(
                15.06591,
                47.73341,
                "Customer John Smith"
            )).toEqual(url);
        });
    });

    describe("route", () => {
        it("should create route url", () => {
            const url: string = "com.sygic.aura://route|myitinerary.sif";
            expect(customUrlService.route("myitinerary.sif")).toEqual(url);
        });
    });

    describe("url", () => {
        it("should create url url", () => {
            const url: string = "com.sygic.aura://url|www.shmu.sk";
            expect(customUrlService.url("www.shmu.sk")).toEqual(url);
        });
    });

    describe("activate", () => {
        it("should create activate url", () => {
            const url: string = "com.sygic.aura://activate|2637-A356-563C-F156";
            expect(customUrlService.activate("2637-A356-563C-F156")).toEqual(url);
        });
    });

    describe("login", () => {
        it("should create login url", () => {
            const url: string = "com.sygic.aura://login|jsmith@company.com|$js!PsW";
            expect(customUrlService.login("jsmith@company.com", "$js!PsW")).toEqual(url);
        });
    });

    describe("update", () => {
        it("should create update url", () => {
            const url: string = "com.sygic.aura://update|fra";
            expect(customUrlService.update("fra")).toEqual(url);
        });
    });

    describe("mysygic", () => {
        it("should create mysygic url", () => {
            const url: string = "com.sygic.aura://mysygic";
            expect(customUrlService.mysygic()).toEqual(url);
        });
    });

    describe("mysygicproduct", () => {
        it("should create mysygicproduct url", () => {
            const url: string = "com.sygic.aura://mysygicproduct|22945";
            expect(customUrlService.mysygicproduct("22945")).toEqual(url);
        });
    });

    describe("mysygicbuy", () => {
        it("should create mysygicbuy url", () => {
            const url: string = "com.sygic.aura://mysygicbuy|22945";
            expect(customUrlService.mysygicbuy("22945")).toEqual(url);
        });
    });

    describe("restore", () => {
        it("should create restore url", () => {
            const url: string = "com.sygic.aura://restore";
            expect(customUrlService.restore()).toEqual(url);
        });
    });

    describe("gpslog", () => {
        it("should create gpslog url", () => {
            const url: string = "com.sygic.aura://gpslog|mytraveltest.nmea";
            expect(customUrlService.gpslog("mytraveltest.nmea")).toEqual(url);
        });
    });

    describe("truckSettings", () => {
        it("should create truckSettings url", () => {
            const url1: string = "com.sygic.aura://truckSettings|rou=car";
            const url2: string = "com.sygic.aura://truckSettings|rou=cmp";
            const url3: string = "com.sygic.aura://truckSettings|mxs=90&rou=tru";
            // tslint:disable-next-line:max-line-length
            const url4: string = "com.sygic.aura://truckSettings|mxs=110&len=8000&wid=2450&hei=3450&axw=1200&wei=15000&rou=tru";
            const url5: string = "com.sygic.aura://truckSettings|mxs=100&len=10000&wid=2450&hei=3200&axw=2200&wei=15550&rou=tru";

            expect(customUrlService.truckSettings({
                rou: TRUCK_ROUTING_TYPE.CAR
            })).toEqual(url1);

            expect(customUrlService.truckSettings({
                rou: TRUCK_ROUTING_TYPE.CAMPER
            })).toEqual(url2);

            expect(customUrlService.truckSettings({
                mxs: 90,
                rou: TRUCK_ROUTING_TYPE.TRUCK
            })).toEqual(url3);

            expect(customUrlService.truckSettings({
                mxs: 110,
                // tslint:disable-next-line:object-literal-sort-keys
                len: 8000,
                wid: 2450,
                hei: 3450,
                axw: 1200,
                wei: 15000,
                rou: TRUCK_ROUTING_TYPE.TRUCK
            })).toEqual(url4);

            expect(customUrlService.truckSettings({
                mxs: 100,
                // tslint:disable-next-line:object-literal-sort-keys
                len: 10000,
                wid: 2450,
                hei: 3200,
                axw: 2200,
                wei: 15550,
                rou: TRUCK_ROUTING_TYPE.TRUCK
            })).toEqual(url5);
        });
    });

    describe("back_button", () => {
        it("should create back_button url", () => {
            const url: string = "com.sygic.aura://back_button|com.android.chrome";
            expect(customUrlService.backButton("com.android.chrome")).toEqual(url);
        });
    });

    describe("settingsOverwrite", () => {
        it("should create settingsOverwrite url", () => {
            const url: string = "com.sygic.aura://settingsOverwrite|%2Fsdcard%2Fsettings_overload.ini";
            expect(customUrlService.settingsOverwrite("/sdcard/settings_overload.ini")).toEqual(url);
        });
    });

    describe("deviceCode", () => {
        it("should create deviceCode url", () => {
            const url: string = "com.sygic.aura://deviceCode";
            expect(customUrlService.deviceCode()).toEqual(url);
        });
    });

    describe("multipleActions", () => {
        it("should create url with multiple actions", () => {
            const url: string = "com.sygic.aura://login|username|password&&&back_button|package";

            expect(customUrlService.multipleActions([{
                action: ACTION.LOGIN,
                args: ["username", "password"]
            }, {
                action: ACTION.BACK_BUTTON,
                args: ["package"]
            }])).toEqual(url);
        });
    });
});
