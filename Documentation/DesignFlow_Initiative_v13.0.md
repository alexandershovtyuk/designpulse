# Паспорт инициативы

## 🧠 Design Flow: сервис производительности дизайн-команд

Название проекта: Design Flow Analytics

Тип: Внутренний аналитический веб-сервис

Авторы: Александр Шовтюк, Ярослав Кирсанов

Статус: Черновик концепта

### Цель проекта:
Создание системы сквозного анализа и визуализации дизайнерских задач из Jira, ориентированной на выявление узких мест, прогнозирование загрузки и повышение прозрачности DesignOps-процессов в продуктовых командах. Сервис должен выступать как аналитический слой, агрегирующий данные из разных проектов и нормализующий их для построения сравнительных и исторических дашбордов.

### Обоснование инициативы:
Команды работают с задачами дизайна в Jira, но без унификации: статусы, типы задач и подходы к спринтам различны. Это делает невозможным эффективный сбор, анализ и сравнение данных. Отчёты формируются вручную, не системно, часто без единых критериев оценки. Это снижает управляемость процесса, замедляет принятие решений и искажает представление о загрузке дизайнеров.

### Предпосылки

1. **Рост масштабов компании:**

- Увеличение количества продуктовых команд привело к фрагментации процессов. Дизайн-задачи управляются локально, что затрудняет кросс-командную координацию и обмен лучшими практиками.

2. **Разнородные методологии работы:**

- Команды используют разные подходы (Scrum, Kanban), но этапы дизайн-процессов (например, «проектирование», «ревью», «хендоф») универсальны. Это создает возможность для стандартизации метрик.

3. **Ручная обработка данных:**

- Отсутствие автоматизации сбора данных о дизайн-задачах приводит к потере времени и ошибкам в отчетности.

4. **Запросы от менеджмента:**

- Собственники бизнеса, дизайн-менеджеры и продуктовые оунеры отмечают необходимость в инструментах для прогнозирования сроков и оценки загрузки команд, увеличения прозрачности в работе.

5. **Наличие исторических данных в Jira:**

- Наличие структурированных данных по задачам типа «design» (статусы, время выполнения, метки) позволяет построить аналитику без глубокой перестройки текущих процессов.

### Стратегическое соответствие

Инициатива напрямую поддерживает ключевые стратегические цели компании:

1. *Повышение операционной эффективности:*

- Автоматизация рутинных процессов сократит временные затраты и снизит риски человеческих ошибок, что соответствует стратегии оптимизации ресурсов.

2. *Ускорение time-to-market:*

- Выявление «узких мест» в дизайн-процессах позволит сократить цикл разработки продуктов, что критично для конкуренции на рынке брокерских услуг.

3. *Цифровая трансформация:*

- Внедрение data-инструментов для управления процессами соответствует курсу на цифровизацию и переход к data-driven культуре принятия решений.

4. *Стандартизация процессов:*

- Унификация метрик и отчетности по дизайну укрепит корпоративные стандарты, что важно для масштабирования бизнеса.

5. *Клиентоориентированность:*

- Более предсказуемые сроки реализации дизайн-задач повысят качество продуктов, что позитивно скажется на удовлетворенности клиентов.

6. *Сокращение затрат на дизайн-задачи:*

- Оптимизация рабочих процессов (выявление дублирования этапов, устранение простоев, автоматизация рутинных операций) снизит трудозатраты дизайнеров и время их вовлечения в задачи.

- Уменьшение количества ошибок и переделок за счет прозрачности процессов сократит непрямые расходы (например, оплату сверхурочных, привлечение внешних подрядчиков).

- Более точное планирование ресурсов на основе аналитики позволит избежать избыточного найма или простоя сотрудников.

## 🎯 Ключевые задачи:

- Выделение ключевых дизайнерских метрик.
- Разделение метрик по методологиям (Scrum, Kanban, смешанные).
- Формирование визуализаций, соответствующих каждому типу метрик.
- Поддержка сквозного анализа (в разрезе людей, команд, продуктов, кварталов).
- Создание базы для будущей ML-классификации задач и предиктивной аналитики.
- Реализация системы экспорта аналитики в PDF, Excel и BI-системы (Power BI, Tableau).

