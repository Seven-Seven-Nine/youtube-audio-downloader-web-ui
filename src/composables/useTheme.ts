import { ref, type Ref, onMounted } from "vue";

type Theme = "light" | "dark" | "auto";

export function useTheme() {
    const theme: Ref<Theme> = ref<Theme>("dark");

    if (localStorage.getItem("user-theme")) theme.value = localStorage.getItem("user-theme") as Theme;

    function getSystemTheme(): "dark" | "light" {
        return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    };

    function updateDOM(): void {
        const root: HTMLElement = document.documentElement;
        const activeTheme: "light" | "dark" = theme.value === "auto" ? getSystemTheme() : theme.value;

        if (activeTheme === "dark") {
            root.classList.add("dark");
            root.classList.remove("light")
        } else {
            root.classList.add("light");
            root.classList.remove("dark");
        }
    };

    // Ручное переключение темы
    function setTheme(newTheme: Theme): void {
        theme.value = newTheme;
        localStorage.setItem("user-theme", newTheme);
        updateDOM();
    }

    // Ручное автоматическое переключение темы
    function nextTheme(): void {
        const currentActive: "light" | "dark" = theme.value === "auto" ? getSystemTheme() : theme.value;
        setTheme(currentActive === "dark" ? "light" : "dark");
    }

    function isDark(): boolean {
        return theme.value === "auto" ? getSystemTheme() === "dark" : theme.value === "dark";
    }

    onMounted((): void => {
        updateDOM();
    });

    return {
        theme,
        setTheme,
        getSystemTheme,
        nextTheme,
        isDark
    };
}

export { type Theme };