
# 🧩 Компонентная карта (ComponentMap) v2 — Design Flow

**Цель:** Полный список UI-компонентов для Team Dashboard с разделением на переиспользуемые (@core/ui), виджеты (@core/ui/widgets) и UI-библиотеку (shadcn/ui).

**Дата:** 2025-04-11  
**Версия:** v7

---

## ✅ @core/ui — переиспользуемые базовые компоненты

| Компонент            | Назначение                            | Используется в секциях               |
|----------------------|----------------------------------------|--------------------------------------|
| `TooltipTemplate`    | Универсальный тултип                   | Все графики, карточки                |
| `SkeletonBlock`      | Шиммер на загрузку                     | Все таблицы и графики                |
| `EmptyStateBlock`    | Заглушки при отсутствии данных         | Таблица задач, блок метрик           |
| `ToastGlobal`        | Глобальные уведомления                 | Ошибки, SLA, dev-mode                |
| `ViewModeToggle`     | Переключатель Designer/Simplified View| В верхней панели                     |

---

## 📊 @core/ui/widgets — аналитические и визуальные блоки

| Компонент               | Назначение                                      | Источник данных     |
|-------------------------|--------------------------------------------------|----------------------|
| `VelocityChart`         | Барчарт по Velocity с деталями                  | Спринты              |
| `PredictabilityCard`    | KPI по предсказуемости                         | Спринты              |
| `CycleTimeChart`        | Визуализация времени в статусах                 | История задач        |
| `ComplexityChart`       | Распределение задач по размеру и успешности     | Story Points         |
| `TaskTable`             | Таблица задач команды                          | Issues (моки)        |
| `TaskFilterPanel`       | Фильтрация задач по полям                      | Local + config       |
| `SLAWidget`             | Покрытие SLA                                   | Time in Status       |
| `StatusBreakdownChart`  | Кол-во задач по статусам                       | Issues               |

---

## 💠 Используемые компоненты из UI Kit (shadcn/ui)

| Компонент            | Назначение                           |
|----------------------|---------------------------------------|
| `DropdownMenu`       | Выбор диапазона, фильтров            |
| `Switch`             | Тоггл-переключатели                  |
| `Button`             | Кнопки действия (экспорт, обновление)|
| `Dialog`             | Popup с объяснением или настройками  |
| `Tabs`               | Переключатели между категориями       |

---

## ⚙️ Стратегия масштабирования

- Все повторяющиеся визуализации формализуются как **виджеты**;
- Структура `@core/ui/widgets` масштабируется под новые метрики;
- Перед созданием новых компонентов — проверка наличия аналога в shadcn/ui;
- Все блоки используют переменные Tailwind и конфигурации проекта.



---


# 📒 Спецификация компонентов интерфейса Design Flow

**Версия:** v1  
**Дата:** 2025-04-11

---

## 📊 VelocityChart

```ts
type VelocityChartProps = {
  sprints: {
    id: string;
    name: string;
    startDate: string;
    endDate: string;
    committed: number;
    completed: number;
    predictability: number;
  }[];
  onBarClick?: (sprintId: string) => void;
  loading?: boolean;
  error?: boolean;
  viewMode?: 'compact' | 'detailed';
};
```

**Поведение:**
- График с двумя барами на каждый спринт (committed vs completed SP);
- Hover → отображает tooltip с подробной статистикой;
- Click по bar → вызывает `onBarClick(sprintId)`;
- При `loading=true` отображается shimmer-график;
- При `error=true` — тост `ToastGlobal` типа `error`;
- При пустом массиве `sprints` — `EmptyStateBlock`.

**Используемые компоненты:**
- `Recharts.BarChart`, `TooltipTemplate`, `SkeletonBlock`, `EmptyStateBlock`, `ToastGlobal`

---

*Документ будет пополняться спецификациями других компонентов (PredictabilityCard, TaskTable и т.д.)*

---

## 📈 PredictabilityCard

```ts
type PredictabilityCardProps = {
  value: number;         // 78.4 (%)
  average?: number;      // 82.1 (%)
  delta?: number;        // -3.7 (%)
  status?: 'good' | 'warning' | 'critical';
  tooltip?: string;
  loading?: boolean;
  error?: boolean;
};
```

