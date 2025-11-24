import AccordionCard from "@/components/accordian";
import Header from "@/components/header/header";
import Title from "@/components/title.tsx";
import { Separator } from "@/components/ui/separator";
import { Link } from "react-router-dom";

export default function Contact() {
  return (
    <>
      <Header />
      <Title heading="Contact Information " />

      <div className="gap-9 mx-24 my-8">
        <AccordionCard
          imageSrc="/assets/images/Subhan.jpg"
          title="Love to hear from you!"
          description={
            <>
              <p className="font-Bitter font-normal text-[17px] leading-[18px] text-[#5A5A5A] text-justify">
                Please send me your message whenever you want. I am just an
                email away from you.
              </p>
              <span className="font-Bitter font-normal text-[17px] text-[#5A5A5A] text-start">
                Email:&nbsp;
                <Link
                  to="https://mail.google.com/mail/u/0/#inbox"
                  target="_blank"
                  className="underline font-Bitter font-normal text-[17px] text-[#5A5A5A] text-start"
                >
                  subhan.ullah@nu.eud.pk
                </Link>
              </span>
              <br />

              <span className="font-Bitter font-normal text-[17px] text-[#5A5A5A] text-start">
                Cell Phone: 00923439733083
              </span>
              <br />

              <span className="font-Bitter font-normal text-[17px] text-[#5A5A5A] text-start">
                LinkedIn:&nbsp;
                <Link
                  to="https://www.linkedin.com/in/subhan-ullah"
                  target="_blank"
                  className="underline font-Bitter font-normal text-[17px] text-[#5A5A5A] text-start"
                >
                  linkedin.com/in/subhan-ullah
                </Link>
              </span>
              <br />

              <span className="font-Bitter font-normal text-[17px] text-[#5A5A5A] text-start">
                <Link
                  to="https://orcid.org/0000-0002-3925-621X"
                  target="_blank"
                  className="underline font-Bitter font-normal text-[17px] text-[#5A5A5A] text-start"
                >
                  https://orcid.org/0000-0002-3925-621X
                </Link>
              </span>
              <br />
            </>
          }
          imageClassName="w-[365px] h-[290px]"
          titleClassName="font-Bitter font-bold text-[22px] leading-[24px] text-[#45818e] py-8"
          cardClassName="w-auto border-none shadow-none"
          innerClassName="flex items-start justify-start gap-80 w-full px-1 py-1"
          descriptionClassName="font-Bitter font-normal text-[17px] text-[#5A5A5A] leading-[32px]"
        />
        <Separator className="h-0.5 my-7" />

        <div className="w-full min-h-screen bg-gray-50 p-8 border border-red-500">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* LEFT SIDE — CONTACT FORM */}
            <div className="bg-white shadow-lg rounded-xl p-6 border border-green-500">
              <div className="bg-white shadow-md p-6 mb-10 rounded-xl border">
                <h3 className="text-xl font-semibold mb-4">Office Address</h3>
                <p className="text-gray-700 leading-relaxed text-sm">
                  Office 204B, Second floor, Department of Computer Science,
                  <br />
                  FAST National University of Computer & Emerging Sciences,
                  <br />
                  Islamabad Campus, 3 A. K. Brohi Road, Sector H-11/4,
                  Islamabad, Pakistan.
                  <br />
                  Office: +92 (051) 111 128 128 Ext. 644
                </p>
              </div>

              <iframe
                src="https://docs.google.com/forms/d/e/1FAIpQLSf_Bovw202LRHFQBH0vrAbA9G9bgzgh6UDUI-_yrPLr4ofq8Q/viewform?embedded=true"
                className="w-full h-[850px] rounded-md"
              ></iframe>
            </div>

            {/* RIGHT SIDE — LOCATION + CALENDAR */}
            <div className="flex flex-col gap-8">
              {/* OFFICE ADDRESS */}

              {/* LOCATION MAP */}
              <div className="bg-white shadow-md p-6 rounded-xl border">
                <h3 className="text-xl font-semibold mb-4">My Location</h3>

                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18..."
                  className="w-full h-72 rounded-lg border"
                  loading="lazy"
                ></iframe>
              </div>

              {/* GOOGLE CALENDAR */}
              <div className="bg-white shadow-md p-6 rounded-xl border">
                <h3 className="text-xl font-semibold mb-4">My Calendar</h3>

                <iframe
                  src="https://calendar.google.com/calendar/embed?src=YOUR_CALENDAR_ID"
                  className="w-full h-96 rounded-lg border"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}



// import { ReactNode, useState } from "react";
// import { ChevronDown } from "lucide-react";
// import { Card, CardDescription, CardTitle } from "@/components/ui/card";

// interface AccordionCardProps {
//   /** Main image on left */
//   imageSrc?: string;

//   /** Title on right side */
//   title?: string | ReactNode;

//   /** Description on right */
//   description?: string | ReactNode;

//   /** Optional bottom expandable content */
//   expandContent?: ReactNode;

//   /** Custom styling */
//   className?: string;
//   imageClassName?: string;
//   titleClassName?: string;
//   descriptionClassName?: string;

//   /** Controlled Accordion (optional) */
//   open?: boolean;

//   /** Callback when toggled (optional) */
//   onToggle?: () => void;
// }

