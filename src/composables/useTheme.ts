import { ref, type Ref, onMounted, onUnmounted } from "vue";

type Theme = "light" | "dark" | "auto";

export function useTheme() {
    const theme: Ref<Theme> = ref<Theme>((localStorage.getItem("user-theme") as Theme) || "auto");
    
    const mediaQuery: MediaQueryList = window.matchMedia("(prefers-color-scheme: dark)");

    function getSystemTheme(): "dark" | "light" {
        return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    };

    function updateDOM(): void {
        const root: HTMLElement = document.documentElement;
        const activeTheme: "light" | "dark" = theme.value === "auto" ? getSystemTheme() : theme.value;

        console.log(`Текущая тема: ${theme.value}`);

        if (activeTheme === "dark") {
            root.classList.add("dark");
            root.classList.remove("light")
        } else {
            root.classList.add("light");
            root.classList.remove("dark");
        }
    };

    // Автоматическая смена темы через браузер
    function handleSystemThemeChange(): void {
        if (theme.value === "auto") {
            updateDOM();
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
        mediaQuery.addEventListener("change", handleSystemThemeChange);
    });

    onUnmounted((): void => {
        mediaQuery.removeEventListener("change", handleSystemThemeChange);
    });

    return {
        theme,
        setTheme,
        nextTheme,
        isDark
    };
}