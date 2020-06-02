var documenterSearchIndex = {"docs":
[{"location":"#DeepViz.jl-1","page":"Home","title":"DeepViz.jl","text":"","category":"section"},{"location":"#","page":"Home","title":"Home","text":"","category":"page"},{"location":"#","page":"Home","title":"Home","text":"Modules = [DeepViz]","category":"page"},{"location":"#DeepViz.apply_colormap-Tuple{Any,Any}","page":"Home","title":"DeepViz.apply_colormap","text":"apple_colormap(org_img, activation_map; map_alpha=0.4, process_img=true)\n\nCreates a rainbow based colormap for the image, which is then applied onto org_img(original image) with different transparency to generate the combined heatmap with the org_img (original image). Function returns a tuple of combined colormap and activation map alone based heatmap.\n\n\n\n\n\n","category":"method"},{"location":"#DeepViz.generate_image-Tuple{Any}","page":"Home","title":"DeepViz.generate_image","text":" generate_image(x; resize_original=false, custom_size=Nothing)\n\nSave the image as an RGB image defined the by the array x. If resize_original is set to be true, then the image can be resized to the custom_size. If not provided explicitly, then the image is resized to the original_size of the image saved while loading the image or the default one(ie. (224, 224)) \n\n\n\n\n\n","category":"method"},{"location":"#DeepViz.image_to_arr-Tuple{Any}","page":"Home","title":"DeepViz.image_to_arr","text":"image_to_arr(img; preprocess = true)\n\nConvert an RGB type image to an array. If preprocess is set as true, subtract the mean from the image array.  \n\n\n\n\n\n","category":"method"},{"location":"#DeepViz.load_image","page":"Home","title":"DeepViz.load_image","text":"load_image(path, resize = false; size_save = true)\n\nFunction to load the images from the specified path. Returns as an array of image. If resize is set as true, resize the image to shape (224, 224). \n\n\n\n\n\n","category":"function"},{"location":"#DeepViz.positive_negative_saliency-Tuple{Any}","page":"Home","title":"DeepViz.positive_negative_saliency","text":"positive_negative_saliency(gradient)\n\nReturns a tuple of positive and negative saliency maps based on the provided gradients.\n\n\n\n\n\n","category":"method"},{"location":"#DeepViz.save_gradient_images-Tuple{Any,Any}","page":"Home","title":"DeepViz.save_gradient_images","text":"save_gradient_images(gradient, file_name; gray=false)\n\nSaves the gradient as an RGB image by default. If gray is set to true, gradients are sasved as a gray image with the provided filename.\n\n\n\n\n\n","category":"method"},{"location":"#DeepViz.save_image-Tuple{Any,Any}","page":"Home","title":"DeepViz.save_image","text":"save_image(path, x)\n\nSave the image defined by x to the specified path.\n\n\n\n\n\n","category":"method"},{"location":"#DeepViz.set_training_false-Tuple{}","page":"Home","title":"DeepViz.set_training_false","text":"set_training_false()\n\nFunction to set the model into testmode, so that the output result do not vary while evaluating gradients(or other results) for the models which contain layers like BatchNormalization, Dropout etc.\n\n\n\n\n\n","category":"method"},{"location":"#DeepViz.set_training_true-Tuple{}","page":"Home","title":"DeepViz.set_training_true","text":"set_training_true()\n\nFunction to revert back the model into trainmode, once the gradients(or other results) are evaluated.\n\n\n\n\n\n","category":"method"},{"location":"#DeepViz.stepped_images-Tuple{Any,Any}","page":"Home","title":"DeepViz.stepped_images","text":"stepped_images(img, steps)\n\nUtility function for viz_integrated_gradient. Generate scaled images, ie. images multiplied by a factor i defined in the range of 0 to 1.0 over equal intervals of 1/steps. \n\n\n\n\n\n","category":"method"},{"location":"#DeepViz.viz_backprop-Tuple{Any,Any}","page":"Home","title":"DeepViz.viz_backprop","text":"viz_backprop(img, model; top_k=1, target_based=false, target_index)\n\nReturns gradient generated with Vanilla Backpropagation for top_k classes. It’s the original saliency map algorithm for supervised deep learning from Simonyan et. al. (2013). These gradients can further be visualized using utilty functions.\n\nArguments\n\nimg: source image for which gradients are to be calculated\nmodel: model to be used for visualization\ntop_k=1: gradients are returned for top_k classes as per predictions by the model.\ntarget_based=false: if set to true, function returns the maximizing gradient for the specified target_index class along with gradient for top_k classes.\ntarget_index: defines the target class, for which the maximizing gradients are to be calculated. Required when target_based is set to true. \n\nThe function returns an of gradients for top_k=1 predicted classes by default. If target_based is set to true and target_index is specified, the function returns a tuple: (gradients_for_top_k_classes, gradient_for_target_class).\n\n\n\n\n\n","category":"method"},{"location":"#DeepViz.viz_integrated_gradient-Tuple{Any,Any,Any}","page":"Home","title":"DeepViz.viz_integrated_gradient","text":"viz_integrated_gradient(img, model, steps; target_based=false, target_index)\n\nProduces gradients generated with integrated gradients from the image scaled over steps. This functions uses the viz_backprop for the calculation of gradients for each of scaled image and then returns integrated gradients as the average over all the scaled images.\n\nArguments\n\nimg: source image on which the gradient are to be calculated.\nmodel: model to be used for visualization\nsteps: number of steps between 0 to 1.0 for which the image is to be scaled while calculating integrated gradients.\ntarget_based=false: if set true, the integrated gradients are evaluated for the specified target_index.\ntarget_index: index of the target class for which the maximized gradients are to be evaluated. Necessary condition when target_based is set as true.\n\n\n\n\n\n","category":"method"}]
}