// export default function AccordionCard({
//   imageSrc,
//   title,
//   description,
//   expandContent,
//   className,
//   imageClassName,
//   titleClassName,
//   descriptionClassName,
//   open,
//   onToggle,
// }: AccordionCardProps) {
//   // Uncontrolled state (if parent does not control state)
//   const [internalOpen, setInternalOpen] = useState(false);

//   const isOpen = open !== undefined ? open : internalOpen;

//   const handleToggle = () => {
//     if (onToggle) onToggle();
//     else setInternalOpen(!internalOpen);
//   };

//   return (
//     <Card
//       className={
//         className
//           ? className
//           : "w-[360px] border border-gray-300 rounded-lg shadow-sm px-2 py-2"
//       }
//     >
//       <div className="flex items-start gap-6">
//         {/* Image Area */}
//         {imageSrc && (
//           <div className="relative">
//             <img
//               src={imageSrc}
//               alt=""
//               className={
//                 imageClassName
//                   ? imageClassName
//                   : "w-[120px] h-[120px] rounded-md border border-gray-300"
//               }
//             />

//             {/* Toggle Button — only if expandContent exists */}
//             {expandContent && (
//               <button
//                 className={`flex items-center justify-center absolute bottom-2 left-1/2 -translate-x-1/2 size-9 bg-black/70 hover:bg-black/90 rounded-full transition-transform duration-300 ${
//                   isOpen ? "rotate-180" : "rotate-0"
//                 }`}
//                 onClick={handleToggle}
//               >
//                 <ChevronDown size={22} className="text-white" />
//               </button>
//             )}
//           </div>
//         )}

//         {/* Text Section */}
//         <div className="flex-1">
//           <CardTitle
//             className={
//               titleClassName ??
//               "font-Bitter font-bold text-[20px] leading-tight text-[#45818e] mb-2"
//             }
//           >
//             {title}
//           </CardTitle>

//           <CardDescription
//             className={
//               descriptionClassName ??
//               "font-Bitter text-[15px] text-[#2F2F2F]"
//             }
//           >
//             {description}
//           </CardDescription>
//         </div>
//       </div>

//       {/* Expand Area */}
//       {expandContent && (
//         <div
//           className={`transition-all duration-500 overflow-hidden ${
//             isOpen ? "max-h-[250px] opacity-100 mt-4" : "max-h-0 opacity-0"
//           }`}
//         >
//           {expandContent}
//         </div>
//       )}
//     </Card>
//   );
// }

// import { useState } from "react";
// import DownCard from "@/components/card/down-card";
// import Header from "@/components/header/header";
// import Title from "@/components/title.tsx";
// import { Link } from "react-router-dom";

// export default function Awards() {
//   const [openCards, setOpenCards] = useState<{ [key: string]: boolean }>({});

//   // Reusable toggle function
//   const toggleCard = (key: string) => {
//     setOpenCards((prev) => ({ ...prev, [key]: !prev[key] }));
//   };

//   return (
//     <>
//       <Header />
//       <Title heading="Awards" />

//       <div className="gap-9 mx-24 my-8">

//         <div className="flex justify-center gap-16 mt-10 flex-wrap p-6 rounded-lg">

//           {/* CARD 1 */}
//           <DownCard
//             src="/assets/images/Erasmus.jpg"
//             title="Awarded for Ph.D"
//             description={
//               <>
//                 <Link to="https://icephd.org/" target="_blank" className="underline text-[#5A5A5A]">
//                   Erasmus Mundus Joint Doctorate Program (EMJD-ICE)
//                 </Link>
//                 &nbsp; scholarship awarded by European Union from 2015–2019.
//               </>
//             }
//             downImage={<img src="/assets/images/large_ICE_400x400.png" className="w-[155px] h-[155px]" />}
//             showdownImage={openCards["phd"]}
//             onToggle={() => toggleCard("phd")}
//           />

//           {/* CARD 2 */}
//           <DownCard
//             src="/assets/images/Erasmus.jpg"
//             title="Awarded for Joint International Master JIM (CS)"
//             description={
//               <>
//                 <Link to="https://www.idt.mdh.se/ideas/index.php" className="underline text-[#5A5A5A]">
//                   IDEAS scholarship
//                 </Link>
//                 &nbsp; for Joint International Master (JIM).
//               </>
//             }
//             downImage={<img src="/assets/images/logo.jpg" className="w-[155px] h-[155px]" />}
//             showdownImage={openCards["jim"]}
//             onToggle={() => toggleCard("jim")}
//           />

//           {/* AUR CARDS (Unlimited) */}
//           <DownCard
//             src="/assets/images/sample.png"
//             title="Any Other Scholarship"
//             description="Add as many cards as you want."
//             downImage={<img src="/assets/images/sample.png" className="w-[155px] h-[155px]" />}
//             showdownImage={openCards["otherScholarship"]}
//             onToggle={() => toggleCard("otherScholarship")}
//           />

//         </div>
//       </div>
//     </>
//   );
// }

// import { useState, ReactNode } from "react";
// import { ChevronDown } from "lucide-react";
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";

// interface PostCardProps {
//   src?: string;
//   title?: string | ReactNode;
//   description?: string | ReactNode;
//   footer?: string | ReactNode;
//   cardClassName?: string;
//   imgClassName?: string;
//   descriptionClassName?: string;
//   titleClassName?: string;
//   footerClassName?: string;
//   variant?: "default" | "awards";
// }

