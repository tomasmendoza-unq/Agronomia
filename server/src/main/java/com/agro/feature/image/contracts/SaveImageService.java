package com.agro.feature.image.contracts;

import com.agro.feature.image.domain.Imagen;
import org.springframework.web.multipart.MultipartFile;

public interface SaveImageService {
    Imagen saveImage(MultipartFile logo);
}
