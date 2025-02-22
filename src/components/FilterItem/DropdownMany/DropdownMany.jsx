import { useRef, useState } from "react"
import { Icon } from '@/components'
import { useClickOutside } from '@/hooks'

import styles from './styles.module.css';
import { Dropdown } from "./Dropdown/Dropdown";

export const DropdownMany = ({ iconName, text, filters, className }) => {
	const [isOpen, setOpen] = useState(false);
	const dropdownRef = useRef(null);

	const liClasses = [styles.dropdown, isOpen ? styles.active : '', className].join(' ');

	useClickOutside(dropdownRef, setOpen);

	return (
		<li ref={dropdownRef} className={liClasses}>
			<button className={styles.btn} onClick={() => setOpen(prev => !prev)}>
				<div className={styles.wrapper}>
					<Icon name={iconName} />
					<p className={styles.text}>{text}</p>
				</div>
				<Icon name='arrow-right' className={`${styles.icon} ${styles.arrow__icon}`} />
			</button>
			<ul className={`${styles.dropdown__list} ${isOpen ? styles.active__list : ''}`}>
				{
					filters.map(({ iconName, text, type, items }, i) => (
						<Dropdown key={i} iconName={iconName} text={text} filters={{ type, items }} />
					))
				}
			</ul>
		</li>
	)
}