## 📈 Ожидаемые результаты

### Для дизайн-менеджеров:
- Возможность **сравнивать эффективность команд** на основе метрик (Velocity, Lead Time, Rework Rate) и выявлять лучшие практики внутри организации.
- **Прогнозирование сроков** выполнения задач на основе исторических данных и трендов.
- Анализ стабильности загрузки дизайнеров и качества выполнения задач по командам.

### Для продуктовых команд:
- **Сокращение рутинных операций** по сбору, подготовке и согласованию дизайн-отчетности.
- **Прозрачность статусов задач** и этапов (например, проектирование → ревью → хендоф), что упрощает синхронизацию с разработкой и планирование релизов.
- Возможность следить за прогрессом дизайн-инициатив параллельно с продуктовой дорожной картой.

### Для компании в целом:
- **Ускорение Time-to-Market** за счёт оптимизации дизайн-циклов, раннего выявления задержек и автоматизации отчётности.
- **Снижение рисков срывов сроков** за счёт контроля «узких мест» и анализа предсказуемости.
- Повышение **зрелости процессов DesignOps** и укрепление data-driven культуры принятия управленческих решений.


## 📊 Метрики

### Сквозные метрики

Используются во всех командах независимо от методологии:

- **Lead Time** — полное время прохождения задачи от создания до завершения.
- **Cycle Time** — активное время выполнения задачи (от начала работы до Done).
- **Flow Efficiency** — доля активной работы от общего времени (Cycle / Lead).
- **Blocked Time** — время, в течение которого задачи находились в состоянии блокировки.
- **Time in Status** — распределение времени по статусам (In Progress, Review и т.д.).
- **Reopened Tasks** — количество задач, вернувшихся в работу после Done.
- **Overdue Tasks** — количество задач, вышедших за рамки ожидаемых сроков.
- **Closed Designs** — завершённые дизайн-задачи.

### Scrum-метрики

Используются командами, работающими по Scrum:

- **Velocity** — количество Story Points, завершённых в каждом спринте (Committed vs Completed).
- **Predictability** — отношение выполненного объёма к запланированному (Completed / Committed).
- **Commitment Rate** — альтернативное представление Predictability.
- **Sprint Burndown** — график выполнения задач внутри спринта.
- **Scope Change** — прирост/сокращение задач в спринте.
- **Issues Created after Sprint Start** — метрика scope creep.
- **Estimated Items in SP at Sprint Start** — показатель качества планирования.
- **Items without Story Points** — задачи без оценки в спринте.
- **Epic Burndown** — отслеживание прогресса выполнения эпиков.

### ➕ Дополнительно

