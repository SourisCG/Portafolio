package souriscg.portafolio;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.stereotype.Controller;
import org.springframework.web.servlet.view.RedirectView;

@Controller
public class SController {

    @GetMapping("/api/hello")
    public String sayHello() {
        return "Hello, Sebastian! Your Spring Boot backend is officially alive.";
    }

    @GetMapping("/home")
    public RedirectView redirectToIndex() {
        return new RedirectView("/index.html");
    }
}