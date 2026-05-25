import { U as reactExports, K as jsxRuntimeExports } from "./worker-entry-Be3-PIiG.js";
import { V as createLucideIcon, k as Presence, l as Primitive, ad as useControllableState, ac as useComposedRefs, J as composeEventHandlers, Q as createContextScope, G as cn, X, q as Route, u as Stethoscope, H as HeartPulse, L as Link, f as Button, d as ArrowRight, z as callLink, P as Phone, ai as whatsappLink, a1 as formatBDT, A as Accordion, b as AccordionItem, c as AccordionTrigger, a as AccordionContent, s as SITE, j as MessageCircle } from "./router-C3WBn37j.js";
import { I as Input } from "./input-BilJhqqL.js";
import { T as Textarea } from "./textarea-etiRFo2K.js";
import { u as usePrevious, a as useSize } from "./index-RyQy-ocC.js";
import { C as Check } from "./check-BYKtKg3z.js";
import { L as Label } from "./label-BpUWl_YU.js";
import { t as toast } from "./index-DdrJ5Ons.js";
import { P as Play } from "./play-LUvMcJ59.js";
import { S as Star } from "./star-B4hln75v.js";
import { a as HeroSlider, H as HERO_IMAGES } from "./HeroSlider-uiLwF9fq.js";
import { U as Users } from "./users-8jP-Eu3B.js";
import { C as Clock } from "./clock-Ki_UlKqs.js";
import { S as ShieldCheck } from "./shield-check-CKJHgl4o.js";
import { A as ArrowLeft } from "./arrow-left-BXm0zLv5.js";
import { S as Sparkles } from "./sparkles-CzBZlB2N.js";
import "node:events";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
const __iconNode$1 = [
  ["path", { d: "M12 15V3", key: "m9g1x1" }],
  ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }],
  ["path", { d: "m7 10 5 5 5-5", key: "brsn70" }]
];
const Download = createLucideIcon("download", __iconNode$1);
const __iconNode = [
  [
    "path",
    {
      d: "M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",
      key: "rib7q0"
    }
  ],
  [
    "path",
    {
      d: "M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",
      key: "1ymkrd"
    }
  ]
];
const Quote = createLucideIcon("quote", __iconNode);
var CHECKBOX_NAME = "Checkbox";
var [createCheckboxContext] = createContextScope(CHECKBOX_NAME);
var [CheckboxProviderImpl, useCheckboxContext] = createCheckboxContext(CHECKBOX_NAME);
function CheckboxProvider(props) {
  const {
    __scopeCheckbox,
    checked: checkedProp,
    children,
    defaultChecked,
    disabled,
    form,
    name,
    onCheckedChange,
    required,
    value = "on",
    // @ts-expect-error
    internal_do_not_use_render
  } = props;
  const [checked, setChecked] = useControllableState({
    prop: checkedProp,
    defaultProp: defaultChecked ?? false,
    onChange: onCheckedChange,
    caller: CHECKBOX_NAME
  });
  const [control, setControl] = reactExports.useState(null);
  const [bubbleInput, setBubbleInput] = reactExports.useState(null);
  const hasConsumerStoppedPropagationRef = reactExports.useRef(false);
  const isFormControl = control ? !!form || !!control.closest("form") : (
    // We set this to true by default so that events bubble to forms without JS (SSR)
    true
  );
  const context = {
    checked,
    disabled,
    setChecked,
    control,
    setControl,
    name,
    form,
    value,
    hasConsumerStoppedPropagationRef,
    required,
    defaultChecked: isIndeterminate(defaultChecked) ? false : defaultChecked,
    isFormControl,
    bubbleInput,
    setBubbleInput
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    CheckboxProviderImpl,
    {
      scope: __scopeCheckbox,
      ...context,
      children: isFunction(internal_do_not_use_render) ? internal_do_not_use_render(context) : children
    }
  );
}
var TRIGGER_NAME = "CheckboxTrigger";
var CheckboxTrigger = reactExports.forwardRef(
  ({ __scopeCheckbox, onKeyDown, onClick, ...checkboxProps }, forwardedRef) => {
    const {
      control,
      value,
      disabled,
      checked,
      required,
      setControl,
      setChecked,
      hasConsumerStoppedPropagationRef,
      isFormControl,
      bubbleInput
    } = useCheckboxContext(TRIGGER_NAME, __scopeCheckbox);
    const composedRefs = useComposedRefs(forwardedRef, setControl);
    const initialCheckedStateRef = reactExports.useRef(checked);
    reactExports.useEffect(() => {
      const form = control?.form;
      if (form) {
        const reset = () => setChecked(initialCheckedStateRef.current);
        form.addEventListener("reset", reset);
        return () => form.removeEventListener("reset", reset);
      }
    }, [control, setChecked]);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      Primitive.button,
      {
        type: "button",
        role: "checkbox",
        "aria-checked": isIndeterminate(checked) ? "mixed" : checked,
        "aria-required": required,
        "data-state": getState(checked),
        "data-disabled": disabled ? "" : void 0,
        disabled,
        value,
        ...checkboxProps,
        ref: composedRefs,
        onKeyDown: composeEventHandlers(onKeyDown, (event) => {
          if (event.key === "Enter") event.preventDefault();
        }),
        onClick: composeEventHandlers(onClick, (event) => {
          setChecked((prevChecked) => isIndeterminate(prevChecked) ? true : !prevChecked);
          if (bubbleInput && isFormControl) {
            hasConsumerStoppedPropagationRef.current = event.isPropagationStopped();
            if (!hasConsumerStoppedPropagationRef.current) event.stopPropagation();
          }
        })
      }
    );
  }
);
CheckboxTrigger.displayName = TRIGGER_NAME;
var Checkbox$1 = reactExports.forwardRef(
  (props, forwardedRef) => {
    const {
      __scopeCheckbox,
      name,
      checked,
      defaultChecked,
      required,
      disabled,
      value,
      onCheckedChange,
      form,
      ...checkboxProps
    } = props;
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      CheckboxProvider,
      {
        __scopeCheckbox,
        checked,
        defaultChecked,
        disabled,
        required,
        onCheckedChange,
        name,
        form,
        value,
        internal_do_not_use_render: ({ isFormControl }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            CheckboxTrigger,
            {
              ...checkboxProps,
              ref: forwardedRef,
              __scopeCheckbox
            }
          ),
          isFormControl && /* @__PURE__ */ jsxRuntimeExports.jsx(
            CheckboxBubbleInput,
            {
              __scopeCheckbox
            }
          )
        ] })
      }
    );
  }
);
Checkbox$1.displayName = CHECKBOX_NAME;
var INDICATOR_NAME = "CheckboxIndicator";
var CheckboxIndicator = reactExports.forwardRef(
  (props, forwardedRef) => {
    const { __scopeCheckbox, forceMount, ...indicatorProps } = props;
    const context = useCheckboxContext(INDICATOR_NAME, __scopeCheckbox);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      Presence,
      {
        present: forceMount || isIndeterminate(context.checked) || context.checked === true,
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          Primitive.span,
          {
            "data-state": getState(context.checked),
            "data-disabled": context.disabled ? "" : void 0,
            ...indicatorProps,
            ref: forwardedRef,
            style: { pointerEvents: "none", ...props.style }
          }
        )
      }
    );
  }
);
CheckboxIndicator.displayName = INDICATOR_NAME;
var BUBBLE_INPUT_NAME = "CheckboxBubbleInput";
var CheckboxBubbleInput = reactExports.forwardRef(
  ({ __scopeCheckbox, ...props }, forwardedRef) => {
    const {
      control,
      hasConsumerStoppedPropagationRef,
      checked,
      defaultChecked,
      required,
      disabled,
      name,
      value,
      form,
      bubbleInput,
      setBubbleInput
    } = useCheckboxContext(BUBBLE_INPUT_NAME, __scopeCheckbox);
    const composedRefs = useComposedRefs(forwardedRef, setBubbleInput);
    const prevChecked = usePrevious(checked);
    const controlSize = useSize(control);
    reactExports.useEffect(() => {
      const input = bubbleInput;
      if (!input) return;
      const inputProto = window.HTMLInputElement.prototype;
      const descriptor = Object.getOwnPropertyDescriptor(
        inputProto,
        "checked"
      );
      const setChecked = descriptor.set;
      const bubbles = !hasConsumerStoppedPropagationRef.current;
      if (prevChecked !== checked && setChecked) {
        const event = new Event("click", { bubbles });
        input.indeterminate = isIndeterminate(checked);
        setChecked.call(input, isIndeterminate(checked) ? false : checked);
        input.dispatchEvent(event);
      }
    }, [bubbleInput, prevChecked, checked, hasConsumerStoppedPropagationRef]);
    const defaultCheckedRef = reactExports.useRef(isIndeterminate(checked) ? false : checked);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      Primitive.input,
      {
        type: "checkbox",
        "aria-hidden": true,
        defaultChecked: defaultChecked ?? defaultCheckedRef.current,
        required,
        disabled,
        name,
        value,
        form,
        ...props,
        tabIndex: -1,
        ref: composedRefs,
        style: {
          ...props.style,
          ...controlSize,
          position: "absolute",
          pointerEvents: "none",
          opacity: 0,
          margin: 0,
          // We transform because the input is absolutely positioned but we have
          // rendered it **after** the button. This pulls it back to sit on top
          // of the button.
          transform: "translateX(-100%)"
        }
      }
    );
  }
);
CheckboxBubbleInput.displayName = BUBBLE_INPUT_NAME;
function isFunction(value) {
  return typeof value === "function";
}
function isIndeterminate(checked) {
  return checked === "indeterminate";
}
function getState(checked) {
  return isIndeterminate(checked) ? "indeterminate" : checked ? "checked" : "unchecked";
}
const Checkbox = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  Checkbox$1,
  {
    ref,
    className: cn(
      "grid place-content-center peer h-4 w-4 shrink-0 rounded-sm border border-primary shadow focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",
      className
    ),
    ...props,
    children: /* @__PURE__ */ jsxRuntimeExports.jsx(CheckboxIndicator, { className: cn("grid place-content-center text-current"), children: /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "h-4 w-4" }) })
  }
));
Checkbox.displayName = Checkbox$1.displayName;
const isYouTube = (url) => /youtube\.com|youtu\.be/.test(url);
const toYouTubeEmbed = (url) => {
  const id = url.match(/(?:youtu\.be\/|v=|embed\/)([\w-]{11})/)?.[1] ?? "";
  return id ? `https://www.youtube.com/embed/${id}?autoplay=1` : url;
};
function TestimonialsSection({
  testimonials,
  title = "Real Families. Real Outcomes.",
  subtitle = "আমাদের পরিবারগুলোর অভিজ্ঞতা"
}) {
  const [active, setActive] = reactExports.useState(null);
  if (!testimonials.length) return null;
  const videos = testimonials.filter((t) => t.videoUrl);
  const cards = testimonials;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "max-w-7xl mx-auto px-4 sm:px-6 py-16 lg:py-20", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center max-w-2xl mx-auto mb-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl lg:text-4xl font-bold tracking-tight", children: title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-bangla text-muted-foreground mt-2", children: subtitle })
    ] }),
    videos.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-5 sm:grid-cols-2 lg:grid-cols-3 mb-10", children: videos.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "button",
      {
        type: "button",
        onClick: () => setActive(t),
        className: "group relative aspect-video overflow-hidden rounded-2xl border border-border bg-foreground text-background text-left",
        children: [
          t.thumbnail ? /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: t.thumbnail,
              alt: `${t.name} testimonial`,
              className: "absolute inset-0 size-full object-cover opacity-80 group-hover:opacity-100 transition",
              loading: "lazy"
            }
          ) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-br from-primary/40 to-foreground" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-foreground/40" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "size-14 rounded-full bg-background/90 text-foreground grid place-content-center group-hover:scale-110 transition", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Play, { className: "size-6 fill-current" }) }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute bottom-0 left-0 right-0 p-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-sm", children: t.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs opacity-80", children: t.relation })
          ] })
        ]
      },
      `v-${t.name}`
    )) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-5 md:grid-cols-2 lg:grid-cols-3", children: cards.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "article",
      {
        className: "p-6 rounded-2xl bg-background border border-border shadow-card flex flex-col",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Quote, { className: "size-6 text-primary/40" }),
            t.rating ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-0.5", children: Array.from({ length: 5 }).map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              Star,
              {
                className: `size-3.5 ${i < t.rating ? "fill-primary text-primary" : "text-muted"}`
              },
              i
            )) }) : null
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-base leading-relaxed flex-1", children: [
            '"',
            t.experience,
            '"'
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 p-3 rounded-lg bg-accent/40 border border-border", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold uppercase tracking-wider text-primary", children: "Outcome" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mt-0.5", children: t.outcome })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 pt-4 border-t border-border flex items-center justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-sm", children: t.name }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: t.relation })
            ] }),
            t.videoUrl && /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                type: "button",
                onClick: () => setActive(t),
                className: "inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:gap-2 transition-all",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Play, { className: "size-3.5 fill-current" }),
                  " Watch"
                ]
              }
            )
          ] })
        ]
      },
      `c-${t.name}`
    )) }),
    active?.videoUrl && /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "fixed inset-0 z-50 bg-foreground/80 backdrop-blur-sm flex items-center justify-center p-4",
        onClick: () => setActive(null),
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              "aria-label": "Close",
              className: "absolute top-4 right-4 size-10 rounded-full bg-background text-foreground grid place-content-center",
              onClick: () => setActive(null),
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "size-5" })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "w-full max-w-4xl aspect-video rounded-2xl overflow-hidden bg-black",
              onClick: (e) => e.stopPropagation(),
              children: isYouTube(active.videoUrl) ? /* @__PURE__ */ jsxRuntimeExports.jsx(
                "iframe",
                {
                  src: toYouTubeEmbed(active.videoUrl),
                  title: `${active.name} testimonial`,
                  className: "size-full",
                  allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
                  allowFullScreen: true
                }
              ) : /* @__PURE__ */ jsxRuntimeExports.jsx("video", { src: active.videoUrl, controls: true, autoPlay: true, className: "size-full" })
            }
          )
        ]
      }
    )
  ] });
}
function HomeCareServiceDetail() {
  const {
    service
  } = Route.useLoaderData();
  console.log("DETAIL PAGE MOUNTED");
  const trustItems = [{
    icon: Users,
    label: `${service.trust.seniorsServed.toLocaleString()}+ Seniors Served`
  }, {
    icon: Stethoscope,
    label: "Clinical Protocols"
  }, {
    icon: Clock,
    label: "Easy Coordination"
  }, {
    icon: ShieldCheck,
    label: "Comprehensive Solutions"
  }, {
    icon: HeartPulse,
    label: "Continuity of Care"
  }];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative overflow-hidden bg-gradient-to-br from-accent/40 via-background to-surface", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(HeroSlider, { images: HERO_IMAGES.homeCare }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-12 lg:py-20", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/care-at-home", className: "inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "size-4" }),
          " All Care at Home services"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-12 gap-10 items-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-7", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-background border border-border text-xs font-semibold text-primary mb-5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(HeartPulse, { className: "size-3.5" }),
              " ",
              service.bangla
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight", children: service.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-bangla text-primary font-semibold mt-3 text-lg", children: service.tagline }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg text-muted-foreground mt-5 max-w-xl leading-relaxed", children: service.subtitle }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row gap-3 mt-8", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, size: "lg", className: "gap-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "#enquiry", children: [
                "Enquire Now ",
                /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "size-4" })
              ] }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, size: "lg", variant: "outline", className: "gap-2 text-black !text-black", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: callLink, children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "size-4" }),
                " Talk to Care Advisor"
              ] }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, size: "lg", variant: "ghost", className: "gap-2 text-black !text-black", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: whatsappLink(`Hi, please send me the brochure for ${service.name}.`), target: "_blank", rel: "noopener noreferrer", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { className: "size-4 text-black !text-black" }),
                " Brochure"
              ] }) })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:col-span-5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-3xl bg-background border border-border shadow-card p-6 lg:p-8", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold uppercase tracking-wider mb-4 text-black !text-black", children: "Why families trust us" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-3", children: trustItems.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-3 text-black !text-black", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "size-9 rounded-lg bg-accent flex items-center justify-center shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(t.icon, { className: "size-4 text-accent-foreground" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: " text-sm text-black !text-black", children: t.label })
            ] }, t.label)) })
          ] }) })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "max-w-4xl mx-auto px-4 sm:px-6 py-16 lg:py-20", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-primary mb-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-6 h-px bg-primary" }),
        " About this service"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display text-3xl lg:text-4xl font-bold tracking-tight", children: [
        "What is ",
        service.name,
        "?"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg text-muted-foreground mt-5 leading-relaxed", children: service.description }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 p-5 rounded-2xl bg-accent/40 border border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-bangla text-base leading-relaxed", children: service.emotionalNote }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-surface py-16 lg:py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center max-w-2xl mx-auto mb-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl lg:text-4xl font-bold tracking-tight", children: "Service Advantages" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-bangla text-muted-foreground mt-2", children: service.trainingInfo })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-5 sm:grid-cols-2 lg:grid-cols-3", children: service.advantages.map((a) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 rounded-2xl bg-background border border-border hover:border-primary hover:shadow-card transition-all", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "size-5 text-primary mb-3" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-lg font-bold", children: a.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-bangla text-xs text-primary mt-0.5", children: a.bn }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mt-3 leading-relaxed", children: a.desc })
      ] }, a.title)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10 grid sm:grid-cols-2 gap-4 max-w-3xl mx-auto", children: service.features.map((f) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-2.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "size-4 text-primary shrink-0 mt-1" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm", children: f })
      ] }, f)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(TestimonialsSection, { testimonials: service.testimonials }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-surface py-16 lg:py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center max-w-2xl mx-auto mb-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl lg:text-4xl font-bold tracking-tight", children: "Choose a Plan" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-bangla text-muted-foreground mt-2", children: "পরিবার অনুযায়ী মূল্য — কোনো লুকানো খরচ নয়" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-5 md:grid-cols-3", children: service.packages.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `relative p-6 rounded-2xl bg-background border-2 transition-all flex flex-col ${p.popular ? "border-primary shadow-card" : "border-border"}`, children: [
        p.popular && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-primary text-primary-foreground text-[10px] font-bold uppercase tracking-wider", children: "Most Popular" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-lg font-bold", children: p.name }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-bangla text-xs text-primary mt-0.5", children: p.bangla }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-display text-2xl font-bold mt-4 tabular-nums", children: [
          "৳",
          formatBDT(p.priceFrom),
          "–",
          formatBDT(p.priceTo)
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground", children: [
          "/ ",
          p.unit
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-4 space-y-2 text-sm flex-1", children: p.features.map((f) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "size-3.5 text-primary shrink-0 mt-1" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: f })
        ] }, f)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, size: "sm", className: "mt-5 w-full", variant: p.popular ? "default" : "outline", children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#enquiry", children: "Request" }) })
      ] }, p.id)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 p-5 rounded-2xl bg-background border border-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-semibold", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "inline size-4 text-primary mr-1" }),
            " Custom Plan Available"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground font-bangla mt-0.5", children: "বাজেট ও প্রয়োজন বুঝে প্ল্যান সাজিয়ে দেব" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, variant: "outline", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: callLink, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "size-4 mr-1.5" }),
          " Talk to Advisor"
        ] }) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "max-w-6xl mx-auto px-4 sm:px-6 py-16 lg:py-20", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center max-w-2xl mx-auto mb-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl lg:text-4xl font-bold tracking-tight", children: "How It Works" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-bangla text-muted-foreground mt-2", children: "৩টি সহজ ধাপে সেবা শুরু" })
      ] }),
      (() => {
        const steps = service.slug === "icu-setup" ? [{
          num: "01",
          title: "Emergency Request",
          bn: "জরুরি অনুরোধ",
          desc: "Call or request — advisor responds within minutes.",
          Icon: Phone
        }, {
          num: "02",
          title: "ICU Setup at Home",
          bn: "ঘরেই ICU সেটআপ",
          desc: "Equipment, bed & ICU nurses deployed in 6 hours.",
          Icon: Stethoscope
        }, {
          num: "03",
          title: "Continuous Monitoring",
          bn: "২৪/৭ মনিটরিং",
          desc: "Round-the-clock care under doctor supervision.",
          Icon: ShieldCheck
        }] : [{
          num: "01",
          title: "Submit Request",
          bn: "অনুরোধ জমা দিন",
          desc: "Share your needs in under a minute.",
          Icon: Phone
        }, {
          num: "02",
          title: "Personalized Plan",
          bn: "কাস্টম প্ল্যান",
          desc: "Advisor designs the right care package.",
          Icon: Stethoscope
        }, {
          num: "03",
          title: "Service Starts",
          bn: "সেবা শুরু",
          desc: "Trained team arrives, care begins.",
          Icon: ShieldCheck
        }];
        return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hidden md:block absolute top-10 left-[16.66%] right-[16.66%] h-0.5 bg-gradient-to-r from-primary/30 via-primary/40 to-primary/30", "aria-hidden": true }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "md:hidden absolute top-0 bottom-0 left-7 w-0.5 bg-gradient-to-b from-primary/30 via-primary/40 to-primary/30", "aria-hidden": true }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative grid gap-5 md:grid-cols-3 md:gap-6", children: steps.map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex md:flex-col items-start md:items-center gap-4 md:gap-0 md:text-center pl-0 md:pl-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 flex items-center justify-center size-14 md:size-20 rounded-full bg-gradient-to-br from-primary to-primary/70 text-primary-foreground shadow-elegant shrink-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(s.Icon, { className: "size-6 md:size-8" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute -top-1 -right-1 md:-top-2 md:-right-2 inline-flex items-center justify-center min-w-6 h-6 px-1.5 rounded-full bg-background border border-primary text-primary text-[11px] font-bold", children: s.num })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 md:mt-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-base md:text-lg font-bold", children: s.title }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-bangla text-xs text-primary mt-0.5", children: s.bn }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mt-1.5 md:mt-2 md:max-w-[220px] md:mx-auto leading-relaxed", children: s.desc })
            ] }),
            i < steps.length - 1 && /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "md:hidden absolute -bottom-3 left-5 size-4 text-primary/60 rotate-90" })
          ] }, s.num)) })
        ] });
      })()
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-surface py-16 lg:py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-3xl mx-auto px-4 sm:px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl lg:text-4xl font-bold tracking-tight", children: "Frequently Asked" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-bangla text-muted-foreground mt-2", children: "আপনার প্রশ্নের উত্তর" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Accordion, { type: "single", collapsible: true, className: "space-y-3", children: service.faqs.map((f, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(AccordionItem, { value: `item-${i}`, className: "border border-border rounded-xl bg-background px-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(AccordionTrigger, { className: "text-left font-semibold hover:no-underline", children: f.q }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(AccordionContent, { className: "text-muted-foreground leading-relaxed", children: f.a })
      ] }, f.q)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(EnquirySection, { serviceName: service.name, serviceSlug: service.slug }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-foreground text-background py-16", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-3xl mx-auto px-6 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display font-bangla text-3xl lg:text-4xl font-bold mb-4 leading-tight", children: [
        "আপনার প্রিয়জনের যত্ন ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary", children: "আজই শুরু করুন" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row gap-3 justify-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, size: "lg", className: "bg-background text-foreground hover:bg-background/90 gap-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: callLink, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "size-4" }),
          " Call ",
          SITE.phoneDisplay
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, size: "lg", variant: "outline", className: "bg-transparent border-background/30 text-background hover:bg-background/10 gap-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: whatsappLink(`Hi, I'd like info about ${service.name}.`), target: "_blank", rel: "noopener noreferrer", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "size-4" }),
          " WhatsApp"
        ] }) })
      ] })
    ] }) })
  ] });
}
function EnquirySection({
  serviceName,
  serviceSlug
}) {
  const [form, setForm] = reactExports.useState({
    name: "",
    phone: "",
    email: "",
    message: ""
  });
  const [agree, setAgree] = reactExports.useState(true);
  const [submitting, setSubmitting] = reactExports.useState(false);
  const onSubmit = async (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.phone.trim()) {
      toast.error("Please enter your name and phone number.");
      return;
    }
    if (!agree) {
      toast.error("Please agree to be contacted.");
      return;
    }
    setSubmitting(true);
    const msg = `Enquiry: ${serviceName}
Name: ${form.name}
Phone: ${form.phone}
Email: ${form.email}
Message: ${form.message}`;
    window.open(whatsappLink(msg), "_blank");
    setSubmitting(false);
    toast.success("Thanks! We'll reach out within 2 hours.");
    setForm({
      name: "",
      phone: "",
      email: "",
      message: ""
    });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "enquiry", className: "max-w-3xl mx-auto px-4 sm:px-6 py-16 lg:py-20", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl lg:text-4xl font-bold tracking-tight", children: "Request a Free Consultation" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-bangla text-muted-foreground mt-2", children: "আমাদের কেয়ার অ্যাডভাইজার ২ ঘণ্টার মধ্যে কল করবেন" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit, className: "rounded-2xl border border-border bg-background p-6 lg:p-8 space-y-4 shadow-card", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid sm:grid-cols-2 gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "name", children: "Name *" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { id: "name", value: form.name, onChange: (e) => setForm({
            ...form,
            name: e.target.value
          }), maxLength: 100, required: true, className: "mt-1.5" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "phone", children: "Phone *" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { id: "phone", type: "tel", value: form.phone, onChange: (e) => setForm({
            ...form,
            phone: e.target.value
          }), maxLength: 20, required: true, className: "mt-1.5" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "email", children: "Email" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { id: "email", type: "email", value: form.email, onChange: (e) => setForm({
          ...form,
          email: e.target.value
        }), maxLength: 255, className: "mt-1.5" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "service", children: "Service" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-1.5 flex items-center gap-2 px-3 h-9 rounded-md border border-input bg-muted/40 text-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "size-3.5 text-primary" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold", children: serviceName }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-muted-foreground", children: [
            "(",
            serviceSlug,
            ")"
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "message", children: "Message" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Textarea, { id: "message", value: form.message, onChange: (e) => setForm({
          ...form,
          message: e.target.value
        }), maxLength: 1e3, rows: 4, className: "mt-1.5", placeholder: "Tell us a little about your loved one's needs..." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Checkbox, { id: "agree", checked: agree, onCheckedChange: (v) => setAgree(!!v), className: "mt-0.5" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "agree", className: "text-sm font-normal leading-relaxed", children: "I agree to be contacted via call / WhatsApp regarding this enquiry." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { type: "submit", size: "lg", className: "w-full gap-2", disabled: submitting, children: [
        "Submit Request ",
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "size-4" })
      ] })
    ] })
  ] });
}
export {
  HomeCareServiceDetail as component
};
