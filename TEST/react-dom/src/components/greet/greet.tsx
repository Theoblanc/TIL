type GreedProps = {
  name?: string;
};
export const Greet = (props: GreedProps) => {
  return <div>Hello {props.name ? props.name : "Guest"}</div>;
};
