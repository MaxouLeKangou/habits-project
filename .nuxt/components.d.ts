
import type { DefineComponent, SlotsType } from 'vue'
type IslandComponent<T extends DefineComponent> = T & DefineComponent<{}, {refresh: () => Promise<void>}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, SlotsType<{ fallback: { error: unknown } }>>
interface _GlobalComponents {
      'AddHabitForm': typeof import("../components/AddHabitForm.vue")['default']
    'BlocHero': typeof import("../components/Bloc/Hero.vue")['default']
    'ButtonsTag': typeof import("../components/Buttons/Tag.vue")['default']
    'CardFeature': typeof import("../components/Card/Feature.vue")['default']
    'CardHabit': typeof import("../components/Card/Habit.vue")['default']
    'CardReview': typeof import("../components/Card/Review.vue")['default']
    'CardStat': typeof import("../components/Card/Stat.vue")['default']
    'DialogHabit': typeof import("../components/Dialog/Habit.vue")['default']
    'Header': typeof import("../components/Header.vue")['default']
    'IconsAdd': typeof import("../components/Icons/Add.vue")['default']
    'IconsCheck': typeof import("../components/Icons/Check.vue")['default']
    'IconsClose': typeof import("../components/Icons/Close.vue")['default']
    'IconsEdit': typeof import("../components/Icons/Edit.vue")['default']
    'IconsTrash': typeof import("../components/Icons/Trash.vue")['default']
    'MyButton': typeof import("../components/MyButton.vue")['default']
    'MyInput': typeof import("../components/MyInput.vue")['default']
    'LayoutMyForm': typeof import("../components/layout/MyForm.vue")['default']
    'SanityContent': typeof import("../node_modules/@nuxtjs/sanity/dist/runtime/components/sanity-content")['default']
    'SanityFile': typeof import("../node_modules/@nuxtjs/sanity/dist/runtime/components/sanity-file")['default']
    'SanityImage': typeof import("../node_modules/@nuxtjs/sanity/dist/runtime/components/sanity-image")['default']
    'NuxtWelcome': typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']
    'NuxtLayout': typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']
    'NuxtErrorBoundary': typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary")['default']
    'ClientOnly': typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']
    'DevOnly': typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']
    'ServerPlaceholder': typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']
    'NuxtLink': typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']
    'NuxtLoadingIndicator': typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']
    'NuxtRouteAnnouncer': typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']
    'NuxtImg': typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']
    'NuxtPicture': typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']
    'NuxtPage': typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']
    'NoScript': typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']
    'Link': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']
    'Base': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']
    'Title': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']
    'Meta': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']
    'Style': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']
    'Head': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']
    'Html': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']
    'Body': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']
    'NuxtIsland': typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']
    'NuxtRouteAnnouncer': IslandComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
      'LazyAddHabitForm': typeof import("../components/AddHabitForm.vue")['default']
    'LazyBlocHero': typeof import("../components/Bloc/Hero.vue")['default']
    'LazyButtonsTag': typeof import("../components/Buttons/Tag.vue")['default']
    'LazyCardFeature': typeof import("../components/Card/Feature.vue")['default']
    'LazyCardHabit': typeof import("../components/Card/Habit.vue")['default']
    'LazyCardReview': typeof import("../components/Card/Review.vue")['default']
    'LazyCardStat': typeof import("../components/Card/Stat.vue")['default']
    'LazyDialogHabit': typeof import("../components/Dialog/Habit.vue")['default']
    'LazyHeader': typeof import("../components/Header.vue")['default']
    'LazyIconsAdd': typeof import("../components/Icons/Add.vue")['default']
    'LazyIconsCheck': typeof import("../components/Icons/Check.vue")['default']
    'LazyIconsClose': typeof import("../components/Icons/Close.vue")['default']
    'LazyIconsEdit': typeof import("../components/Icons/Edit.vue")['default']
    'LazyIconsTrash': typeof import("../components/Icons/Trash.vue")['default']
    'LazyMyButton': typeof import("../components/MyButton.vue")['default']
    'LazyMyInput': typeof import("../components/MyInput.vue")['default']
    'LazyLayoutMyForm': typeof import("../components/layout/MyForm.vue")['default']
    'LazySanityContent': typeof import("../node_modules/@nuxtjs/sanity/dist/runtime/components/sanity-content")['default']
    'LazySanityFile': typeof import("../node_modules/@nuxtjs/sanity/dist/runtime/components/sanity-file")['default']
    'LazySanityImage': typeof import("../node_modules/@nuxtjs/sanity/dist/runtime/components/sanity-image")['default']
    'LazyNuxtWelcome': typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']
    'LazyNuxtLayout': typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']
    'LazyNuxtErrorBoundary': typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary")['default']
    'LazyClientOnly': typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']
    'LazyDevOnly': typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']
    'LazyServerPlaceholder': typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']
    'LazyNuxtLink': typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']
    'LazyNuxtLoadingIndicator': typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']
    'LazyNuxtRouteAnnouncer': typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']
    'LazyNuxtImg': typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']
    'LazyNuxtPicture': typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']
    'LazyNuxtPage': typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']
    'LazyNoScript': typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']
    'LazyLink': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']
    'LazyBase': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']
    'LazyTitle': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']
    'LazyMeta': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']
    'LazyStyle': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']
    'LazyHead': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']
    'LazyHtml': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']
    'LazyBody': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']
    'LazyNuxtIsland': typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']
    'LazyNuxtRouteAnnouncer': IslandComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
}

