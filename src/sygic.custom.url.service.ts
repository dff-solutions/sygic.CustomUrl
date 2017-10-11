export enum ACTION_TYPE {
    SHOW = "show",
    DRIVE = "drive",
    WALK = "walk"
}

export enum ACTION {
    ADDRESS = "address",
    COORDINATE = "coordinate",
    ROUTE = "route",
    URL = "url",
    MYSYGIC = "mysygic",
    MYSYGICPRODUCT = "mysygicproduct",
    MYSYGICBUY = "mysygicbuy",
    RESTORE = "restore",
    TRUCKSETTINGS = "truckSettings",
    ACTIVATE = "activate",
    BACK_BUTTON = "back_button",
    COORDINATEADDR = "coordinateaddr",
    DEVICECODE = "deviceCode",
    GPSLOG = "gpslog",
    LOGIN = "login",
    SETTINGSOVERWRITE = "settingsOverwrite",
    UPDATE = "update"
}

export enum TRUCK_ROUTING_TYPE {
    CAMPER = "cmp",
    CAR = "car",
    TRUCK = "tru",
    VAN = "van"
}

export interface ITruckSettings {
    [key: string]: number | TRUCK_ROUTING_TYPE;
    mxs?: number; // defines maximum speed in km/h e.g. mxs=90
    wei?: number; // defines total weight in kilograms e.g. wei=15000
    axw?: number; // defines maximum axle weight in kilograms e.g. axw=1200
    len?: number; // defines length in milimeters e.g. len=7800
    wid?: number; // defines width in milimeters e.g. wid=2450
    hei?: number; // defines height in milimeters e.g. hei=3450
    rou?: TRUCK_ROUTING_TYPE; // defines routing type, where the possible values are:
                              // car, tru(truck), cmp(camper), van e.g.rou = tru
}

export const SCHEME: string = "com.sygic.aura";
export const ACTIONS_SEPARATOR: string = "&&&";
export const OPTIONS_SEPARATOR: string = "|";
export const TRUCK_SETTINGS_SEPARATOR: string = "&";

/**
 * Service that creates sygic custom urls
 */
export class CustomUrlService {
    /**
     * Get url to show address on map
     *
     * @param {string} country Country or iso code.
     * @param {string} city City.
     * @param {string} postal Postal code.
     * @param {string} street Street.
     * @param {string} houseNumber House number.
     *
     * @returns {string} Url;
     */
    public showAddress(
        country: string,
        city: string,
        postal: string,
        street: string,
        houseNumber: string): string {

        return this.genCustomUrl(
            ACTION.ADDRESS,
            country,
            city,
            postal,
            street,
            houseNumber,
            ACTION_TYPE.SHOW
        );
    }

    /**
     * Get url to drive to an address
     *
     * @param {string} country Country or iso code.
     * @param {string} city City.
     * @param {string} postal Postal code.
     * @param {string} street Street.
     * @param {string} houseNumber House number.
     *
     * @returns {string} Url;
     */
    public driveAddress(
        country: string,
        city: string,
        postal: string,
        street: string,
        houseNumber: string): string {

        return this.genCustomUrl(
            ACTION.ADDRESS,
            country,
            city,
            postal,
            street,
            houseNumber,
            ACTION_TYPE.DRIVE
        );
    }

    /**
     * Get url to walk to an address
     *
     * @param {string} country Country or iso code.
     * @param {string} city City.
     * @param {string} postal Postal code.
     * @param {string} street Street.
     * @param {string} houseNumber House number.
     *
     * @returns {string} Url;
     */
    public walkAddress(
        country: string,
        city: string,
        postal: string,
        street: string,
        houseNumber: string): string {

        return this.genCustomUrl(
            ACTION.ADDRESS,
            country,
            city,
            postal,
            street,
            houseNumber,
            ACTION_TYPE.WALK
        );
    }

    /**
     * Show coordinates on map
     * @param {number} lon Longitude.
     * @param {number} lat Latitude
     *
     * @returns {string} Url;
     */
    public showCoordinates(lon: number, lat: number): string {
        return this.genCustomUrl(
            ACTION.COORDINATE,
            lon,
            lat,
            ACTION_TYPE.SHOW
        );
    }

    /**
     * Drive to coordinates
     * @param {number} lon Longitude.
     * @param {number} lat Latitude
     *
     * @returns {string} Url;
     */
    public driveCoordinates(lon: number, lat: number): string {
        return this.genCustomUrl(
            ACTION.COORDINATE,
            lon,
            lat,
            ACTION_TYPE.DRIVE
        );
    }

    /**
     * Walk to coordinates
     * @param {number} lon Longitude.
     * @param {number} lat Latitude
     *
     * @returns {string} Url;
     */
    public walkCoordinates(lon: number, lat: number): string {
        return this.genCustomUrl(
            ACTION.COORDINATE,
            lon,
            lat,
            ACTION_TYPE.WALK
        );
    }

    /**
     * Drive to coordinates with defining address description
     * @param {number} lon Longitude.
     * @param {number} lat Latitude
     * @param {string} desc Description.
     *
     * @returns {string} Url;
     */
    public driveCoordinateaddr(lon: number, lat: number, desc: string): string {
        return this.genCustomUrl(ACTION.COORDINATEADDR, lon, lat, desc, ACTION_TYPE.DRIVE);
    }

    /**
     * Loads json itinerary
     * @param {string} route sif or json
     *
     * @returns {string} Url;
     */
    public route(route: string): string {
        return this.genCustomUrl(ACTION.ROUTE, route);
    }

