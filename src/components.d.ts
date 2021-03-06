/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface AppGuitaristInfo {
        "person": any;
    }
    interface AppHome {
    }
    interface AppInfoModal {
        "country"?: string;
    }
    interface AppMap {
    }
    interface AppRoot {
    }
}
declare global {
    interface HTMLAppGuitaristInfoElement extends Components.AppGuitaristInfo, HTMLStencilElement {
    }
    var HTMLAppGuitaristInfoElement: {
        prototype: HTMLAppGuitaristInfoElement;
        new (): HTMLAppGuitaristInfoElement;
    };
    interface HTMLAppHomeElement extends Components.AppHome, HTMLStencilElement {
    }
    var HTMLAppHomeElement: {
        prototype: HTMLAppHomeElement;
        new (): HTMLAppHomeElement;
    };
    interface HTMLAppInfoModalElement extends Components.AppInfoModal, HTMLStencilElement {
    }
    var HTMLAppInfoModalElement: {
        prototype: HTMLAppInfoModalElement;
        new (): HTMLAppInfoModalElement;
    };
    interface HTMLAppMapElement extends Components.AppMap, HTMLStencilElement {
    }
    var HTMLAppMapElement: {
        prototype: HTMLAppMapElement;
        new (): HTMLAppMapElement;
    };
    interface HTMLAppRootElement extends Components.AppRoot, HTMLStencilElement {
    }
    var HTMLAppRootElement: {
        prototype: HTMLAppRootElement;
        new (): HTMLAppRootElement;
    };
    interface HTMLElementTagNameMap {
        "app-guitarist-info": HTMLAppGuitaristInfoElement;
        "app-home": HTMLAppHomeElement;
        "app-info-modal": HTMLAppInfoModalElement;
        "app-map": HTMLAppMapElement;
        "app-root": HTMLAppRootElement;
    }
}
declare namespace LocalJSX {
    interface AppGuitaristInfo {
        "person"?: any;
    }
    interface AppHome {
    }
    interface AppInfoModal {
        "country"?: string;
    }
    interface AppMap {
    }
    interface AppRoot {
    }
    interface IntrinsicElements {
        "app-guitarist-info": AppGuitaristInfo;
        "app-home": AppHome;
        "app-info-modal": AppInfoModal;
        "app-map": AppMap;
        "app-root": AppRoot;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "app-guitarist-info": LocalJSX.AppGuitaristInfo & JSXBase.HTMLAttributes<HTMLAppGuitaristInfoElement>;
            "app-home": LocalJSX.AppHome & JSXBase.HTMLAttributes<HTMLAppHomeElement>;
            "app-info-modal": LocalJSX.AppInfoModal & JSXBase.HTMLAttributes<HTMLAppInfoModalElement>;
            "app-map": LocalJSX.AppMap & JSXBase.HTMLAttributes<HTMLAppMapElement>;
            "app-root": LocalJSX.AppRoot & JSXBase.HTMLAttributes<HTMLAppRootElement>;
        }
    }
}