**Поведение:**
- Отображает крупное число (`value`) с подписью "Predictability";
- Цвет индикатора и дельта (вверх/вниз) зависят от `status`;
- Hover → отображает `tooltip` (настраиваемый текст);
- При `loading = true` отображается `SkeletonBlock`;
- При `error = true` — `ToastGlobal` с типом `error`.

**Используемые компоненты:**
- `MetricCard` (внутренний переиспользуемый компонент);
- `TooltipTemplate`;
- `SkeletonBlock`, `ToastGlobal`

---

## ⏱️ CycleTimeChart

```ts
type CycleTimeChartProps = {
  data: {
    id: string;
    sprintName: string;
    statusTimes: {
      status: string;
      durationHours: number;
    }[];
    totalHours: number;
  }[];
  loading?: boolean;
  error?: boolean;
  onBarClick?: (sprintId: string) => void;
};
```

**Поведение:**
- Стек-гистограмма (stacked bar chart) отображает длительность задач по статусам внутри каждого спринта;
- Цвет каждого сегмента соответствует статусу задачи;
- Hover на сегмент → tooltip с `status`, `hours`, `%`;
- Click на bar (или сегмент) → `onBarClick(sprintId)`;
- `SkeletonBlock` при загрузке;
- `EmptyStateBlock` при отсутствии данных;
- `ToastGlobal` при ошибке загрузки.

**Используемые компоненты:**
- `Recharts.BarChart` (stacked mode), `TooltipTemplate`, `SkeletonBlock`, `EmptyStateBlock`, `ToastGlobal`

---

## 📋 TaskTable

```ts
type TaskTableProps = {
  tasks: DesignTask[];
  loading?: boolean;
  error?: boolean;
  filters?: {
    status?: string[];
    assignee?: string[];
    sprint?: string;
  };
  onExport?: () => void;
  enableSorting?: boolean;
};
```

**Поведение:**
- Таблица с колонками: `key`, `summary`, `status`, `assignee`, `storyPoints`, `epic`;
- Поддерживает базовую сортировку (по ключу, дате, SP);
- Поддерживает inline-фильтры и pagination (10–20 записей на страницу);
- Кнопка экспорта (`onExport`) — выгрузка CSV/PDF;
- Пустое состояние — `EmptyStateBlock`;
- Ошибка — `ToastGlobal`;
- Загрузка — `SkeletonBlock` с таблицей-заглушкой.

**Используемые компоненты:**
- `shadcn/ui` → `Table`, `Dropdown`, `Pagination`, `Button`;
- `SkeletonBlock`, `EmptyStateBlock`, `ToastGlobal`

---

## 📊 ComplexityChart

```ts
type ComplexityChartProps = {
  data: {
    storyPoint: number; // 1, 2, 3, 5, 8, 13
    total: number;      // всего задач с таким SP
    completed: number;  // завершённых задач с таким SP
  }[];
  loading?: boolean;
  error?: boolean;
};
```

**Поведение:**
- Гистограмма (Bar Chart) с группами по `storyPoint`;
- Для каждой группы два бара: общее количество и завершённые;
- Tooltip отображает подробности по каждой группе:
  ```
  SP: 5
  Total: 8
  Completed: 5 (62.5%)
  ```
- Поддержка состояния загрузки (`SkeletonBlock`), ошибки (`ToastGlobal`) и пустого состояния (`EmptyStateBlock`).

**Используемые компоненты:**
- `Recharts.BarChart`;
- `TooltipTemplate`, `SkeletonBlock`, `EmptyStateBlock`, `ToastGlobal`

---

## 📈 SLAWidget

```ts
type SLAWidgetProps = {
  data: {
    sprintId: string;
    sprintName: string;
    compliancePercent: number; // 93.4
    slaTargetHours: number;   // 72
    averageHours: number;     // 63
  }[];
  slaThreshold?: number; // для предупреждений
  loading?: boolean;
  error?: boolean;
};
```

**Поведение:**
- Отображает список или барчарт с % выполнения SLA;
- При падении ниже `slaThreshold` — подсветка баров или вывод иконки предупреждения;
- Tooltip показывает `Среднее время`, `Целевое`, `% выполнения`;
- Возможна интеграция с `ToastGlobal` при нарушениях;
- `SkeletonBlock` при загрузке, `EmptyStateBlock` — если данных нет, `ToastGlobal` — при ошибке.

**Используемые компоненты:**
- `BarChart`, `TooltipTemplate`, `SkeletonBlock`, `EmptyStateBlock`, `ToastGlobal`
