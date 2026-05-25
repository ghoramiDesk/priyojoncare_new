import { U as reactExports } from "./worker-entry-Be3-PIiG.js";
function useCallbackRef(callback) {
  const callbackRef = reactExports.useRef(callback);
  reactExports.useEffect(() => {
    callbackRef.current = callback;
  });
  return reactExports.useMemo(() => (...args) => callbackRef.current?.(...args), []);
}
export {
  useCallbackRef as u
};
