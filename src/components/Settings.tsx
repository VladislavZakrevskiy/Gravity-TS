import { useState } from 'react';
import CustomInput from './CustomInput';
const Settings = () => {
	const [G, setG] = useState<number>(39.5);
	const [softeningConstant, setSofteningConstant] = useState<number>(0.15);
	const [dt, setDt] = useState<number>(0.003);
	const [scale, setScale] = useState<number>(70);
	const [radius, setRadius] = useState<number>(4);
	const [trail, setTrail] = useState<number>(35);

	return (
		<div style={{ position: 'absolute', top: 0, padding: 20, display: 'flex', gap: 5 }}>
			<CustomInput placeholder="G:" value={G} setValue={setG} />
			<CustomInput
				placeholder="Softening constant:"
				value={softeningConstant}
				setValue={setSofteningConstant}
			/>
			<CustomInput
				placeholder="Definition of time:"
				value={dt}
				setValue={setDt}
			/>
			<CustomInput placeholder="Scale:" value={scale} setValue={setScale} />
			<CustomInput placeholder="Radius:" value={radius} setValue={setRadius} />
			<CustomInput placeholder="Trail:" value={trail} setValue={setTrail} />
		</div>
	);
};

export default Settings;
