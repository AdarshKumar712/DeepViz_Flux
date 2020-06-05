var documenterSearchIndex = {"docs":
[{"location":"utility/#Utility-Functions-1","page":"Utility Function","title":"Utility Functions","text":"","category":"section"},{"location":"utility/#","page":"Utility Function","title":"Utility Function","text":"This section provide documentation reference to various Utility functions available with the DeepViz package. These utility function allows loading of image, changing image to array, saving the gradients as heatmaps and more.","category":"page"},{"location":"utility/#","page":"Utility Function","title":"Utility Function","text":"DeepViz.image_to_arr\nDeepViz.load_image\nDeepViz.generate_image\nDeepViz.save_image\nDeepViz.save_gradient_images\nDeepViz.positive_negative_saliency\nDeepViz.save_gradcam\nDeepViz.apply_colormap\nDeepViz.set_training_false\nDeepViz.set_training_true","category":"page"},{"location":"utility/#DeepViz.image_to_arr","page":"Utility Function","title":"DeepViz.image_to_arr","text":"image_to_arr(img; preprocess = true)\n\nConvert an RGB type image to an array. If preprocess is set as true, subtract the mean from the image array.  \n\n\n\n\n\n","category":"function"},{"location":"utility/#DeepViz.load_image","page":"Utility Function","title":"DeepViz.load_image","text":"load_image(path, resize = false; size_save = true)\n\nFunction to load the images from the specified path. Returns as an array of image. If resize is set as true, resize the image to shape (224, 224). \n\n\n\n\n\n","category":"function"},{"location":"utility/#DeepViz.generate_image","page":"Utility Function","title":"DeepViz.generate_image","text":" generate_image(x; resize_original=false, custom_size=Nothing)\n\nSave the image as an RGB image defined the by the array x. If resize_original is set to be true, then the image can be resized to the custom_size. If not provided explicitly, then the image is resized to the original_size of the image saved while loading the image or the default one(ie. (224, 224)) \n\n\n\n\n\n","category":"function"},{"location":"utility/#DeepViz.save_image","page":"Utility Function","title":"DeepViz.save_image","text":"save_image(path, x)\n\nSave the image defined by x to the specified path.\n\n\n\n\n\n","category":"function"},{"location":"utility/#DeepViz.save_gradient_images","page":"Utility Function","title":"DeepViz.save_gradient_images","text":"save_gradient_images(gradient, file_name; gray=false)\n\nSaves the gradient as an RGB image by default. If gray is set to true, gradients are sasved as a gray image with the provided filename.\n\n\n\n\n\n","category":"function"},{"location":"utility/#DeepViz.positive_negative_saliency","page":"Utility Function","title":"DeepViz.positive_negative_saliency","text":"positive_negative_saliency(gradient)\n\nReturns a tuple of positive and negative saliency maps based on the provided gradients.\n\n\n\n\n\n","category":"function"},{"location":"utility/#DeepViz.save_gradcam","page":"Utility Function","title":"DeepViz.save_gradcam","text":"save_gradcam(gradient, original_image_path, grad_file_name, heatmap_file_name, combined_file_name)\n\nFunction to save the gradient calculated using gradcam as a gray image, gradient heatmap and the combined heatmap with different transparency.\n\nArguments\n\ngradient: Gradient calculated using the viz_gradcam function\noriginal_image_path: Path to the original image file, for which the gradient is calculated.\ngrad_file_name: Filename with path, to which the gradient image is to be saved as a gray image\nheatmap_file_name: Filename to save the gradient heatmap\ncombined_file_name: Filename to save the gradient the combined heatmap with original image.\n\n\n\n\n\n","category":"function"},{"location":"utility/#DeepViz.apply_colormap","page":"Utility Function","title":"DeepViz.apply_colormap","text":"apple_colormap(org_img, activation_map; map_alpha=0.4, process_img=true)\n\nCreates a rainbow based colormap for the image, which is then applied onto org_img(original image) with different transparency to generate the combined heatmap with the org_img (original image). Function returns a tuple of combined colormap and activation map alone based heatmap.\n\n\n\n\n\n","category":"function"},{"location":"utility/#DeepViz.set_training_false","page":"Utility Function","title":"DeepViz.set_training_false","text":"set_training_false()\n\nFunction to set the model into testmode, so that the output result do not vary while evaluating gradients(or other results) for the models which contain layers like BatchNormalization, Dropout etc.\n\n\n\n\n\n","category":"function"},{"location":"utility/#DeepViz.set_training_true","page":"Utility Function","title":"DeepViz.set_training_true","text":"set_training_true()\n\nFunction to revert back the model into trainmode, once the gradients(or other results) are evaluated.\n\n\n\n\n\n","category":"function"},{"location":"api/#API-Reference-1","page":"API Reference","title":"API Reference","text":"","category":"section"},{"location":"api/#","page":"API Reference","title":"API Reference","text":"The package provides easy implementation of various algorithms, to facilitate model interpretability. Here, in this section, you can find the related documentation with respect to various algorithms available with this package. These will provide a better reference regarding the algorithms and related info. For usage related queries, check out the Usage section.","category":"page"},{"location":"api/#Primary-Attributions-1","page":"API Reference","title":"Primary Attributions","text":"","category":"section"},{"location":"api/#","page":"API Reference","title":"API Reference","text":"DeepViz.viz_backprop\nDeepViz.viz_guidedbackprop\nDeepViz.viz_deconvolution\nDeepViz.viz_integrated_gradients\nDeepViz.grad_times_image","category":"page"},{"location":"api/#DeepViz.viz_backprop","page":"API Reference","title":"DeepViz.viz_backprop","text":"viz_backprop(img, model; top_k=1, target_based=false, target_index)\n\nReturns gradient generated with Vanilla Backpropagation for top_k classes. It’s the original saliency map algorithm for supervised deep learning from Simonyan et. al. (2013). These gradients can further be visualized using utilty functions.\n\nArguments\n\nimg: source image for which gradients are to be calculated\nmodel: model to be used for visualization\ntop_k=1: gradients are returned for top_k classes as per predictions by the model.\ntarget_based=false: if set to true, function returns the maximizing gradient for the specified target_index class along with gradient for top_k classes.\ntarget_index: defines the target class, for which the maximizing gradients are to be calculated. Required when target_based is set to true. \n\nThe function returns an of gradients for top_k=1 predicted classes by default. If target_based is set to true and target_index is specified, the function returns a tuple: (gradients_for_top_k_classes, gradient_for_target_class).\n\n\n\n\n\n","category":"function"},{"location":"api/#DeepViz.viz_guidedbackprop","page":"API Reference","title":"DeepViz.viz_guidedbackprop","text":"viz_guidedbackprop(img, model; top_k=1, target_based=false, target_index=-1)\n\nIn this method of Gradient visualization, the backpropagation of RELU activation function are overridden (so called Guided RELU) in such a way that only the non-negative gradients are backpropagated. Here, the guided RELU is applied onto the input gradients which stands as the main difference from the viz_deconvolution. Once the activation function is overridden, the gradient is evaluated here using the viz_backprop function.\n\nNote: The function currently doesn't support ResNet type models. See also: viz_backprop, viz_deconvolution\n\n\n\n\n\n","category":"function"},{"location":"api/#DeepViz.viz_deconvolution","page":"API Reference","title":"DeepViz.viz_deconvolution","text":"viz_deconvolution(img, model; top_k=1, target_based=false, target_index=-1)\n\nIn this method of Gradient visualization, the backpropagation of RELU activation function are overridden (so called Guided RELU) in such a way that only the non-negative gradients are backpropagated. Here, the guided RELU is applied onto the output gradients which stands as the main difference from the viz_guidedbackprop. Once the activation function is overridden, the gradient is evaluated here using the viz_backprop function.\n\nNote: The function currently doesn't support ResNet type models. See also: viz_backprop, viz_guidedbackprop\n\n\n\n\n\n","category":"function"},{"location":"api/#DeepViz.grad_times_image","page":"API Reference","title":"DeepViz.grad_times_image","text":"grad_times_image(img, model; top_k=1)\n\nAn extension to the saliency approach. Returns an array of products of the img with the gradient evaluated with respect to the provided img for the model, for top_k prediction classes. \n\n\n\n\n\n","category":"function"},{"location":"api/#Layer-Based-Attribution-1","page":"API Reference","title":"Layer Based Attribution","text":"","category":"section"},{"location":"api/#","page":"API Reference","title":"API Reference","text":"DeepViz.viz_gradcam\nDeepViz.viz_guidedgradcam","category":"page"},{"location":"api/#DeepViz.viz_gradcam","page":"API Reference","title":"DeepViz.viz_gradcam","text":"viz_gradcam(img, model, layer; top_k=1)\n\nLayer attribution method that computes the gradients of the target output with respect to the given layer, averages for each output channel (dimension 2 of output), and multiplies the average gradient for each channel by the layer activations. The results are summed over all channels.\n\nIt returns an array of tuples of (gradCAM, prediction_probability, class_index) for top_k predicted classes.\n\n\n\n\n\n","category":"function"},{"location":"api/#DeepViz.viz_guidedgradcam","page":"API Reference","title":"DeepViz.viz_guidedgradcam","text":"viz_guidedgradcam(img, model, layer; top_k=1)\n\nIt computes the element-wise product of guided backpropagation attributions (evaluated using viz_guidedbackprop) with resized (layer) GradCAM attributions (computed using viz_gradcam). GradCAM attributions are computed with respect to a given layer, and attributions are resized to match the input size.\n\nIt returns an array of tuples of (guidedgradcam, prediction_probability, class_index) for top_k predicted classes.\n\nAlso see: viz_guidedbackprop, viz_guidedgradcam.\n\n\n\n\n\n","category":"function"},{"location":"api/#Others-1","page":"API Reference","title":"Others","text":"","category":"section"},{"location":"api/#","page":"API Reference","title":"API Reference","text":"DeepViz.smooth_grad\nDeepViz.ImageGenerator","category":"page"},{"location":"api/#DeepViz.smooth_grad","page":"API Reference","title":"DeepViz.smooth_grad","text":"smooth_grad(img, model; method=viz_backprop,top_k=1, mean=0, var=1, n_imgs=50, normalized_n_scaled=true)\n\nMethod to visually sharpen the gradient based saliency maps. The key idea is to evaluate the average of gradients of images obtained after adding gaussian noise to the original image(img). The results suggest the estimated smoothed gradient, leads to visually more coherent sensitivity maps than the unsmoothed gradient, with the resulting visualization aligning better to the human eye with meaningful features.\n\nArguments\n\nimg: Original image of interest for visualization\nmodel: Model to be used for visualization\nmethod=viz_backprop: Method to be used while evaluating gradients. Can take methods like viz_guidedbackprop, viz_backprop, viz_deconvolution or any other custom function.\ntop_k=1: function evaluates the smoothed gradient for top_k predictions just as in case of normal viz_backprop function.\nmean=0: Mean of the gaussian noise to be added to the image to generate sample space\nvar=1: Variance of the gaussian noise to be added to image to generate sample space\nn_imgs=50: Number of images to be generated and used in sample space while evaluation of smooth_grad.\nnormalized_n_scaled=true: if true, then the noise is first scaled to 0-255 before adding to the image. \n\nRef: (https://arxiv.org/pdf/1706.03825.pdf)\n\n\n\n\n\n","category":"function"},{"location":"api/#DeepViz.ImageGenerator","page":"API Reference","title":"DeepViz.ImageGenerator","text":"ImageGenerator(model, target_class)\n\nFunction to initialize the ImageGenerator for the model and target_class. Returns a struct with fields model, img and target. Here, the image is randomly generated which is then to be further updated.\n\n\n\n\n\nImageGenerator(save_dir; img_name = \"generated\", niters::Int = 150, lr = 6.0)\n\nGenerates the image for which the prediction probability is maximized for a target class after niter iterations using backpropagation. Before using this function, the ImageGenerator must be initialized using ImageGenerator(model, target_class).\n\nArguments\n\nsave_dir: Directory to which the generated image is to be saved \nimg_name=\"generated\": Image name with which file is to be saved withoout file extension\nniters::Int=150: number of iterations for which the generated image is updated with backpropagation\nlr=6.0: Learning rate to be used while updating the generated image with respect to backpropagated gradients to maximize the specific class.\n\n\n\n\n\n","category":"type"},{"location":"usage/#Usage-1","page":"Usage","title":"Usage","text":"","category":"section"},{"location":"usage/#","page":"Usage","title":"Usage","text":"This sections describes various examples for the use of various algorithms included in the Package, and also details about how they can be utilised properly with the utility functions to help easily implement various techniques for Model Interpretability.","category":"page"},{"location":"usage/#","page":"Usage","title":"Usage","text":"Coming Soon!!!!!!!","category":"page"},{"location":"insights/#Insights-1","page":"Insights","title":"Insights","text":"","category":"section"},{"location":"insights/#","page":"Insights","title":"Insights","text":"How do neural networks manage to find patterns in data? How do they learn from existing data, and what do the inner layers of these artificial neural networks look like? All of this is studied under fields referred to as model interpretability and visualization, which are currently very active areas of research. This section provides an insight (or a detailed description) into various algorithms available with DeepViz to help understand the model better. These algorithms are further divided into subsections: Primary Attribution, Layer Attribution and Others.","category":"page"},{"location":"insights/#Primary-Attribution-1","page":"Insights","title":"Primary Attribution","text":"","category":"section"},{"location":"insights/#","page":"Insights","title":"Insights","text":"These algorithms deal with the over model as a whole, thus attributing features of the overall model.","category":"page"},{"location":"insights/#Vanilla-Gradient-1","page":"Insights","title":"Vanilla Gradient","text":"","category":"section"},{"location":"insights/#","page":"Insights","title":"Insights","text":"It’s the original saliency map algorithm for supervised deep learning from Simonyan et. al. (2013). It’s the simplest algorithm among gradient-based³ approaches and very fast to run, which makes it a great place to start to understand how saliency maps work.","category":"page"},{"location":"insights/#","page":"Insights","title":"Insights","text":"The algorithms mainly consist of two steps:","category":"page"},{"location":"insights/#","page":"Insights","title":"Insights","text":"forward pass the image\nbackward pass to input layerto get the gradients for top kth class maximization.","category":"page"},{"location":"insights/#","page":"Insights","title":"Insights","text":"Once gradients are calculated for a particular class, these gradients can then be transformed into normalized heatmap, for better visualization","category":"page"},{"location":"insights/#","page":"Insights","title":"Insights","text":"Useful Function(s): viz_backprop, save_gradient_images.","category":"page"},{"location":"insights/#Guided-Backpropagation-and-Deconvolution-1","page":"Insights","title":"Guided Backpropagation and Deconvolution","text":"","category":"section"},{"location":"insights/#","page":"Insights","title":"Insights","text":"Guided backpropagation and deconvolution compute the gradient of the target output with respect to the input, but backpropagation of ReLU functions is overridden so that only non-negative gradients are backpropagated. In guided backpropagation, the ReLU function is applied to the input gradients, and in deconvolution, the ReLU function is applied to the output gradients and directly backpropagated.","category":"page"},{"location":"insights/#","page":"Insights","title":"Insights","text":"For more details, check the original papers:","category":"page"},{"location":"insights/#","page":"Insights","title":"Insights","text":"Striving for Simplicity: The All Convolutional Net\nSanity Checks for Saliency Maps","category":"page"},{"location":"insights/#","page":"Insights","title":"Insights","text":"Useful Function(s): viz_guidedbackprop, viz_deconvolution","category":"page"},{"location":"insights/#Integrated-Gradients-1","page":"Insights","title":"Integrated Gradients","text":"","category":"section"},{"location":"insights/#","page":"Insights","title":"Insights","text":"Integrated gradients represents the integral of gradients with respect to inputs along the path from a given baseline to input. Here in this algorithm implementation, the path is chosen to be a straight line, and gradient is evaluated at equal intervals for the scaled images along the straight line. The cornerstones of this approach are two fundamental axioms, namely sensitivity and implementation invariance.","category":"page"},{"location":"insights/#","page":"Insights","title":"Insights","text":"The algorithm consist of following steps:","category":"page"},{"location":"insights/#","page":"Insights","title":"Insights","text":"Scaling of Input Image with factor between 0.0 to 1.0 along the joing straight line at equal intervals \nCalculating the gradient for each of the scaled image\nTaking average of the gradients","category":"page"},{"location":"insights/#","page":"Insights","title":"Insights","text":"For more reference, check the original paper: Original Paper","category":"page"},{"location":"insights/#","page":"Insights","title":"Insights","text":"Useful Function(s): viz_integrated_gradients","category":"page"},{"location":"insights/#Gradient-x-Image-1","page":"Insights","title":"Gradient x Image","text":"","category":"section"},{"location":"insights/#","page":"Insights","title":"Insights","text":"Gradient x Image is an extension of the saliency approach (vanilla gradient), taking the gradients of the output with respect to the input and multiplying by the input feature values. One intuition for this approach considers a linear model. the gradients are simply the coefficients of each input, and the product of the input with a coefficient corresponds to the total contribution of the feature to the linear model's output.","category":"page"},{"location":"insights/#","page":"Insights","title":"Insights","text":"Useful Function(s): grad_times_image","category":"page"},{"location":"insights/#Layer-Attribution-1","page":"Insights","title":"Layer Attribution","text":"","category":"section"},{"location":"insights/#","page":"Insights","title":"Insights","text":"These algorithms deal with the specific layer of the model, thus attributing features of that specific layer of the model.","category":"page"},{"location":"insights/#GradCAM-1","page":"Insights","title":"GradCAM","text":"","category":"section"},{"location":"insights/#","page":"Insights","title":"Insights","text":"GradCAM or Gradient weighted Class Activation Maximization uses the gradients of any target concept, flowing into the final convolutional layer to produce a coarse localization map highlighting important regions in the image for predicting the concept. GradCAM is a layer attribution method designed for convolutional neural networks, and is usually applied to the last convolutional layer. GradCAM computes the gradients of the target output with respect to the given layer, averages for each output channel (dimension 2 of output), and multiplies the average gradient for each channel by the layer activations. The results are summed over all channels and a ReLU is applied to the output, returning only non-negative attributions.","category":"page"},{"location":"insights/#","page":"Insights","title":"Insights","text":"For more details, refer to the paper: Original Paper","category":"page"},{"location":"insights/#","page":"Insights","title":"Insights","text":"Useful Function(s): viz_gradcam, save_gradcam","category":"page"},{"location":"insights/#Guided-GradCAM-1","page":"Insights","title":"Guided GradCAM","text":"","category":"section"},{"location":"insights/#","page":"Insights","title":"Insights","text":"Guided GradCAM computes the element-wise product of guided backpropagation attributions with upsampled (layer) GradCAM attributions. GradCAM attributions are computed with respect to a given layer, and attributions are upsampled to match the input size. This approach is designed for convolutional neural networks.","category":"page"},{"location":"insights/#","page":"Insights","title":"Insights","text":"Guided GradCAM was proposed by the authors of GradCAM as a method to combine the high-resolution nature of Guided Backpropagation with the class-discriminative advantages of GradCAM, which has lower resolution due to upsampling from a convolutional layer.","category":"page"},{"location":"insights/#","page":"Insights","title":"Insights","text":"For more details, refer to the paper: Original Paper","category":"page"},{"location":"insights/#","page":"Insights","title":"Insights","text":"Useful Function(s): viz_guidedgradcam, save_gradcam","category":"page"},{"location":"insights/#Others-1","page":"Insights","title":"Others","text":"","category":"section"},{"location":"insights/#","page":"Insights","title":"Insights","text":"These are algorithms which can not be properly assigned as primary attributions or layer attributions.","category":"page"},{"location":"insights/#SmoothGrad-1","page":"Insights","title":"SmoothGrad","text":"","category":"section"},{"location":"insights/#","page":"Insights","title":"Insights","text":"SmoothGrad is a simple method that can help visually sharpen gradient-based sensitivity maps, and it discusses lessons in the visualization of these maps. The core idea is to take an image of interest, sample similar images by adding Gaussian noise to the image (images in the neighborhood of image of interest), then take the average of the resulting sensitivity maps for each sampled image. The results suggest the estimated smoothed gradient, leads to visually more coherent sensitivity maps than the unsmoothed gradient, with the resulting visualization aligning better to the human eye with meaningful features.","category":"page"},{"location":"insights/#","page":"Insights","title":"Insights","text":"For more details, refer to the original paper: Original Image","category":"page"},{"location":"insights/#","page":"Insights","title":"Insights","text":"Useful Function(s) : smooth_grad","category":"page"},{"location":"insights/#Image-Generator-1","page":"Insights","title":"Image Generator","text":"","category":"section"},{"location":"insights/#","page":"Insights","title":"Insights","text":"This algorithms helps to visualise what type of input image maximizes the probability of target class. The idea behind Image Generator is simple in hindsight - Generate an input image that maximizes the model output activations for the target class.","category":"page"},{"location":"insights/#","page":"Insights","title":"Insights","text":"Useful Function(s): ImageGenerator","category":"page"},{"location":"gs/#Getting-Started-1","page":"Getting Started","title":"Getting Started","text":"","category":"section"},{"location":"gs/#","page":"Getting Started","title":"Getting Started","text":"This section is about how you can set up and start using DeepViz. Here, it is assumed that you already are aware of Model Interpretability, what is it, what are its uses. ","category":"page"},{"location":"gs/#Installation-1","page":"Getting Started","title":"Installation","text":"","category":"section"},{"location":"gs/#Requirements-1","page":"Getting Started","title":"Requirements","text":"","category":"section"},{"location":"gs/#","page":"Getting Started","title":"Getting Started","text":"Julia: >=1.3 \nFlux: >=0.10","category":"page"},{"location":"gs/#","page":"Getting Started","title":"Getting Started","text":"To install DeepViz, you need to fill in the following code into the Julia Prompt:","category":"page"},{"location":"gs/#","page":"Getting Started","title":"Getting Started","text":"] add DeepViz","category":"page"},{"location":"gs/#Tutorials-1","page":"Getting Started","title":"Tutorials","text":"","category":"section"},{"location":"gs/#","page":"Getting Started","title":"Getting Started","text":"Here are some of the tutorials which might be helpful to you with respect to using this package:","category":"page"},{"location":"gs/#","page":"Getting Started","title":"Getting Started","text":"Coming Soon!!!!!!","category":"page"},{"location":"gs/#","page":"Getting Started","title":"Getting Started","text":"Moreovers to get a better understanding of various functions in this package and their usage, check the Usage section of the documentation.","category":"page"},{"location":"gs/#API-Reference-1","page":"Getting Started","title":"API Reference","text":"","category":"section"},{"location":"gs/#","page":"Getting Started","title":"Getting Started","text":"For an in-depth API reference of various DeepViz internals, checkout the API Reference section","category":"page"},{"location":"#Overview-1","page":"About","title":"Overview","text":"","category":"section"},{"location":"#","page":"About","title":"About","text":"DeepViz is an open source, extensive package for Model intrepretability built on Flux, a Julia based package for Machine Leanrning and Deep Learning. ","category":"page"},{"location":"#","page":"About","title":"About","text":"With an increase the model complexity, it is important at times to interpret what your model is learning over the period of training, which at times becomes an important aspect to analyze the performance of model. Model Interpretability has been an active area of reasearch, to understand what a model actually learns using different algorithms and techniques like GradCAM, SmoothGrad etc. DeepViz provides various algorithms to allows developers and researchs develop a better understanding of their models and respective outputs.","category":"page"},{"location":"#","page":"About","title":"About","text":"DeepViz helps users easily implement various Interpretability algorithms for the Models build on Flux. Moreover, this package may also prove helpful for developers to troubleshoot by facilitating the identification of different features that contribute to a model’s output.","category":"page"},{"location":"#Target-Audience-1","page":"About","title":"Target Audience","text":"","category":"section"},{"location":"#","page":"About","title":"About","text":"DeepViz is primarily meant for Flux based Model developers who are looking to imporve their models and / or to undertand what their model is learning. This package may also be helpful for researchers, who are interested in identification of different features that contribute to model's output, how varying them changes the results.","category":"page"},{"location":"#Contributions-1","page":"About","title":"Contributions","text":"","category":"section"},{"location":"#","page":"About","title":"About","text":"This package an extensive support with respect to various interpretability algorithms. However, still there are many state-of-the-art algorithms for model interpretation which are yet to be implemented in this package. If you would like add some, feel free to create a PR, or you may also create an issue in the repository to request any feature that you think might be useful. Any other kind of contribution are always welcome.","category":"page"},{"location":"faq/#FAQs-1","page":"FAQs","title":"FAQs","text":"","category":"section"},{"location":"faq/#","page":"FAQs","title":"FAQs","text":"This section discusses about frequently asked questions regarding the package.","category":"page"},{"location":"faq/#","page":"FAQs","title":"FAQs","text":"Coming Soon........","category":"page"},{"location":"faq/#Custom-FAQ-1","page":"FAQs","title":"Custom FAQ","text":"","category":"section"},{"location":"faq/#","page":"FAQs","title":"FAQs","text":"If you have any question regarding this package or usage, you can post that as issue on the Git Repo along with the tag FAQ. It will tried to respond to the query as soon as possible.","category":"page"}]
}
