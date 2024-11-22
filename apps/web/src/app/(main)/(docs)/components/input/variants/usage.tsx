import { Input } from "@jamsr-ui/react";

export const InputUsage = () => {
  return <Input label="Enter your email" type="email" />;
};

// export const InputUsage = () => {
//   return (
//     <UIStyleProvider
//       input={{
//         classNames: {
//           inputWrapper:
//             "border-gray-400 hover:border-gray-500 group-data-[focused=true]:border-black",
//         },
//       }}
//     >
//       <Input label="Enter your email" type="email" />
//     </UIStyleProvider>
//   );
// };
