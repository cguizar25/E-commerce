import { useApiProvider } from "@common";
import { ApiHooks } from "@common/types/api";


export const useHook = (fn: (apiHooks: ApiHooks) => any) => {
  const { hooks } = useApiProvider();
  return fn(hooks);
}

export const useMutationHook = (
    hook: MutationHook
  ) => {
  
    return hook.useHook({
      fetch: (input: any) => {
        return hook.fetcher({
          input,
          fetch: async (input: any) => {
            return {
              data: JSON.stringify(input) + "_MODIFIED"
            }
          }
        })
      }
    })
  }