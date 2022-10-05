import * as R from 'ramda';
import { useImageUrls } from './graphql/queries/images';

/**
 * Shuffles an array of items unique to the application. Uses a random
 * switching alorithm in O(n) time.
 * @param {(string || number)[]} items_ - Array of strings or numbers to be
 * shuffled (esp. 'proportionedOranges' for color names and 'viable...
 * Indices')
 * @returns a correctly pseudo-randomized array from the same array
 */
export function shuffleItems<T>(items_: T[]): T[] {
    const items = items_.slice();
    for (let i = items.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [items[i], items[j]] = [items[j], items[i]];
    }
    return items;
}

/**
 *
 */
export const pickRandomN =
    (limit?: number) =>
    <T>(items: T[]): T[] => {
        return shuffleItems(items).slice(0, limit ?? items.length);
    };

/**
 * Function to strip graphql query of node wrapper objects
 * @returns array of edges without node wrapper
 */
export const stripNodes = R.map(R.path(['node']));

const getName = R.pipe(R.split('/'), R.last);
const urlPath = R.path(['publicURL']);

/**
 * Function to get the image url from graphql query
 * @param {string} name - name of the image file including extension
 * @returns {string} - url of the image
 */
export const findImagePath = R.curry(
    (images: imageUrl[], name: string): string => {
        return R.compose(
            urlPath,
            R.head,
            R.filter(R.pipe(urlPath, getName, R.equals(name)))
        )(images);
    }
);

/**
 * Function to map any props array providing it has an img key to the url of the img
 * @param {array} data - data array containing prop objects. Must contain an img property
 * @returns {array} - the same data array passed in except the img names are now urls.
 */
export const mapUrlsToProps = R.curry(
    <T extends DataWithImg>(images: imageUrl[], data: T[]): T[] => {
        return R.map(R.evolve({ img: findImagePath(images) }))(data);
    }
);
