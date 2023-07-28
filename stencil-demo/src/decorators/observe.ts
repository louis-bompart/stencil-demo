export default function Observe(nameOfContainerToObserve: string) {
  return (proto, methodName: string) => {
    console.log(nameOfContainerToObserve, proto, methodName);
  };
}
