import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

type Store = {
	count: number;
	increment: () => void;
	decrement: () => Promise<void>;
};

// 正常写法
// const useStore = create<Store>()(set => ({
// 	count: 1,
// 	inc: () => set(state => ({ count: state.count + 1 }))
// }));

// 使用 persist 持久化写法
const useUserStore = create<Store>()(
	persist(
		(set, get) => ({
			count: 1,
			increment: () => {
				console.log(get().count);
				set(state => ({ count: state.count + 1 }));
			},
			decrement: async () => {
				// 模拟异步操作，这里使用 setTimeout
				await new Promise(resolve => setTimeout(resolve, 1000)); // 模拟1秒钟的延迟
				set(state => ({ count: state.count - 1 }));
			}
		}),
		{
			name: "user_storage"
			// storage: createJSONStorage(() => localStorage) // 默认值，可以不写
		}
	)
);

export default useUserStore;