// export default function PostsCard2({
//   src,
//   title,
//   description,
//   footer,
//   cardClassName,
//   imgClassName,
//   descriptionClassName,
//   titleClassName,
//   footerClassName,
//   variant = "default",
// }: PostCardProps) {
//   const [showFooter, setShowFooter] = useState(false);

//   return (
//     <Card
//       className={
//         cardClassName
//           ? cardClassName
//           : "w-[355px] border border-gray-300 rounded-lg shadow-sm"
//       }
//     >
//       {variant === "awards" ? (
//         <>
//           <div className="flex items-start justify-start gap-8 w-full px-1 py-1 border border-purple-300">
//             <div className="w-auto border border-green-700">
//               <div className="flex items-center justify-center relative">
//                 <img
//                   src={src}
//                   alt="image not found"
//                   className={
//                     imgClassName
//                       ? imgClassName
//                       : "w-[100px] h-[100px] border border-gray-300 rounded-md "
//                   }
//                 />

//                 <button
//                   className={`flex items-center justify-center transition-transform duration-300 opacity-80 bg-[#2d2d2d] hover:bg-[#4d4d4d] rounded-full size-10 absolute bottom-2 ${
//                     showFooter ? "rotate-180" : "rotate-0"
//                   }`}
//                   onClick={() => setShowFooter((prev) => !prev)}
//                 >
//                   <ChevronDown size={24} className="text-white " />
//                 </button>
//               </div>

//               <div
//                 className={`transition-all duration-500 overflow-hidden border border-red-700 p-2 ${
//                   showFooter
//                     ? "max-h-[200px] opacity-100 mt-4 border border-green-700 p-2"
//                     : "max-h-0 opacity-0"
//                 }`}
//               >
//                 {footer}
//               </div>
//             </div>

//             {/* --- Text (Right Side) --- */}
//             <div className="flex-1 w-[250px]">
//               <CardTitle
//                 className={
//                   titleClassName
//                     ? titleClassName
//                     : "font-Bitter font-bold text-[21px] leading-[22px] text-[#45818e] py-5"
//                 }
//               >
//                 {title}
//               </CardTitle>
//               <CardDescription
//                 className={
//                   descriptionClassName
//                     ? descriptionClassName
//                     : "font-Bitter font-normal text-[16px] text-[#2F2F2F]"
//                 }
//               >
//                 {description}
//               </CardDescription>
//             </div>
//           </div>
//         </>
//       ) : (
//         <>
//           {/* --- Default Layout --- */}
//           <CardHeader className="p-0">
//             <img src={src} alt="image not found" />
//             <CardTitle
//               className={
//                 titleClassName
//                   ? titleClassName
//                   : "p-6 font-Bitter font-bold text-[20px] text-[#45818e] text-center"
//               }
//             >
//               {title}
//             </CardTitle>
//           </CardHeader>

//           <CardContent className="p-0">
//             <CardDescription
//               className={
//                 descriptionClassName
//                   ? descriptionClassName
//                   : "px-3 font-Bitter text-[16.5px] text-[#2F2F2F] text-center"
//               }
//             >
//               {description}
//             </CardDescription>
//           </CardContent>

//           <CardFooter
//             className={
//               footerClassName
//                 ? footerClassName
//                 : "p-6 font-Bitter text-[16.5px] text-[#2F2F2F] text-center"
//             }
//           >
//             {footer}
//           </CardFooter>
//         </>
//       )}
//     </Card>
//   );
// }
///////////////////////////////////////////////////////////////////////

// import { useState, ReactNode } from "react";
// import { ChevronDown } from "lucide-react";
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";

// interface PostCardProps {
//   src?: string;
//   title?: string | ReactNode;
//   description?: string | ReactNode;
//   footer?: string | ReactNode;
//   cardClassName?: string;
//   imgClassName?: string;
//   descriptionClassName?: string;
//   titleClassName?: string;
//   footerClassName?: string;
//   variant?: "default" | "awards";
// }

// export default function PostsCard2({
//   src,
//   title,
//   description,
//   footer,
//   cardClassName,
//   imgClassName,
//   descriptionClassName,
//   titleClassName,
//   footerClassName,
//   variant = "default",
// }: PostCardProps) {
//   const [showFooter, setShowFooter] = useState(false);

//   // Common class names
//   const defaultCardClasses = "w-[355px] border border-gray-300 rounded-lg shadow-sm";
//   const defaultTitleClasses = "font-Bitter font-bold text-[20px] text-[#45818e] text-center";
//   const defaultDescriptionClasses = "font-Bitter text-[16.5px] text-[#2F2F2F] text-center";
//   const defaultFooterClasses = "font-Bitter text-[16.5px] text-[#2F2F2F] text-center";
//   const defaultImgClasses = "border border-gray-300 rounded-md";

//   if (variant === "awards") {
//     return (
//       <Card className={cardClassName || defaultCardClasses}>
//         <div className="flex items-start justify-start gap-8 w-full px-1 py-1">
//           {/* Left Side - Image with toggle button */}
//           <div className="w-auto">
//             <div className="flex items-center justify-center relative">
//               <img
//                 src={src}
//                 alt="Award"
//                 className={imgClassName || `w-[100px] h-[100px] ${defaultImgClasses}`}
//               />
//               <button
//                 className={`flex items-center justify-center transition-transform duration-300 opacity-80 bg-[#2d2d2d] hover:bg-[#4d4d4d] rounded-full size-10 absolute bottom-2 ${
//                   showFooter ? "rotate-180" : "rotate-0"
//                 }`}
//                 onClick={() => setShowFooter((prev) => !prev)}
//               >
//                 <ChevronDown size={24} className="text-white" />
//               </button>
//             </div>

