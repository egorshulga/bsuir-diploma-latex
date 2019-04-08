// timeutils.ts
export function dateCompare(a: Date, b: Date): number {
    if (a < b)
        return -1;
    else if (a > b)
        return 1;
    else return 0;
}

export function areDifferentDays(a: Date, b: Date): boolean {
    if (a.getDate() != b.getDate()) return true;
    else if (a.getMonth() != b.getMonth()) return true;
    else if (a.getFullYear() != b.getFullYear()) return true;
    else return false;
}

export function formatDate(date: Date): string {
    const weekdays = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
    const monthsInGenitiveCase = ["января", "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря"];
    return `${weekdays[date.getDay()]}, ${date.getDate()} ${monthsInGenitiveCase[date.getMonth()]}`;
}
