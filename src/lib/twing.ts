import { TwingEnvironment, TwingLoaderFilesystem } from "twing";

const loader = new TwingLoaderFilesystem('src/views');
const twing = new TwingEnvironment(loader);

export {
    twing
};