//             {/* Collapsible Footer */}
//             <div
//               className={`transition-all duration-500 overflow-hidden ${
//                 showFooter ? "max-h-[200px] opacity-100 mt-4 p-2" : "max-h-0 opacity-0"
//               }`}
//             >
//               {footer}
//             </div>
//           </div>

//           {/* Right Side - Text Content */}
//           <div className="flex-1 w-[250px]">
//             <CardTitle className={titleClassName || "font-Bitter font-bold text-[21px] leading-[22px] text-[#45818e] py-5"}>
//               {title}
//             </CardTitle>
//             <CardDescription className={descriptionClassName || "font-Bitter font-normal text-[16px] text-[#2F2F2F]"}>
//               {description}
//             </CardDescription>
//           </div>
//         </div>
//       </Card>
//     );
//   }

//   // Default variant
//   return (
//     <Card className={cardClassName || defaultCardClasses}>
//       <CardHeader className="p-0">
//         <img src={src} alt="Post" className={imgClassName} />
//         <CardTitle className={titleClassName || `p-6 ${defaultTitleClasses}`}>
//           {title}
//         </CardTitle>
//       </CardHeader>

//       <CardContent className="p-0">
//         <CardDescription className={descriptionClassName || `px-3 ${defaultDescriptionClasses}`}>
//           {description}
//         </CardDescription>
//       </CardContent>

//       <CardFooter className={footerClassName || `p-6 ${defaultFooterClasses}`}>
//         {footer}
//       </CardFooter>
//     </Card>
//   );
// }
//////////////////////////////////////////////////////////////////////////

// import { useState } from "react";
// import { ChevronDown } from "lucide-react";
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
// import { ReactNode } from "react";

// interface PostCardProps {
//   src?: string;
//   title?: string | ReactNode;
//   description?: string | ReactNode;
//   footer?: string | ReactNode;
//   cardClassName?: string;
//   imgClassName?: string;
//   descriptionClassName?: string;
//   titleClassName?: string;
//   footerClassName?: string;
//   variant?: "default" | "awards";
// }

// export default function PostsCard2({
//   src,
//   title,
//   description,
//   footer,
//   cardClassName,
//   imgClassName,
//   descriptionClassName,
//   titleClassName,
//   footerClassName,
//   variant = "default",
// }: PostCardProps) {
//   const [showFooter, setShowFooter] = useState(false);

//   return (
//     <Card
//       className={
//         cardClassName ? cardClassName : "w-[355px] border-none shadow-none"
//       }
//     >
//       {variant === "awards" ? (
//         <>
//           {/* --- Image + Text Side by Side --- */}
//           <div className="flex items-center justify-center gap-5 w-full px-6 py-4">
//             {/* --- Image + Arrow --- */}
//             <div className="flex flex-col items-center justify-center">
//               <img
//                 src={src}
//                 alt="image not found"
//                 className={
//                   imgClassName
//                     ? imgClassName
//                     : "w-[120px] h-[120px] object-contain"
//                 }
//               />
//               <button
//                 className={`mt-2 transition-transform duration-300 ${
//                   showFooter ? "rotate-90" : "rotate-0"
//                 }`}
//                 onClick={() => setShowFooter((prev) => !prev)}
//               >
//                 <ChevronDown size={26} />
//               </button>
//             </div>

//             {/* --- Text (Right Side) --- */}
//             <div className="flex-1">
//               <CardTitle
//                 className={
//                   titleClassName
//                     ? titleClassName
//                     : "font-Bitter font-bold text-[18px] text-[#45818e] mb-1"
//                 }
//               >
//                 {title}
//               </CardTitle>
//               <CardDescription
//                 className={
//                   descriptionClassName
//                     ? descriptionClassName
//                     : "font-Bitter font-normal text-[15px] text-[#2F2F2F] leading-relaxed"
//                 }
//               >
//                 {description}
//               </CardDescription>
//             </div>
//           </div>

//           {/* --- Footer Toggle --- */}
//           <div
//             className={`transition-all duration-500 overflow-hidden ${
//               showFooter ? "max-h-[300px] opacity-100" : "max-h-0 opacity-0"
//             }`}
//           >
//             <CardFooter
//               className={
//                 footerClassName
//                   ? footerClassName
//                   : "p-4 flex justify-center border-t"
//               }
//             >
//               {footer}
//             </CardFooter>
//           </div>
//         </>
//       ) : (
//         <>
//           {/* --- Default Layout --- */}
//           <CardHeader className="p-0">
//             <img src={src} alt="image not found" />
//             <CardTitle
//               className={
//                 titleClassName
//                   ? titleClassName
//                   : "p-6 font-Bitter font-bold text-[20px] text-[#45818e] text-center"
//               }
//             >
//               {title}
//             </CardTitle>
//           </CardHeader>

//           <CardContent className="p-0">
//             <CardDescription
//               className={
//                 descriptionClassName
//                   ? descriptionClassName
//                   : "px-3 font-Bitter text-[16.5px] text-[#2F2F2F] text-center"
//               }
//             >
//               {description}
//             </CardDescription>
//           </CardContent>

