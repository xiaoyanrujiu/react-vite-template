import { create } from "zustand";
import { persist } from "zustand/middleware";

type Store = {
	name: string;
};

const menuStore = create<Store>()(
	persist(
		(set, get) => ({
			name: "菜单"
		}),
		{
			name: "menu_storage"
		}
	)
);

export default menuStore;
