export default function Section({ id, children, className, cardSection }) {
  // For now only normal section in use untill deleted

  // if (cardSection) {
  //   return (
  //     <div className={` mx-auto w-full px-0 lg:px-10  visible overflow-visible ${className ? className : ''}`}>
  //       {children}
  //     </div>
  //   )
  // }

  return (
    <section
      id={id}
      className={`relative mx-auto w-full h-fit max-w-7xl px-4 mobm:px-6 sm:px-12 lg:px-0  mt-12 sm:mt-24 ${
        className && className
      }`}
    >
      {children}
    </section>
  );
}