//           <CardFooter
//             className={
//               footerClassName
//                 ? footerClassName
//                 : "p-6 font-Bitter text-[16.5px] text-[#2F2F2F] text-center"
//             }
//           >
//             {footer}
//           </CardFooter>
//         </>
//       )}
//     </Card>
//   );
// }

// cardClassName="max-w-[600px] bg-white rounded-lg shadow-md p-4 flex flex-col items-center text-center"
// titleClassName="pt-4 font-Bitter font-bold text-[22px] text-[#45818e] text-center"
// descriptionClassName="px-4 font-Bitter font-normal text-[17px] leading-[26px] text-[#5A5A5A] text-center"
// footerClassName="pt-4 pb-2"

// import {
//   FormControl,
//   FormField,
//   FormMessage,
// } from "@/components/ui/form";

// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";
// import { Control } from "react-hook-form";
// import Input from "../ui/input";
// import { useState } from "react";

// export type SelectFormProps = {
//   name: string;
//   label?: string;
//   placeholder?: string;
//   options?: { label: string; value: string }[];
//   control?: Control<any>;
//   isRequired?: boolean;
//   onChange?: (value: string) => void;
//   variant?: "default" | "login" | "custom1";
//   labelClassName?: string;
//   inputClassName?: string;
//   containerClassName?: string;
// };

// export function FormSelect({
//   control,
//   name,
//   label,
//   placeholder,
//   options,
//   isRequired,
//   onChange,
//   variant = "default",
//   containerClassName,
//   inputClassName,
//   labelClassName,
// }: SelectFormProps) {
//   const [search, setSearch] = useState("");

//   const filteredOptions = (options ?? []).filter((option) =>
//     option.label.toLowerCase().includes(search.toLowerCase())
//   );

//   const hasLabel = Boolean(label);

//   const layoutClasses =
//     containerClassName ??
//     (variant === "login"
//       ? "flex-col gap-4 items-center"
//       : variant === "custom1"
//       ? "flex flex-col bg-gray-100 p-4 rounded-md"
//       : hasLabel
//       ? "flex gap-4 items-center"
//       : "");

//   return (
//     <FormField
//       control={control}
//       name={name}
//       render={({ field }) => (
//         <div className={layoutClasses}>
//           {hasLabel && (
//             <label
//               className={
//                 labelClassName
//                   ? labelClassName
//                   : "flex-1 p-2 font-bold text-wrap"
//               }
//             >
//               {label}
//               {isRequired && <span className="text-red-600"> *</span>}
//             </label>
//           )}

//           <div className={hasLabel ? "flex-[2]" : ""}>
//           {/* <div className="flex-1"> */}
//             <Select
//               value={field.value}
//               onValueChange={(val) => {
//                 field.onChange(val);
//                 onChange?.(val);
//               }}
//             >
//               <FormControl>
//                 <SelectTrigger
//                   className={
//                     inputClassName
//                       ? inputClassName
//                       : "p-2 rounded border border-input border-zinc-950 text-nowrap w-full"
//                   }
//                 >
//                   <SelectValue placeholder={placeholder} />
//                 </SelectTrigger>
//               </FormControl>

//               <SelectContent>
//                 <div className="p-2">
//                   <Input
//                     className="w-full border rounded p-2"
//                     placeholder="Search..."
//                     value={search}
//                     onChange={(e) => setSearch(e.target.value)}
//                   />
//                 </div>
//                 {filteredOptions.length > 0 ? (
//                   filteredOptions.map((option) => (
//                     <SelectItem key={option.value} value={option.value}>
//                       {option.label}
//                     </SelectItem>
//                   ))
//                 ) : (
//                   <div className="p-2 text-center text-gray-500">
//                     No results found
//                   </div>
//                 )}
//                 {/* {options?.map((option) => (
//                   <SelectItem key={option.label} value={option.value}>
//                     {option.label}
//                   </SelectItem>
//                 ))} */}
//               </SelectContent>
//             </Select>
//             <FormMessage className="text-red-600 text-sm font-normal" />
//           </div>
//         </div>
//       )}
//     />
//   );
// }

//              description={
//               <>
//                 <Link
//                   to="https://globaliotsummit.org/giots-2018-bilbao/"
//                   target="_blank"
//                   className="text-[#4A86E8] hover:text-[#3d72c9]"
//                 ></Link>
//                 &nbsp;
//               </>
//             }
// import React, { useState } from "react";

// const Navbar: React.FC = () => {
//   const [isMenuOpen, setMenuOpen] = useState(false);
//   const [isDropdownOpen, setDropdownOpen] = useState(false);

