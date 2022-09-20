import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Menu, Switch } from '@headlessui/react'

import { useState } from 'react'

interface DropdownButtonProps {
    name?: string;
    icon?: any;
    optionSelected?: Array<string>;
}

const DropdownButton = ({
    name,
    icon,
    optionSelected,

}: DropdownButtonProps) => {
    const [enabled, setEnabled] = useState(false)
    return (
        <Menu as="div" className="relative inline-block text-left">
            <Menu.Button className="inline-block w-full justify-center rounded-md shadow-md bg-white px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 h-10">
                {icon && <FontAwesomeIcon icon={icon} color="rgb(10,129,195)" />}
                {name && <div className="text-[rgb(10,129,195)] gap-x-4">{name}</div>}
            </Menu.Button>
            <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-200 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="px-1 py-1">
                    <Menu.Item>
                        {({ active }) => (
                            <>
                                <div className="text-gray-900 group flex w-full items-center rounded-md px-2 py-2 text-sm">
                                    Light / Dark Theme
                                </div>
                                <Switch
                                    checked={enabled}
                                    onChange={setEnabled}
                                    className={`${enabled ? 'bg-blue-600' : 'bg-gray-200'
                                        } relative inline-flex h-6 w-11 items-center rounded-full`}
                                >
                                    <span className="sr-only">Enable notifications</span>
                                    <span
                                        className={`${enabled ? 'translate-x-6' : 'translate-x-1'
                                            } inline-block h-4 w-4 transform rounded-full bg-white transition`}
                                    />
                                </Switch>
                            </>

                        )}

                    </Menu.Item>
                </div>
                <div className="px-1 py-1">
                    <Menu.Item>
                        {({ active }) => (
                            <div className="text-gray-900 group flex w-full items-center rounded-md px-2 py-2 text-sm">
                                Logout
                            </div>
                        )}
                    </Menu.Item>
                </div>
            </Menu.Items>
        </Menu >
    );
}

export default DropdownButton;