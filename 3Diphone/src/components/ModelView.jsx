import { View } from '@react-three/drei';

function ModelView({
  index,
  groupRef,
  gsapType,
  controlRef,
  setRotationSize,
  size,
  item,
}) {
  return (
    <View
      index={index}
      id={gsapType}
      className="border-2 border-red-500"
    ></View>
  );
}

export default ModelView;