//   return (
//     <div className="w-full text-gray-700 bg-white dark:text-gray-200 dark:bg-gray-800">
//       <div className="flex flex-col max-w-screen-xl px-4 mx-auto md:flex-row md:items-center md:justify-between md:px-6 lg:px-8">
//         <div className="flex items-center justify-between p-4">
//           <a
//             href="#"
//             className="text-lg font-semibold tracking-widest text-gray-900 uppercase dark:text-white focus:outline-none"
//           >
//             Flowtrail UI
//           </a>
//           <button
//             className="md:hidden focus:outline-none"
//             onClick={() => setMenuOpen(!isMenuOpen)}
//           >
//             <svg fill="currentColor" viewBox="0 0 20 20" className="w-6 h-6">
//               {isMenuOpen ? (
//                 <path
//                   fillRule="evenodd"
//                   d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
//                   clipRule="evenodd"
//                 />
//               ) : (
//                 <path
//                   fillRule="evenodd"
//                   d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
//                   clipRule="evenodd"
//                 />
//               )}
//             </svg>
//           </button>
//         </div>
//         <nav
//           className={`${
//             isMenuOpen ? "flex" : "hidden"
//           } flex-col md:flex-row md:flex md:justify-end md:items-center pb-4 md:pb-0`}
//         >
//           <a
//             href="#"
//             // className="px-4 py-2 mt-2 text-sm font-semibold text-gray-900 bg-gray-200 rounded-lg dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:bg-gray-600 dark:focus:text-white dark:hover:text-white dark:text-gray-200 md:mt-0 hover:bg-gray-200 focus:outline-none"
//             className="px-4 py-2 mt-2 text-sm font-semibold text-gray-900 bg-gray-200 rounded-lg dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:bg-gray-600 dark:focus:text-white dark:hover:text-white dark:text-gray-200 md:mt-0 hover:bg-gray-200 focus:outline-none"
//           >
//             Blog
//           </a>
//           <a
//             href="#"
//             className="px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark:hover:bg-gray-600 dark:focus:bg-gray-600 dark:focus:text-white dark:hover:text-white dark:text-gray-200 md:ml-4 md:mt-0 hover:bg-gray-200 focus:outline-none"
//           >
//             Portfolio
//           </a>
//           <a
//             href="#"
//             className="px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark:hover:bg-gray-600 dark:focus:bg-gray-600 dark:focus:text-white dark:hover:text-white dark:text-gray-200 md:ml-4 md:mt-0 hover:bg-gray-200 focus:outline-none"
//           >
//             About
//           </a>
//           <a
//             href="#"
//             className="px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark:hover:bg-gray-600 dark:focus:bg-gray-600 dark:focus:text-white dark:hover:text-white dark:text-gray-200 md:ml-4 md:mt-0 hover:bg-gray-200 focus:outline-none"
//           >
//             Contact
//           </a>
//           //////////
//           <div className="relative" onMouseLeave={() => setDropdownOpen(false)}>
//             <button
//               onClick={() => setDropdownOpen(!isDropdownOpen)}
//               className="flex items-center px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark:hover:bg-gray-600 dark:focus:bg-gray-600 dark:focus:text-white dark:hover:text-white dark:text-gray-200 md:ml-4 md:mt-0 hover:bg-gray-200 focus:outline-none"
//             >
//               <span>Dropdown</span>
//               <svg
//                 fill="currentColor"
//                 viewBox="0 0 20 20"
//                 className={`inline w-4 h-4 mt-1 ml-1 transition-transform duration-200 transform ${
//                   isDropdownOpen ? "rotate-180" : "rotate-0"
//                 }`}
//               >
//                 <path
//                   fillRule="evenodd"
//                   d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
//                   clipRule="evenodd"
//                 />
//               </svg>
//             </button>
//             {isDropdownOpen && (
//               <div className="absolute right-0 w-48 mt-2 origin-top-right bg-white rounded-md shadow-lg dark:bg-gray-800">
//                 <a
//                   href="#"
//                   className="block px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark:hover:bg-gray-600 dark:focus:bg-gray-600 dark:focus:text-white dark:hover:text-white dark:text-gray-200 hover:bg-gray-200 focus:outline-none"
//                 >
//                   Link #1
//                 </a>
//                 <a
//                   href="#"
//                   className="block px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark:hover:bg-gray-600 dark:focus:bg-gray-600 dark:focus:text-white dark:hover:text-white dark:text-gray-200 hover:bg-gray-200 focus:outline-none"
//                 >
//                   Link #2
//                 </a>
//                 <a
//                   href="#"
//                   className="block px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark:hover:bg-gray-600 dark:focus:bg-gray-600 dark:focus:text-white dark:hover:text-white dark:text-gray-200 hover:bg-gray-200 focus:outline-none"
//                 >
//                   Link #3
//                 </a>
//               </div>
//             )}
//           </div>
//         </nav>
//       </div>
//     </div>
//   );
// };
// export default Navbar;

// import { useState } from "react";
// import { Link, NavLink } from "react-router-dom";
// import DropdownMenuDemo, { DropDown } from "../dropdown/drop-down";
// import { FiMenu } from "react-icons/fi";

// const navlinkClass = "text-white px-5 py-2 hover:text-gray-300 inline-block";

// export default function Header() {
//   const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

//   return (
//     <nav className="bg-headercolor sticky top-0 w-full h-14 flex justify-between items-center px-4 md:px-8">
//       {/* Left Section - Logo */}
//       <div className="text-white font-bold text-nowrap">
//         <Link to="/">Subhan Ullah (Ph.D)</Link>
//       </div>

//       {/* Center Section - Navigation Links (Hidden on Small Screens) */}
//       <div className="hidden md:flex space-x-4">
//         <NavLink className={navlinkClass} to="/">Home</NavLink>
//         <NavLink className={navlinkClass} to="/about">About</NavLink>
//         <NavLink className={navlinkClass} to="/Team">Team</NavLink>
//         <NavLink className={navlinkClass} to="/Research">Research</NavLink>
//         <NavLink className={navlinkClass} to="/Teaching">Teaching</NavLink>
//         <NavLink className={navlinkClass} to="/News">News</NavLink>
//         <NavLink className={navlinkClass} to="/extra">
//           <DropDown Dropdown="Dropdown" />
//         </NavLink>
//         <NavLink className={navlinkClass} to="/extra">
//           <DropdownMenuDemo />
//         </NavLink>
//       </div>

