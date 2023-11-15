import Handles from "@arcgis/core/core/Handles";
import { watch } from "@arcgis/core/core/reactiveUtils";
import BasemapToggleVM from "@arcgis/core/widgets/BasemapToggle/BasemapToggleViewModel";
import React from "react";

export function useBaseMapToggleModel(props: __esri.BasemapToggleViewModelProperties) {
    const [basemapToggleVM, setBasemapToggleVm] =
        React.useState<__esri.BasemapToggleViewModel | null>(null);

    const [state, setState] = React.useState<BasemapToggleVM["state"]>("disabled");

    React.useEffect(() => {
        const basemapToggleModel = new BasemapToggleVM(props);
        setBasemapToggleVm(basemapToggleModel);

        return () => {
            basemapToggleModel.destroy();
        };
    }, [props]);

    React.useEffect(() => {
        if (!basemapToggleVM) return () => {};

        const handles = new Handles();

        addHandlers({ basemapToggleVM, handles, onStateChange: setState });

        return () => {
            handles.removeAll();
            handles.destroy();
        };
    }, [basemapToggleVM]);

    return {
        state,
        toggle: () => {
            basemapToggleVM?.toggle();
        }
    };
}

interface HandlerSetup {
    basemapToggleVM: __esri.BasemapToggleViewModel;
    handles: Handles;
    onStateChange: (state: BasemapToggleVM["state"]) => void;
}
function addHandlers({ basemapToggleVM, handles, onStateChange }: HandlerSetup) {
    handles.removeAll();

    handles.add([
        watch(
            () => basemapToggleVM.state,
            (state: BasemapToggleVM["state"]) => onStateChange?.call(null, state),
            { initial: true }
        )
    ]);
}
