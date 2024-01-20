import React from 'react';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import classNames from 'classnames';
import { CaretDownIcon } from '@radix-ui/react-icons';
import styles from './adminLayout.module.scss';

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <>
            <NavigationMenu.Root>
                <NavigationMenu.List>
                <NavigationMenu.Item>
                    <NavigationMenu.Trigger />
                    <NavigationMenu.Content>
                    <NavigationMenu.Link />
                    </NavigationMenu.Content>
                </NavigationMenu.Item>

                <NavigationMenu.Item>
                    <NavigationMenu.Link />
                </NavigationMenu.Item>

                <NavigationMenu.Item>
                    <NavigationMenu.Trigger />
                    <NavigationMenu.Content>
                    <NavigationMenu.Sub>
                        <NavigationMenu.List />
                        <NavigationMenu.Viewport />
                    </NavigationMenu.Sub>
                    </NavigationMenu.Content>
                </NavigationMenu.Item>

                <NavigationMenu.Indicator />
                </NavigationMenu.List>

                <NavigationMenu.Viewport />
            </NavigationMenu.Root>
            <section className="bg-slate-50 w-screen h-dvh">
                {children}
            </section>
        </>
    );
}