//       {/* Right Section - Search Bar & Mobile Menu Button */}
//       <div className="flex items-center space-x-4">
//         {/* Search Bar */}
//         <form className="hidden md:flex items-center bg-gradient-to-r from-black to-cyan-400 text-white p-1 rounded border border-white">
//           <input
//             className="bg-transparent text-inherit border-none outline-none placeholder:text-gray-300"
//             type="text"
//             placeholder="Search"
//           />
//           <button className="w-6 h-6 grid place-items-center cursor-pointer">
//             <i className="bi bi-search"></i>
//           </button>
//         </form>

//         {/* Mobile Menu Button */}
//         <button
//           className="md:hidden text-white text-2xl"
//           onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
//         >
//           <FiMenu />
//         </button>
//       </div>

//       {/* Mobile Navigation Menu */}
//       {isMobileMenuOpen && (
//         <div className="absolute top-14 left-0 w-full bg-headercolor flex flex-col items-center space-y-2 py-4 md:hidden">
//           <NavLink className={navlinkClass} to="/" onClick={() => setMobileMenuOpen(false)}>Home</NavLink>
//           <NavLink className={navlinkClass} to="/about" onClick={() => setMobileMenuOpen(false)}>About</NavLink>
//           <NavLink className={navlinkClass} to="/Team" onClick={() => setMobileMenuOpen(false)}>Team</NavLink>
//           <NavLink className={navlinkClass} to="/Research" onClick={() => setMobileMenuOpen(false)}>Research</NavLink>
//           <NavLink className={navlinkClass} to="/Teaching" onClick={() => setMobileMenuOpen(false)}>Teaching</NavLink>
//           <NavLink className={navlinkClass} to="/News" onClick={() => setMobileMenuOpen(false)}>News</NavLink>
//           <NavLink className={navlinkClass} to="/extra" onClick={() => setMobileMenuOpen(false)}>
//             <DropDown Dropdown="Dropdown" />
//           </NavLink>
//           <NavLink className={navlinkClass} to="/extra" onClick={() => setMobileMenuOpen(false)}>
//             <DropdownMenuDemo />
//           </NavLink>
//           {/* Search Bar for Mobile */}
//           <form className="flex items-center bg-gradient-to-r from-black to-cyan-400 text-white p-1 rounded border border-white">
//             <input
//               className="bg-transparent text-inherit border-none outline-none placeholder:text-gray-300"
//               type="text"
//               placeholder="Search"
//             />
//             <button className="w-6 h-6 grid place-items-center cursor-pointer">
//               <i className="bi bi-search"></i>
//             </button>
//           </form>
//         </div>
//       )}
//     </nav>
//   );
// }

// import { useState } from "react";
// import { NavLink } from "react-router-dom";
// import DropdownLink from "./DropdownLink"; // Adjust the import path as needed

// const navlinkClass = "text-white px-5 py-2 hover:text-gray-300 inline-block";

// export default function Header() {
//   const [isDropdownOpen, setDropdownOpen] = useState(false);

//   return (
//     <nav className="bg-headercolor sticky top-0 w-full h-14 flex space-x-4">
//       <div className="float-left p-4 text-white font-bold text-nowrap w-1/3">
//         <NavLink to="/">Subhan Ullah (Ph.D)</NavLink>
//       </div>
//       <div className="w-2/3 pt-1.5">
//         <div className="float-right">
//           <NavLink className={navlinkClass} to="/">
//             Home
//           </NavLink>
//           <NavLink className={navlinkClass} to="/about">
//             About
//           </NavLink>

//           <div
//             className="relative"
//             onMouseEnter={() => setDropdownOpen(true)}
//             onMouseLeave={() => setDropdownOpen(false)}
//           >
//             <button className="flex items-center px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark:hover:bg-gray-600 dark:focus:bg-gray-600 dark:focus:text-white dark:hover:text-white dark:text-gray-200 md:ml-4 md:mt-0 hover:bg-gray-200 focus:outline-none">
//               <span>Dropdown</span>
//               <svg
//                 fill="currentColor"
//                 viewBox="0 0 20 20"
//                 className={`inline w-4 h-4 mt-1 ml-1 transition-transform duration-200 transform ${
//                   isDropdownOpen ? "rotate-180" : "rotate-0"
//                 }`}
//               >
//                 <path
//                   fillRule="evenodd"
//                   d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
//                   clipRule="evenodd"
//                 />
//               </svg>
//             </button>
//             {isDropdownOpen && (
//               <div className="absolute right-0 w-48 mt-2 origin-top-right bg-white rounded-md shadow-lg dark:bg-gray-800">
//                 <DropdownLink to="/link1" text="Link #1" />
//                 <DropdownLink to="/link2" text="Link #2" />
//                 <DropdownLink to="/link3" text="Link #3" />
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// }

// // Navbar.js

// import { useState } from "react";
// import { NavLink } from "react-router-dom";

// const Extra = () => {
//   const [openNav, setOpenNav] = useState(false);
//   const [openAvatarDropdown, setOpenAvatarDropdown] = useState(false);

