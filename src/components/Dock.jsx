import { dockApps } from '@/constants'
import { useGSAP } from '@gsap/react'
import React, { useRef } from 'react'
import { Tooltip } from 'react-tooltip'
import gsap from 'gsap'
import useWindowStore from '@/store/window'

const Dock = () => {
    const { openWindow, closeWindow, windows } = useWindowStore();
    const DockRef = useRef(null)

    useGSAP(() => {
        const dock = DockRef.current;
        if (!dock) return;

        const icons = dock.querySelectorAll('.dock-icon');

        const animateIcon = (icon, scale, y) => {
            gsap.to(icon, {
                scale: scale,
                y: y,
                duration: 0.3,
                ease: "power2.out",
            })
        }

        const handleIconHover = (e) => {
            const icon = e.currentTarget;
            animateIcon(icon, 1.25, -15);
        }

        const handleIconLeave = (e) => {
            const icon = e.currentTarget;
            animateIcon(icon, 1, 0);
        }

        // Add hover listeners to each icon
        icons.forEach((icon) => {
            icon.addEventListener('mouseenter', handleIconHover);
            icon.addEventListener('mouseleave', handleIconLeave);
        });

        return () => {
            icons.forEach((icon) => {
                icon.removeEventListener('mouseenter', handleIconHover);
                icon.removeEventListener('mouseleave', handleIconLeave);
            });
        }
    }, [])

    const toggleApp = (app) => {
        if (!app.canOpen) return;

        const window = windows[app.id];

        if (!window) {
            console.error(`Window not found for app: ${app.id}`);
            return;
        }

        if (window.isOpen) {
            closeWindow(app.id);
        } else {
            openWindow(app.id);
        }
    };

    return (
        <section id='dock'>
            <div ref={DockRef} className='dock-container'>
                {dockApps.map(({ id, name, icon, canOpen }) => (
                    <div key={id} className='relative flex justify-center'>
                        <button
                            type="button"
                            className='dock-icon'
                            aria-label={name}
                            data-tooltip-id="dock-tooltip"
                            data-tooltip-content={name}
                            data-tooltip-delay-show={150}
                            disabled={!canOpen}
                            onClick={() => toggleApp({ id, canOpen })}
                        >
                            <img
                                src={`/images/${icon}`}
                                alt={name}
                                loading="lazy"
                                className={canOpen ? '' : 'opacity-60'}
                            />
                        </button>
                    </div>
                ))}
                <Tooltip id='dock-tooltip' place='top' className='tooltip' />
            </div>
        </section>
    )
}

export default Dock