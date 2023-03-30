const isBrowser = typeof window !== "undefined";

export const onClickHash = (e) => {
    if (!(isBrowser && e)) {
        return;
    }
    e.preventDefault();

    const targetHash = e.target.getAttribute('href');

    document.querySelector(targetHash).scrollIntoView({
        behavior: 'smooth'
    });
    history.replaceState({}, '', e.target.href);
}

export const setTheme = (switchToDarkTheme) => {
    if (switchToDarkTheme) {
        document.documentElement.classList.add('dark');
    } else {
        document.documentElement.classList.remove('dark');
    }
}