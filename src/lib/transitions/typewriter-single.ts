import type { TransitionConfig } from 'svelte/transition';
import { linear } from 'svelte/easing'
export function typewriter(node: Element, { perCharDuration = 50, easing = linear }): TransitionConfig {
    const valid = node.childNodes.length === 1 && node.childNodes[0].nodeName === '#text';
    if (!valid) {
        throw new Error('Typewriter transition requires a single text node');
    }
    const text = node.childNodes[0].textContent || '';
    const chars = text.split('');
    const len = chars.length;
    return {
        duration: len * perCharDuration,
        easing,
        tick: (t) => {
            const i = Math.floor(t * len);
            node.childNodes[0].textContent = chars.slice(0, i).join('');
        }
    };
}