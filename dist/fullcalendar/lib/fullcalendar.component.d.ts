import { ElementRef, EventEmitter, SimpleChanges, AfterViewInit, OnChanges, OnDestroy } from '@angular/core';
import { Calendar, BusinessHoursInput, ConstraintInput, EventApi, PluginDef } from '@fullcalendar/core';
import { ToolbarInput, CustomButtonInput, ButtonIconsInput, CellInfo, ButtonTextCompoundInput, ViewOptionsInput } from '@fullcalendar/core/types/input-types';
import { DateInput } from '@fullcalendar/core/datelib/env';
import { DurationInput } from '@fullcalendar/core/datelib/duration';
import { FormatterInput } from '@fullcalendar/core/datelib/formatting';
import { DateRangeInput } from '@fullcalendar/core/datelib/date-range';
import { RawLocale, LocaleSingularArg } from '@fullcalendar/core/datelib/locale';
import { OverlapFunc, AllowFunc } from '@fullcalendar/core/validation';
import { EventSourceInput, EventInputTransformer } from '@fullcalendar/core/structs/event-source';
export declare class FullCalendarComponent implements AfterViewInit, OnChanges, OnDestroy {
    private element;
    private calendar;
    constructor(element: ElementRef);
    ngAfterViewInit(): void;
    buildOptions(): {};
    ngOnChanges(changes: SimpleChanges): void;
    ngOnDestroy(): void;
    getApi(): Calendar;
    header?: boolean | ToolbarInput;
    footer?: boolean | ToolbarInput;
    customButtons?: {
        [name: string]: CustomButtonInput;
    };
    buttonIcons?: boolean | ButtonIconsInput;
    themeSystem?: 'standard' | string;
    bootstrapFontAwesome?: boolean | ButtonIconsInput;
    firstDay?: number;
    dir?: 'ltr' | 'rtl' | 'auto';
    weekends?: boolean;
    hiddenDays?: number[];
    fixedWeekCount?: boolean;
    weekNumbers?: boolean;
    weekNumbersWithinDays?: boolean;
    weekNumberCalculation?: 'local' | 'ISO' | ((m: Date) => number);
    businessHours?: BusinessHoursInput;
    showNonCurrentDates?: boolean;
    height?: number | 'auto' | 'parent' | (() => number);
    contentHeight?: number | 'auto' | (() => number);
    aspectRatio?: number;
    handleWindowResize?: boolean;
    windowResizeDelay?: number;
    eventLimit?: boolean | number;
    eventLimitClick?: 'popover' | 'week' | 'day' | string | ((cellinfo: CellInfo, jsevent: Event) => void);
    timeZone?: string | boolean;
    now?: DateInput | (() => DateInput);
    defaultView?: string;
    allDaySlot?: boolean;
    allDayText?: string;
    slotDuration?: DurationInput;
    slotLabelFormat?: FormatterInput;
    slotLabelInterval?: DurationInput;
    snapDuration?: DurationInput;
    scrollTime?: DurationInput;
    minTime?: DurationInput;
    maxTime?: DurationInput;
    slotEventOverlap?: boolean;
    listDayFormat?: FormatterInput | boolean;
    listDayAltFormat?: FormatterInput | boolean;
    noEventsMessage?: string;
    defaultDate?: DateInput;
    nowIndicator?: boolean;
    visibleRange?: ((currentDate: Date) => DateRangeInput) | DateRangeInput;
    validRange?: DateRangeInput;
    dateIncrement?: DurationInput;
    dateAlignment?: string;
    duration?: DurationInput;
    dayCount?: number;
    locales?: RawLocale[];
    locale?: LocaleSingularArg;
    eventTimeFormat?: FormatterInput;
    columnHeader?: boolean;
    columnHeaderFormat?: FormatterInput;
    columnHeaderText?: string | ((date: DateInput) => string);
    columnHeaderHtml?: string | ((date: DateInput) => string);
    titleFormat?: FormatterInput;
    weekLabel?: string;
    displayEventTime?: boolean;
    displayEventEnd?: boolean;
    eventLimitText?: string | ((eventCnt: number) => string);
    dayPopoverFormat?: FormatterInput;
    navLinks?: boolean;
    navLinkDayClick?: string | ((date: Date, jsEvent: Event) => void);
    navLinkWeekClick?: string | ((weekStart: any, jsEvent: Event) => void);
    selectable?: boolean;
    selectMirror?: boolean;
    unselectAuto?: boolean;
    unselectCancel?: string;
    defaultAllDayEventDuration?: DurationInput;
    defaultTimedEventDuration?: DurationInput;
    cmdFormatter?: string;
    defaultRangeSeparator?: string;
    selectConstraint?: ConstraintInput;
    selectOverlap?: boolean | OverlapFunc;
    selectAllow?: AllowFunc;
    editable?: boolean;
    eventStartEditable?: boolean;
    eventDurationEditable?: boolean;
    eventConstraint?: ConstraintInput;
    eventOverlap?: boolean | OverlapFunc;
    eventAllow?: AllowFunc;
    eventClassName?: string[] | string;
    eventClassNames?: string[] | string;
    eventBackgroundColor?: string;
    eventBorderColor?: string;
    eventTextColor?: string;
    eventColor?: string;
    events?: EventSourceInput;
    eventSources?: EventSourceInput[];
    allDayDefault?: boolean;
    startParam?: string;
    endParam?: string;
    lazyFetching?: boolean;
    nextDayThreshold?: DurationInput;
    eventOrder?: string | Array<((a: EventApi, b: EventApi) => number) | (string | ((a: EventApi, b: EventApi) => number))>;
    rerenderDelay?: number | null;
    dragRevertDuration?: number;
    dragScroll?: boolean;
    longPressDelay?: number;
    eventLongPressDelay?: number;
    droppable?: boolean;
    dropAccept?: string | ((draggable: any) => boolean);
    eventDataTransform?: EventInputTransformer;
    allDayMaintainDuration?: Boolean;
    eventResizableFromStart?: Boolean;
    buttonText?: ButtonTextCompoundInput;
    views?: {
        [viewId: string]: ViewOptionsInput;
    };
    plugins?: (PluginDef | string)[];
    schedulerLicenseKey?: string;
    resources?: any;
    resourceLabelText?: string;
    resourceOrder?: any;
    filterResourcesWithEvents?: any;
    resourceText?: any;
    resourceGroupField?: any;
    resourceGroupText?: any;
    resourceAreaWidth?: any;
    resourceColumns?: any;
    resourcesInitiallyExpanded?: any;
    slotWidth?: any;
    datesAboveResources?: any;
    datesRender: EventEmitter<any>;
    datesDestroy: EventEmitter<any>;
    dayRender: EventEmitter<any>;
    windowResize: EventEmitter<any>;
    dateClick: EventEmitter<any>;
    eventClick: EventEmitter<any>;
    eventMouseEnter: EventEmitter<any>;
    eventMouseLeave: EventEmitter<any>;
    select: EventEmitter<any>;
    unselect: EventEmitter<any>;
    eventRender: EventEmitter<any>;
    eventPositioned: EventEmitter<any>;
    eventDestroy: EventEmitter<any>;
    eventDragStart: EventEmitter<any>;
    eventDragStop: EventEmitter<any>;
    eventDrop: EventEmitter<any>;
    eventResizeStart: EventEmitter<any>;
    eventResizeStop: EventEmitter<any>;
    eventResize: EventEmitter<any>;
    drop: EventEmitter<any>;
    eventReceive: EventEmitter<any>;
    eventLeave: EventEmitter<any>;
    viewSkeletonRender: EventEmitter<any>;
    viewSkeletonDestroy: EventEmitter<any>;
    _destroyed: EventEmitter<any>;
    resourceRender: EventEmitter<any>;
}
