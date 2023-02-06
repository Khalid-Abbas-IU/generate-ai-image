import {
    createContext,
    useMemo, useRef,
    useState
} from 'react';
import create from 'zustand/vanilla';
import {subscribeWithSelector} from 'zustand/middleware';
export const CanvasStore = createContext(null);
export const useStore = create(subscribeWithSelector(() => ({
    canvasSaving: false
})));
export const StoreContext = ({children}) => {
    const [activeCanvas, setActiveCanvas] = useState(null);
    const [activeObject, setActiveObject] = useState(null);
    const [currentAction, setCurrentAction] = useState("");

    const canvasProviderValues = useMemo(
        () => ({
            activeCanvas, setActiveCanvas,
            currentAction, setCurrentAction,
            activeObject, setActiveObject
        }), [
            activeCanvas, setActiveCanvas,
            currentAction, setCurrentAction,
            activeObject, setActiveObject
        ]
    );

    return (
        <CanvasStore.Provider value = {{ ...canvasProviderValues}} >
            { children }
        </CanvasStore.Provider>
    );
};