    /**
     * opens web page directly in navigation
     * @param {string} webpage Page to open.
     *
     * @returns {string} Url;
     */
    public url(webpage: string): string {
        return this.genCustomUrl(ACTION.URL, webpage);
    }

    /**
     * activate license with product code
     * @param {string} productCode Product code
     *
     * @returns {string} Url;
     */
    public activate(productCode: string): string {
        return this.genCustomUrl(ACTION.ACTIVATE, productCode);
    }

    /**
     * Start navigation and login with username
     *
     * @param {string} user User name.
     * @param {password} password Password.
     *
     * @returns {string} Url;
     */
    public login(user: string, password: string): string {
        return this.genCustomUrl(ACTION.LOGIN, user, password);
    }

    /**
     * Update specific map or all maps.
     * Note: the call starts downloading maps immediately
     * but removes old maps with the application restart.
     * This means that at the certain moment both maps
     * are present in your filesystem, so your memory limits
     * can be hit.
     * @param {string} map Map to update or all.
     *
     * @returns {string} Url;
     */
    public update(map: string): string {
        return this.genCustomUrl(ACTION.UPDATE, map);
    }

    /**
     * Show sygic products' shop.
     *
     * @returns {string} Url;
     */
    public mysygic(): string {
        return this.genCustomUrl(ACTION.MYSYGIC);
    }

    /**
     * Show product detail from shop.
     *
     * @param productId Product id.
     *
     * @returns {string} Url;
     */
    public mysygicproduct(productId: string): string {
        return this.genCustomUrl(ACTION.MYSYGICPRODUCT, productId);
    }

    /**
     * Buy a license for a product
     *
     * @param {string} productId Product id.
     *
     * @returns {string} Url;
     */
    public mysygicbuy(productId: string): string {
        return this.genCustomUrl(ACTION.MYSYGICBUY, productId);
    }

    /**
     * Restore all purchases
     *
     *
     * @returns {string} Url;
     */
    public restore(): string {
        return this.genCustomUrl(ACTION.RESTORE);
    }

    /**
     * Play gps nmea log from Res/gpslog
     *
     * @param {string} nmeafile
     * @returns {string} Url;
     */
    public gpslog(nmeafile: string): string {
        return this.genCustomUrl(ACTION.GPSLOG, nmeafile);
    }

    /**
     * Control truck settings
     * @param {ITruckSettings} truckSettings Truck settings
     * @returns {string} Url;
     */
    public truckSettings(truckSettings: ITruckSettings): string {
        const options: string = Object.keys(truckSettings)
            .map((key: string): any => `${key}=${truckSettings[key]}`)
            .join(TRUCK_SETTINGS_SEPARATOR);

        return this.genCustomUrl(ACTION.TRUCKSETTINGS, options);
    }

    /**
     * Define back button behavior
     * @param {string} applicationIdentifier
     * @returns {string} Url;
     */
    public backButton(applicationIdentifier: string): string {
        return this.genCustomUrl(ACTION.BACK_BUTTON, applicationIdentifier);
    }

    /**
     * Overwrite app settings.
     *
     * @param {string} filePath File path of settings.
     * @returns {string} Url;
     */
    public settingsOverwrite(filePath: string): string {
        return this.genCustomUrl(ACTION.SETTINGSOVERWRITE, encodeURIComponent(filePath));
    }

    /**
     * Get device code
     *
     * @returns {string} Url;
     */
    public deviceCode(): string {
        return this.genCustomUrl(ACTION.DEVICECODE);
    }

    public multipleActions(actions: [{
        action: ACTION,
        args: any[]
    }]): string {
        const path: string = this.prepareActions(actions);
        return this.getCustomUrl(path);
    }

    /**
     * Generates a sygic custom url for given action and options.
     *
     * @param {action} action Url action
     * @param {any} args Options for action
     *
     * @returns {string} Url;
     */
    private genCustomUrl(action: ACTION, ...args: any[]): string {
        const options: string = this.prepareAction(action, ...args);
        return this.getCustomUrl(options);
    }

    /**
     * Get custom url for path.
     * @param {string} path Path of URL.
     * @returns {string} Url;
     */
    private getCustomUrl(path: string): string {
        return `${SCHEME}://${path}`;
    }

    /**
     * Prepare multiple actions
     *
     * @param {{ACTION, any[]}[]} actions Actions to prepare
     * @returns {string} Actions prepared for custom url
     */
    private prepareActions(actions: [{
        action: ACTION,
        args: any[]
    }]): string {
        return actions
            .map(({action, args}) => this.prepareAction(action, ...args))
            .join(ACTIONS_SEPARATOR);
    }

    /**
     * Prepare action for url;
     *
     * @param {ACTION} action Url action.
     * @param {any[]} args Args for custom url. including action.
     * @returns {string} Args prepared for url.
     */
    private prepareAction(action: ACTION, ...args: any[]): string {
        args.unshift(action);
        return this.prepareOptions(args);
    }

    /**
     * Prepare options for url;
     *
     * @param {any[]} args Args for custom url. including action.
     * @returns {string} Args prepared for url.
     */
    private prepareOptions(args: any[]): string {
        return args
            .filter((arg): boolean => arg !== null && arg !== undefined)
            // .map((arg) => encodeURIComponent(arg))
            .join(OPTIONS_SEPARATOR);
    }
}