declare module 'vue' {
  export interface GlobalComponents extends _GlobalComponents { }
}

export const AddHabitForm: typeof import("../components/AddHabitForm.vue")['default']
export const BlocHero: typeof import("../components/Bloc/Hero.vue")['default']
export const ButtonsTag: typeof import("../components/Buttons/Tag.vue")['default']
export const CardFeature: typeof import("../components/Card/Feature.vue")['default']
export const CardHabit: typeof import("../components/Card/Habit.vue")['default']
export const CardReview: typeof import("../components/Card/Review.vue")['default']
export const CardStat: typeof import("../components/Card/Stat.vue")['default']
export const DialogHabit: typeof import("../components/Dialog/Habit.vue")['default']
export const Header: typeof import("../components/Header.vue")['default']
export const IconsAdd: typeof import("../components/Icons/Add.vue")['default']
export const IconsCheck: typeof import("../components/Icons/Check.vue")['default']
export const IconsClose: typeof import("../components/Icons/Close.vue")['default']
export const IconsEdit: typeof import("../components/Icons/Edit.vue")['default']
export const IconsTrash: typeof import("../components/Icons/Trash.vue")['default']
export const MyButton: typeof import("../components/MyButton.vue")['default']
export const MyInput: typeof import("../components/MyInput.vue")['default']
export const LayoutMyForm: typeof import("../components/layout/MyForm.vue")['default']
export const SanityContent: typeof import("../node_modules/@nuxtjs/sanity/dist/runtime/components/sanity-content")['default']
export const SanityFile: typeof import("../node_modules/@nuxtjs/sanity/dist/runtime/components/sanity-file")['default']
export const SanityImage: typeof import("../node_modules/@nuxtjs/sanity/dist/runtime/components/sanity-image")['default']
export const NuxtWelcome: typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']
export const NuxtLayout: typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']
export const NuxtErrorBoundary: typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary")['default']
export const ClientOnly: typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']
export const DevOnly: typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']
export const ServerPlaceholder: typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']
export const NuxtLink: typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']
export const NuxtLoadingIndicator: typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']
export const NuxtRouteAnnouncer: typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']
export const NuxtImg: typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']
export const NuxtPicture: typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']
export const NuxtPage: typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']
export const NoScript: typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']
export const Link: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']
export const Base: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']
export const Title: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']
export const Meta: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']
export const Style: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']
export const Head: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']
export const Html: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']
export const Body: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']
export const NuxtIsland: typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']
export const NuxtRouteAnnouncer: IslandComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
export const LazyAddHabitForm: typeof import("../components/AddHabitForm.vue")['default']
export const LazyBlocHero: typeof import("../components/Bloc/Hero.vue")['default']
export const LazyButtonsTag: typeof import("../components/Buttons/Tag.vue")['default']
export const LazyCardFeature: typeof import("../components/Card/Feature.vue")['default']
export const LazyCardHabit: typeof import("../components/Card/Habit.vue")['default']
export const LazyCardReview: typeof import("../components/Card/Review.vue")['default']
export const LazyCardStat: typeof import("../components/Card/Stat.vue")['default']
export const LazyDialogHabit: typeof import("../components/Dialog/Habit.vue")['default']
export const LazyHeader: typeof import("../components/Header.vue")['default']
export const LazyIconsAdd: typeof import("../components/Icons/Add.vue")['default']
export const LazyIconsCheck: typeof import("../components/Icons/Check.vue")['default']
export const LazyIconsClose: typeof import("../components/Icons/Close.vue")['default']
export const LazyIconsEdit: typeof import("../components/Icons/Edit.vue")['default']
export const LazyIconsTrash: typeof import("../components/Icons/Trash.vue")['default']
export const LazyMyButton: typeof import("../components/MyButton.vue")['default']
export const LazyMyInput: typeof import("../components/MyInput.vue")['default']
export const LazyLayoutMyForm: typeof import("../components/layout/MyForm.vue")['default']
export const LazySanityContent: typeof import("../node_modules/@nuxtjs/sanity/dist/runtime/components/sanity-content")['default']
export const LazySanityFile: typeof import("../node_modules/@nuxtjs/sanity/dist/runtime/components/sanity-file")['default']
export const LazySanityImage: typeof import("../node_modules/@nuxtjs/sanity/dist/runtime/components/sanity-image")['default']
export const LazyNuxtWelcome: typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']
export const LazyNuxtLayout: typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']
export const LazyNuxtErrorBoundary: typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary")['default']
export const LazyClientOnly: typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']
export const LazyDevOnly: typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']
export const LazyServerPlaceholder: typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']
export const LazyNuxtLink: typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']
export const LazyNuxtLoadingIndicator: typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']
export const LazyNuxtRouteAnnouncer: typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']
export const LazyNuxtImg: typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']
export const LazyNuxtPicture: typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']
export const LazyNuxtPage: typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']
export const LazyNoScript: typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']
export const LazyLink: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']
export const LazyBase: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']
export const LazyTitle: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']
export const LazyMeta: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']
export const LazyStyle: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']
export const LazyHead: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']
export const LazyHtml: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']
export const LazyBody: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']
export const LazyNuxtIsland: typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']
export const LazyNuxtRouteAnnouncer: IslandComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>

export const componentNames: string[]
