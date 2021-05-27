/*
    Creates an object containing provided svg
    url's that can be accesed by their file name.

    For example if the image is exampleimg.svg, then
    you could access it with obj.exampleimg and the
    value would be the path of the file in the project.
*/
export const createSVGImagesObject = (array) => {
    const obj = {};
    array.map(svg => {
        const filename = svg.relativePath.split(".svg")[0];
        obj[filename] = svg.publicURL;
    });
    return obj;
};