//   const toggleNav = () => {
//     setOpenNav(!openNav);
//     setOpenAvatarDropdown(false);
//   };

//   const toggleAvatarDropdown = () => {
//     setOpenAvatarDropdown(!openAvatarDropdown);
//   };

//   const navList = () => {
//     return (
//       <>
//         <NavLink
//           to="/"
//           className={({ isActive, isPending }) =>
//             isPending ? "pending" : isActive ? "text-blue-900" : ""
//           }
//         >
//           Home
//         </NavLink>
//         <NavLink
//           to="/event"
//           className={({ isActive, isPending }) =>
//             isPending ? "pending" : isActive ? "text-blue-900" : ""
//           }
//         >
//           Event
//         </NavLink>
//         <NavLink
//           to="/services"
//           className={({ isActive, isPending }) =>
//             isPending ? "pending" : isActive ? "text-blue-900" : ""
//           }
//         >
//           Services
//         </NavLink>
//         <NavLink
//           to="/registration"
//           className={({ isActive, isPending }) =>
//             isPending ? "pending" : isActive ? "text-blue-900" : ""
//           }
//         >
//           Registration
//         </NavLink>
//       </>
//     );
//   };

//   return (
//     <header className="bg-slate-200 border-b-2 border-gray-200 font-DM">
//       <div className="container mx-auto py-4 px-4 md:flex md:items-center md:justify-between">
//         <div className="flex items-center justify-between">
//           <a href="#" className="text-2xl font-semibold text-gray-800">
//             <img className="w-20" src="WellnessFusion.png" alt="" />
//           </a>
//           <button
//             onClick={toggleNav}
//             className="block md:hidden border border-gray-600 p-2 rounded text-gray-600 hover:bg-gray-200 focus:outline-none focus:bg-gray-300"
//           >
//             <svg
//               className={`w-6 h-6 ${openNav ? "hidden" : "block"}`}
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M4 6h16M4 12h16m-7 6h7"
//               ></path>
//             </svg>
//             <svg
//               className={`w-6 h-6 ${openNav ? "block" : "hidden"}`}
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M6 18L18 6M6 6l12 12"
//               ></path>
//             </svg>
//           </button>
//         </div>
//         <nav className="hidden md:flex space-x-4">{navList()}</nav>
//         <div
//           className={`${
//             openNav ? "" : "hidden"
//           } mt-4  bg-slate-400 flex flex-col gap-4 p-6  rounded `}
//         >
//           {navList()}
//         </div>
//         <div
//           onClick={toggleAvatarDropdown}
//           className="relative transition-all duration-500"
//         >
//           <span className="cursor-pointer">Avatar</span>
//           <div
//             className={`absolute ${
//               openAvatarDropdown ? "block" : "hidden"
//             } bg-slate-300 rounded shadow-md mt-2 space-y-2`}
//           >
//             <div className="p-4 flex flex-col ">
//               <NavLink to="/profile">Profile</NavLink>
//               <NavLink to="/dashboard">Dashboard</NavLink>
//             </div>
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Extra;

// import { NavLink } from "react-router-dom";

// export default function Header() {
//   const navLinkStyles = ({ isActive }: { isActive: boolean }) => {
//     return {
//       fontWeight: isActive ? "normal" : "normal",
//       textDecoration: isActive ? "none" : "underline",
//       color: isActive ? "black" : "black",
//     };
//   };

//   const navlinkClass = "group justify-items-center pt-2 pb-1";
//   const iconClass =
//     "w-10 h-10 p-2 hover:bg-iconcolor group-[.active]:bg-iconcolor border-2 border-solid border-emeraldc rounded-xl";

//   return (
//     <nav className=" border-2 border-solid border-b-neutral-500">
//       <div className="primary-nav px-10 text-nowrap bg-white flex flex-col items-center sm:flex-row sm:justify-between">
//         <div
//           className="border-2 border-solid border-yellow-500 justify-items-center"
//           style={navLinkStyles({ isActive: true })}
//         >
//           <img src="/logo.png" alt="logo" />
//         </div>
//         <div className="sm:flex sm:space-x-20">
//           <NavLink
//             className={navlinkClass}
//             style={navLinkStyles({ isActive: true })}
//             to="/employee-management"
//           >
//             <div className={iconClass}>
//               <img src="/usersIcon.ico" alt="User icon" />
//             </div>
//             Employees
//           </NavLink>

//           <NavLink
//             className={navlinkClass}
//             style={navLinkStyles({ isActive: true })}
//             to="/atm-machines"
//           >
//             <div className={iconClass}>
//               <img src="/atmIcon.ico" alt="ATM icon" />
//             </div>
//             Machines
//           </NavLink>

//           <NavLink
//             className={navlinkClass}
//             style={navLinkStyles({ isActive: true })}
//             to="/roster"
//           >
//             <div className={iconClass}>
//               <img src="/rosterIcon.ico" alt="Rosters Icon" />
//             </div>
//             Rosters
//           </NavLink>

//           <NavLink
//             className={navlinkClass}
//             style={navLinkStyles({ isActive: true })}
//             to="/route-management"
//           >
//             <div className={iconClass}>
//               <img src="/routeIcon.ico" alt="Routes Icon" />
//             </div>
//             Routes
//           </NavLink>
//         </div>

//         <button style={navLinkStyles({ isActive: true })}>
//           Log Out
//         </button>
//       </div>
//     </nav>
//   );
// }
