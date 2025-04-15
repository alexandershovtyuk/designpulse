# 📘 DesignFlow_TeamDashboard_FinalSpec_v4.md

---

## 🧱 Общая структура командного дашборда

**Название:** Team Dashboard  
**Назначение:** Центральная панель для анализа спринта, прогресса команды и состояния задач.  
**Основные пользователи:** Менеджеры, дизайн-лиды, продакт-менеджеры  
**User Flow:** на основе `DesignFlow_UserFlow_Manager_Velocity_v6.md`  
**Команды:** переключение между командами и спринтами  
**Формат:** 1920×1080

---

## 📊 Описание виджетов и блоков

### 🎯 Velocity (Bar Chart)
- Показывает историю выполненных задач по спринтам.
- Сравнение: Committed / Completed
- Tooltip при **hover** показывает:
  ```
  Sprint: DART FDS Sprint 2  
  Period: 02.04.25 • 16.04.25  
  Committed: 36 SP  
  Completed: 43 SP  
  Velocity avg: 30.6  
  Predictability: 78.8
  ```
- **Клик** по бару Velocity раскрывает задачи спринта:
  - Верхний бар → задачи, запланированные
  - Нижний бар → задачи, завершённые

### 🎯 Sprint Predictability (Metric Card)
- Формула: Completed SP / Committed SP * 100
- Пример: `86% hit rate`
- Подпись: “Avg. planned vs. complete match”

### 🎯 Recommendation (Info Box)
- Значение: количество SP, рекомендуемое для следующего спринта.
- Пример: `► 28 SP suggested`

---

## ⏱️ Метрики эффективности

### 🎯 Avg. Cycle Time / Lead Time (Text + Chart)
- Cycle Time: от начала работы до завершения
- Lead Time: от создания до завершения

### 🎯 Time in Status (Bar Chart)
- Распределение времени задач по статусам: To Do, In Progress, In Review, Dev Review, Handoff

### 🎯 SLA & Overdue
- SLA % задач, закрытых в срок
- Overdue: количество просроченных задач

---

## 📋 Task Breakdown Table

### Функциональность:
- Чекбоксы по типам задач: Design / Task
- Фильтрация по статусу: `Segmented Control`
- Таблица с колонками: SP, ID, Summary, Assignee, Type, Created/Updated

### Под таблицей:
- Scope Change
- Completion Ratio
- Unassigned Tasks
- Overdue Tasks

---

## 🧑‍💻 Designer View (по каждому дизайнеру)

### Верхняя панель:
- Выбор дизайнера
- Даты спринта
- Задач: X, Завершено: Y, Review cycles: Z

### Метрики:
- Cycle Time / Lead Time
- Time in Status
- Overdue / SLA
- Workload per Day (GitHub style grid)
- Review Participation
- Avg SP per Task
- Annotation Rate (2 вида)

---

## 📂 Поведение элементов

- Hover по графикам → отображение tooltip
- Клик по Velocity → раскрытие задач по спринту
- Клик по Sprint → История Velocity
- Клик по задаче → переход в Jira
- “Send to PDF” → экспорт текущего состояния
- “Send Slack” → отправка краткого отчета

---

## 📌 Общее

- Все графики и блоки должны быть видны внутри 1920×1080
- Дизайн должен быть лаконичным, но информативным
- Tooltip обязателен для всех показателей