- **Process Time**, **Review Time**, **In Progress Time** — гигиенические показатели длительности статусов.
## Сквозные метрики
| **Название метрики** | **Определение** | **Цель** | **Тип визуализации** | **Примечания** |
|----------------------|------------------|----------|-----------------------|----------------|
| [**Lead Time**](https://www.atlassian.com/continuous-delivery/lead-time) | Время от постановки задачи до ее завершения. | Отразить общее время прохождения задачи через пайплайн. | [Line Chart](https://datavizcatalogue.com/methods/line_graph.html), [Boxplot](https://datavizcatalogue.com/methods/box_plot.html) | Применимо к Scrum и Kanban. Требуются даты создания и завершения задач. |
| [**Cycle Time**](https://www.atlassian.com/agile/kanban/cycle-time) | Время активной работы над задачей с момента начала до завершения. | Понять, сколько занимает реальная реализация. | [Bar Chart](https://datavizcatalogue.com/methods/bar_chart.html), [Line Chart](https://datavizcatalogue.com/methods/line_graph.html) | Применимо к Scrum и Kanban. Требуются данные о начале работы. |
| [**Flow Efficiency**](https://www.process.st/flow-efficiency/) | (Cycle Time / Lead Time) * 100% | Оценка доли активной работы от общего времени выполнения задачи. | [Pie Chart](https://datavizcatalogue.com/methods/pie_chart.html) | Требует корректных данных по статусам "в работе" и "ожидание". |
| [**Blocked Time**](https://www.agilealliance.org/glossary/blocked/) | Время, в течение которого задача находилась в заблокированном состоянии. | Выявить причины простоев и тормозящих факторов. | [Stacked Bar Chart](https://datavizcatalogue.com/methods/stacked_bar_chart.html) | Метрика может потребовать доработки workflow. |


#### Сквозные метрики (расшифровка)

**[Lead Time](https://www.atlassian.com/continuous-delivery/lead-time)**

- **Определение:** Время от постановки задачи до ее завершения.
- **Цель:** Отразить общее время прохождения задачи через пайплайн.
- **Визуализация:** [Line Chart](https://datavizcatalogue.com/methods/line_graph.html), [Boxplot](https://datavizcatalogue.com/methods/box_plot.html)

**[Cycle Time](https://www.atlassian.com/agile/kanban/cycle-time)**

- **Определение:** Время активной работы над задачей с момента начала до завершения.
- **Цель:** Понять, сколько занимает реальная реализация.
- **Визуализация:** [Bar Chart](https://datavizcatalogue.com/methods/bar_chart.html), [Line Chart](https://datavizcatalogue.com/methods/line_graph.html)

**[Flow Efficiency](https://www.process.st/flow-efficiency/)**

- **Определение:** (Cycle Time / Lead Time) * 100%
- **Цель:** Оценка доли активной работы от общего времени выполнения задачи.
- **Визуализация:** [Pie Chart](https://datavizcatalogue.com/methods/pie_chart.html)

**[Blocked Time](https://www.agilealliance.org/glossary/blocked/)**

- **Определение:** Время, в течение которого задача находилась в заблокированном состоянии.
- **Цель:** Выявить причины простоев и тормозящих факторов.
- **Визуализация:** [Stacked Bar Chart](https://datavizcatalogue.com/methods/stacked_bar_chart.html)

### Метрики Scrum
| **Название метрики** | **Определение** | **Цель** | **Тип визуализации** | **Примечания** |
|----------------------|------------------|----------|-----------------------|----------------|
| [**Velocity**](https://www.scrum.org/resources/blog/how-calculate-velocity-scrum) | Количество story points, закрытых за спринт. | Прогнозирование и планирование объема работ. | [Bar Chart](https://datavizcatalogue.com/methods/bar_chart.html) | Используется в Scrum, требует стабильной оценки задач. |
| [**Predictability**](https://www.leadingagile.com/2018/01/predictability-metrics/) | Сравнение планируемого и выполненного объема задач в спринте. | Оценка надежности команды. | [Grouped Bar Chart](https://datavizcatalogue.com/methods/grouped_bar_chart.html) | Полезна при сравнении commitment vs delivered. |
| [**Sprint Burndown**](https://www.scrum.org/resources/burndown-chart) | Отображает динамику уменьшения объема задач в спринте. | Отслеживание хода выполнения и раннее выявление отклонений. | [Line Chart](https://datavizcatalogue.com/methods/line_graph.html) | Требует ежедневного трекинга задач в спринте. |
| [**Scope Change**](https://www.agileconnection.com/article/agile-metrics-what-you-need-know) | Изменения в объеме задач спринта после его старта. | Анализ стабильности и дисциплины планирования. | [Waterfall Chart](https://datavizcatalogue.com/methods/waterfall_chart.html) | Отражает добавления и удаления задач по ходу спринта. |

Определение: Изменение задач в спринте (добавление/удаление).
Цель: Оценка стабильности планирования.
Визуализация: Waterfall Chart или доп. линии на burndown.

#### Метрики Scrum (расшифровка)

**[Velocity](https://www.scrum.org/resources/blog/how-calculate-velocity-scrum)**

- **Определение:** Количество story points, закрытых за спринт.
- **Цель:** Прогнозирование и планирование объема работ.
- **Визуализация:** [Bar Chart](https://datavizcatalogue.com/methods/bar_chart.html)

**[Predictability](https://www.leadingagile.com/2018/01/predictability-metrics/)**

- **Определение:** Сравнение планируемого и выполненного объема задач в спринте.
- **Цель:** Оценка надежности команды.
- **Визуализация:** [Grouped Bar Chart](https://datavizcatalogue.com/methods/grouped_bar_chart.html)

**[Sprint Burndown](https://www.scrum.org/resources/burndown-chart)**

- **Определение:** Отображает динамику уменьшения объема задач в спринте.
- **Цель:** Отслеживание хода выполнения и раннее выявление отклонений.
- **Визуализация:** [Line Chart](https://datavizcatalogue.com/methods/line_graph.html)

**[Scope Change](https://www.agileconnection.com/article/agile-metrics-what-you-need-know)**

- **Определение:** Изменения в объеме задач спринта после его старта.
- **Цель:** Анализ стабильности и дисциплины планирования.
- **Визуализация:** [Waterfall Chart](https://datavizcatalogue.com/methods/waterfall_chart.html)

### Метрики Kanban

| **Название метрики** | **Определение** | **Цель** | **Тип визуализации** | **Примечания** |
|----------------------|------------------|----------|-----------------------|----------------|
| [**WIP (Work In Progress)**](https://kanbanize.com/kanban-resources/kanban-analytics/cumulative-flow-diagram) | Количество задач, находящихся одновременно в работе. | Балансировка загрузки команды. | [Line Chart](https://datavizcatalogue.com/methods/line_graph.html) | Используется для ограничения параллельных задач. |
| [**Throughput**](https://www.atlassian.com/agile/kanban/metrics) | Количество завершённых задач за определенный период. | Оценка производительности команды. | [Bar Chart](https://datavizcatalogue.com/methods/bar_chart.html) | Важно для измерения эффективности потока задач. |
| [**Distribution Size**](https://www.scrum.org/resources/blog/sizing-work-agile-environment) | Распределение задач по объему или сложности (Small/Medium/Large). | Понимание структуры и сложности потока задач. | [Histogram](https://datavizcatalogue.com/methods/histogram.html), [Pie Chart](https://datavizcatalogue.com/methods/pie_chart.html) | Требует классификации задач по объёму. |
| [**Cumulative Flow Diagram (CFD)**](https://kanbanize.com/kanban-resources/kanban-analytics/cumulative-flow-diagram) | Накопительное отображение задач в статусах во времени. | Выявление узких мест и блокировок. | [Area Chart](https://datavizcatalogue.com/methods/area_chart.html) | Требует трекинга по всем статусам в Kanban. |

#### Канбан-метрики (расшифровка)

**[WIP (Work In Progress)](https://kanbanize.com/kanban-resources/kanban-analytics/cumulative-flow-diagram)**  
- **Определение:** Количество задач в активной работе.  
- **Цель:** Балансировка загрузки команды.  
- **Визуализация:** [Line Chart](https://datavizcatalogue.com/methods/line_graph.html) — отображает изменения WIP по дням/неделям.

**[Throughput](https://www.atlassian.com/agile/kanban/metrics)**  
- **Определение:** Количество завершённых задач за интервал (неделя, месяц).  
- **Цель:** Оценка "пропускной способности" команды.  
- **Визуализация:** [Bar Chart](https://datavizcatalogue.com/methods/bar_chart.html) — количество завершённых задач по неделям.

**[Distribution Size](https://www.scrum.org/resources/blog/sizing-work-agile-environment)**  
- **Определение:** Распределение задач по объёму (Small / Medium / Large).  
- **Цель:** Анализ типов загружаемости и сложности.  
- **Визуализация:** [Pie Chart](https://datavizcatalogue.com/methods/pie_chart.html) или [Histogram](https://datavizcatalogue.com/methods/histogram.html) — в зависимости от детализации.

**[Cumulative Flow Diagram (CFD)](https://kanbanize.com/kanban-resources/kanban-analytics/cumulative-flow-diagram)**  
- **Определение:** Сквозной график задач в процессе по статусам.  
- **Цель:** Выявление задержек, блокировок и "бутылочных горлышек".  
- **Визуализация:** [Area Chart](https://datavizcatalogue.com/methods/area_chart.html) — динамика задач по этапам.
### ➕ Дополненные метрики
| **Название метрики** | **Определение** | **Цель** | **Тип визуализации** | **Источник** |
|----------------------|------------------|----------|-----------------------|--------------|
| [**Sprint Burndown**](https://support.atlassian.com/jira-software-cloud/docs/view-and-understand-the-burndown-chart/) | График, показывающий оставшийся объём работы в спринте. | Отслеживание хода выполнения и прогноз выполнения задач. | [Line Chart](https://datavizcatalogue.com/methods/line_graph.html) | Atlassian |
| [**Epic Burndown**](https://support.atlassian.com/jira-software-cloud/docs/view-and-understand-the-epic-burndown-report/) | Отслеживает прогресс выполнения эпика. | Понимание, сколько работы осталось для завершения эпика. | [Line Chart](https://datavizcatalogue.com/methods/line_graph.html) | Atlassian |
| [**Blocked Time**](https://www.parabol.co/blog/agile-metrics/) | Время, в течение которого задача была заблокирована. | Выявление узких мест и потерь в процессе. | [Bar Chart](https://datavizcatalogue.com/methods/bar_chart.html) | Parabol |
| [**Flow Efficiency**](https://hygger.io/guides/agile/project-management/agile-metrics/) | Соотношение активного времени к общему времени задачи. | Оценка эффективности рабочего процесса. | [Cumulative Flow Diagram](https://kanbanize.com/kanban-resources/kanban-analytics/cumulative-flow-diagram) | Hygger.io |

#### ➕ Дополненные метрики (расшифровка)

**[Sprint Burndown](https://support.atlassian.com/jira-software-cloud/docs/view-and-understand-the-burndown-chart/)**

- **Определение:** График, показывающий оставшийся объём работы в спринте.
- **Цель:** Отслеживание хода выполнения и прогноз выполнения задач.
- **Визуализация:** [Line Chart](https://datavizcatalogue.com/methods/line_graph.html)

**[Epic Burndown](https://support.atlassian.com/jira-software-cloud/docs/view-and-understand-the-epic-burndown-report/)**

- **Определение:** Отслеживает прогресс выполнения эпика.
- **Цель:** Понимание, сколько работы осталось для завершения эпика.
- **Визуализация:** [Line Chart](https://datavizcatalogue.com/methods/line_graph.html)

**[Blocked Time](https://www.parabol.co/blog/agile-metrics/)**

- **Определение:** Время, в течение которого задача была заблокирована.
- **Цель:** Выявление узких мест и потерь в процессе.
- **Визуализация:** [Bar Chart](https://datavizcatalogue.com/methods/bar_chart.html)

**[Flow Efficiency](https://hygger.io/guides/agile/project-management/agile-metrics/)**

- **Определение:** Соотношение активного времени к общему времени задачи.
- **Цель:** Оценка эффективности рабочего процесса.
- **Визуализация:** [Cumulative Flow Diagram](https://kanbanize.com/kanban-resources/kanban-analytics/cumulative-flow-diagram)

## 🎬 Сценарии использования:
- Менеджеры видят загрузку и динамику по командам.
- Дизайн-группа проверяет влияние новых практик на Rework Rate.
- Аналитики выявляют команды с задержками или падением Velocity.
- Руководство видит рост эффективности после внедрения инструментов/процессов.

#### Следующие шаги:
- Анализ Jira-данных и определение унифицированной структуры (этап ресерча).
- Подготовка архитектуры сбора и хранения данных.
- Создание MVP интерфейса визуализации.
- Подготовка документации и методологии расчётов.

## 🛠️ Функциональность

1. **Сбор и агрегация данных:**

- Автоматически собирает задачи типа “Design” из Jira (с учётом всех проектных и кросс-функциональных досок).
- Распознаёт стадии задач по их переходам (например, Discovery → In Progress → Review → Done).
- Поддерживает фильтрацию по продуктовым командам, типам задач, инициаторам и другим Jira-параметрам.
- Обновляет данные по расписанию (ежедневно, еженедельно).

2. **Расчёт и нормализация метрик:**

- Формирует унифицированные метрики, применимые к Scrum, Kanban и смешанным моделям.
- Метрики структурированы по группам:
    - Сквозные (например, [**Lead Time**](https://www.atlassian.com/continuous-delivery/lead-time), [**Cycle Time**](https://www.atlassian.com/agile/kanban/cycle-time));
    - Scrum-ориентированные ([**Velocity**](https://www.scrum.org/resources/blog/how-calculate-velocity-scrum), [**Burndown**](https://www.scrum.org/resources/burndown-chart));
    - Kanban-метрики ([**WIP**](https://kanbanize.com/kanban-resources/kanban-analytics/cumulative-flow-diagram), [**CFD**](https://kanbanize.com/kanban-resources/kanban-analytics/cumulative-flow-diagram)).
- Расчёт метрик основан на общепринятых практиках (Atlassian, Scrum.org, Kanbanize) и отражён в [таблицах метрик](#метрики).
- Обеспечивает сравнение по командам, по кварталам, по типам инициатив.

3. **Визуализация и анализ:**

- Все ключевые метрики визуализируются через рекомендованные типы графиков:  
    • [Line Chart](https://datavizcatalogue.com/methods/line_graph.html) (для Lead Time, Burndown);  
    • [Bar Chart](https://datavizcatalogue.com/methods/bar_chart.html) (для Velocity, Throughput);  
    • [Area Chart](https://datavizcatalogue.com/methods/area_chart.html) (для CFD);  
    • [Pie Chart](https://datavizcatalogue.com/methods/pie_chart.html), [Boxplot](https://datavizcatalogue.com/methods/box_plot.html), [Waterfall Chart](https://datavizcatalogue.com/methods/waterfall_chart.html) и др.
- Дашборды поддерживают интерактивную фильтрацию по времени, команде, продукту.
- Включают карты узких мест, динамику процессов и сравнение между командами.

4. **Управление и принятие решений:**

- Даёт целостное представление о загруженности, качестве и стабильности процессов.
- Сигнализирует об отклонениях: рост Rework Rate, падение Velocity, расширение Scope.
- Позволяет принимать data-driven решения о перераспределении задач, изменении процессов, стандартизации подходов.

5. **Отчёты и экспорт:**

- Формирует PDF/Excel отчёты по выбранному периоду (в разрезе команд, продуктов, типов задач).
- Поддерживает выгрузку агрегированных данных для Tableau, Power BI и других BI-систем.
- Возможность планирования автоэкспорта по расписанию.

## ⚠️ Риски и стратегии митигации

| **Риск** | **Описание** | **Стратегия митигации** |
|----------|--------------|--------------------------|
| Сопротивление изменениям | Команды могут игнорировать внедрение сервиса или саботировать новые практики. | Вовлечение команд через ранние интервью, пилотирование, создание “чемпионов изменений”. |
| Разнородные Jira-воркфлоу | У каждой команды своя схема статусов и полей, что затрудняет унификацию. | Создание стандартов для Jira с маппингом текущих схем и промежуточным ETL-преобразованием. |
| Низкое качество данных | Отсутствие обязательных полей, забытые статусы, дубли, “мертвые” задачи. | Внедрение валидаторов на уровне Jira, аудит истории задач, отчёты по некорректным записям. |
| Недостаточный уровень вовлеченности руководства | При отсутствии поддержки сверху проект может быть заморожен или игнорирован. | Демонстрация value через пилот, презентации для C-level, фиксация метрик успеха. |
| Недостаток доверия к данным | Команды не верят в выводы аналитики или считают их искаженными. | Прозрачность алгоритмов расчёта, открытый дашборд с формулами и комментариями. |
| Перегрузка дизайнеров / нехватка ресурсов на поддержку | Требуются усилия для нормализации задач, анализа ошибок, внедрения. | Поддержка со стороны аналитиков/координаторов DesignOps, не дизайнеров. |
| Сбой инициативы при смене приоритетов в компании | Риски стратегических поворотов, смен фокуса или оргструктуры. | Зафиксировать value через метрики, интегрировать с ключевыми процессами. |
| Интеграционные сложности | Jira может быть ограничена политиками безопасности или лицензиями. | Предварительный технический аудит, работа с админами Jira, пилот на копии/снэпшоте. |

## 📚 Использованные материалы

- [Atlassian: Five agile KPI metrics you won't hate](https://www.atlassian.com/agile/project-management/metrics)
- [Atlassian: View and understand the burndown chart](https://support.atlassian.com/jira-software-cloud/docs/view-and-understand-the-burndown-chart/)
- [Atlassian: View and understand the epic burndown report](https://support.atlassian.com/jira-software-cloud/docs/view-and-understand-the-epic-burndown-report/)
- [Parabol: The 10 Most Helpful Agile Metrics According to Experts](https://www.parabol.co/blog/agile-metrics/)
- [Hygger.io: Agile Metrics](https://hygger.io/guides/agile/project-management/agile-metrics/)
- [Kanbanize: Cumulative Flow Diagram](https://kanbanize.com/kanban-resources/kanban-analytics/cumulative-flow-diagram)

- [VC.ru: Метрики в UX дизайне](https://vc.ru/design/833695-metriki-v-ux-dizaine)
- [IAMPM: Метрики дизайна: как отслеживать эффективность](https://iampm.club/blog/metriki-dizajna-kak-otslezhivat-effektivnost/)
- [Habr: Дизайн на основе данных: Как метрики делают ваш продукт успешным](https://habr.com/ru/articles/851804/)
- [UPROCK: 7 шагов для оценки UX вашего продукта](https://www.uprock.ru/articles/7-shagov-dlya-ocenki-ux-vashego-produkta)
- [Medium: Ключевые метрики для дизайн-менеджера](https://medium.com/design-pub/%D0%BA%D0%BB%D1%8E%D1%87%D0%B5%D0%B2%D1%8B%D0%B5-%D0%BC%D0%B5%D1%82%D1%80%D0%B8%D0%BA%D0%B8-%D0%B4%D0%BB%D1%8F-%D0%B4%D0%B8%D0%B7%D0%B0%D0%B9%D0%BD-%D0%BC%D0%B5%D0%BD%D0%B5%D0%B4%D0%B6%D0%B5%D1%80%D0%B0-8662205e97cd)
- [DSGNERS: Какие бывают метрики в продуктовом дизайне и UX](https://dsgners.ru/ux/5430-metriki-i-produktovyiy-dizayn)
- [DSGNERS: Как дизайнеру понять аналитику?](https://dsgners.ru/product-design/5239-kak-dizayneru-ponyat-analitiku)
- [Bang Bang Education: Дизайн-процесс](https://bangbangeducation.ru/point/ux-ui-dizain/design-process/)
- [Medium: Метрики юзабилити: измерение успеха UX-дизайна](https://vnikitinsky.medium.com/%D0%BC%D0%B5%D1%82%D1%80%D0%B8%D0%BA%D0%B8-%D1%8E%D0%B7%D0%B0%D0%B1%D0%B8%D0%BB%D0%B8%D1%82%D0%B8-%D0%B8%D0%B7%D0%BC%D0%B5%D1%80%D0%B5%D0%BD%D0%B8%D0%B5-%D1%83%D1%81%D0%BF%D0%B5%D1%85%D0%B0-ux-%D0%B4%D0%B8%D0%B7%D0%B0%D0%B9%D0%BD%D0%B0-af91dacbbfe0)
- [Яндекс Практикум: Метрики продукта](https://practicum.yandex.ru/blog/chto-takoe-produktovye-metriki-i-kakimi-oni-byvayut/)