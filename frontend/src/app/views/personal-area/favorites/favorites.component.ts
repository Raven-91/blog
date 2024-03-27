import { Component } from '@angular/core';
import {TranslateModule} from "@ngx-translate/core";
import {ArticleType} from "../../../../types/article-type";
import {ArticleItemComponent} from "../../../shared/common/article-item/article-item.component";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-favorites',
  standalone: true,
  imports: [
    TranslateModule,
    ArticleItemComponent,
    RouterLink
  ],
  templateUrl: './favorites.component.html',
  styleUrl: './favorites.component.scss'
})
export class FavoritesComponent {

  favoriteArticles: ArticleType[] = [
    {
      id: "123456789",
      author: "John Conor",
      date: "06.03.2024 21:17",
      subject: {
        en: "Innovation",
        ru: "Инновации"
      },
      title: {
        en: "Noteworthy technology acquisitions 2021",
        ru: "Примечательные технологические приобретения 2021 году"
      },
      description: {
        en: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos laboriosam modi mollitia sint unde? A accusamus,\n" +
          "  adipisci, atque cumque deleniti distinctio est eum labore nemo sed tempora temporibus tenetur, ullam!. Lorem ipsum dolor sit amet, " +
          "consectetur adipisicing elit. Eos laboriosam modi mollitia sint unde? A accusamus,\n" +
          "  adipisci, atque cumque deleniti distinctio est eum labore nemo sed tempora temporibus tenetur, ullam!",
        ru: "Это текст на русском языке consectetur adipisicing elit. Eos laboriosam modi mollitia sint unde? A accusamus,\n" +
          "  adipisci, atque cumque deleniti distinctio est eum labore nemo sed tempora temporibus tenetur, ullam!. Lorem ipsum dolor sit amet, " +
          "consectetur adipisicing elit. Eos laboriosam modi mollitia sint unde? A accusamus,\n" +
          "  adipisci, atque cumque deleniti distinctio est eum labore nemo sed tempora temporibus tenetur, ullam!"
      },
      image: "http://localhost:4200/assets/images/image-sample.jpg",
      url: "",
      favorite: false,
      rating: 3,
      readonly: true,
      totalRate: 4.5,
      content: {
        en:
          "<div>\n" +
          "  It is English text\n" +
          "</div>\n" +
          "<div>\n" +
          "  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam assumenda blanditiis consequatur cum, doloremque\n" +
          "  dolores esse ex, harum minus neque provident quam qui quia rem voluptatem! Eligendi fuga rem sapiente.\n" +
          "</div>\n" +
          "<div>\n" +
          "  Ad aliquid, asperiores enim esse libero minus recusandae saepe ut vel? Adipisci aliquam amet cupiditate deleniti,\n" +
          "  dignissimos dolore earum, est excepturi facilis id ipsum sequi temporibus voluptas? Eum provident, rerum!\n" +
          "</div>\n" +
          "<img src='http://localhost:4200/assets/images/image-sample.jpg' alt='image'>\n" +
          "  Ad aliquid, asperiores enim esse libero minus recusandae saepe ut vel? Adipisci aliquam amet cupiditate deleniti,\n" +
          "  dignissimos dolore earum, est excepturi facilis id ipsum sequi temporibus voluptas? Eum provident, rerum!\n" +
          "<div>\n" +
          "  Ad adipisci aperiam at esse expedita fugiat molestias optio voluptatem. Aut et ipsum iusto. Consectetur harum iure\n" +
          "  nemo nulla, obcaecati omnis quia ratione rem reprehenderit suscipit velit, vero vitae? Sit.\n" +
          "</div>\n" +
          "<div>\n" +
          "  Aliquid cumque, cupiditate deleniti, dolores dolorum enim facere harum impedit laborum magnam molestiae nemo\n" +
          "  nesciunt quas quasi quis quo tempore! Atque consectetur deleniti fugiat ipsa ipsum minus repudiandae vel vitae!\n" +
          "</div>\n" +
          "<div>\n" +
          "  Distinctio error expedita laborum maxime mollitia suscipit tempore! Accusantium aperiam deleniti deserunt dolor,\n" +
          "  dolore eligendi facilis iure iusto nemo numquam omnis porro quam quasi quia recusandae, reiciendis, repellat tempore\n" +
          "  voluptatibus.\n" +
          "</div>\n" +
          "<div>\n" +
          "  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam assumenda blanditiis consequatur cum, doloremque\n" +
          "  dolores esse ex, harum minus neque provident quam qui quia rem voluptatem! Eligendi fuga rem sapiente.\n" +
          "</div>\n" +
          "<div>\n" +
          "  Ad aliquid, asperiores enim esse libero minus recusandae saepe ut vel? Adipisci aliquam amet cupiditate deleniti,\n" +
          "  dignissimos dolore earum, est excepturi facilis id ipsum sequi temporibus voluptas? Eum provident, rerum!\n" +
          "</div>\n" +
          "<div>\n" +
          "  Ad adipisci aperiam at esse expedita fugiat molestias optio voluptatem. Aut et ipsum iusto. Consectetur harum iure\n" +
          "  nemo nulla, obcaecati omnis quia ratione rem reprehenderit suscipit velit, vero vitae? Sit.\n" +
          "</div>\n" +
          "<div>\n" +
          "  Aliquid cumque, cupiditate deleniti, dolores dolorum enim facere harum impedit laborum magnam molestiae nemo\n" +
          "  nesciunt quas quasi quis quo tempore! Atque consectetur deleniti fugiat ipsa ipsum minus repudiandae vel vitae!\n" +
          "</div>\n" +
          "<div>\n" +
          "  Distinctio error expedita laborum maxime mollitia suscipit tempore! Accusantium aperiam deleniti deserunt dolor,\n" +
          "  dolore eligendi facilis iure iusto nemo numquam omnis porro quam quasi quia recusandae, reiciendis, repellat tempore\n" +
          "  voluptatibus.\n" +
          "</div>",
        ru:
          "<div>\n" +
          "Это текст на русском языке\n" +
          "</div>\n" +
          "<div>\n" +
          "  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam assumenda blanditiis consequatur cum, doloremque\n" +
          "  dolores esse ex, harum minus neque provident quam qui quia rem voluptatem! Eligendi fuga rem sapiente.\n" +
          "</div>\n" +
          "<div>\n" +
          "  Ad aliquid, asperiores enim esse libero minus recusandae saepe ut vel? Adipisci aliquam amet cupiditate deleniti,\n" +
          "  dignissimos dolore earum, est excepturi facilis id ipsum sequi temporibus voluptas? Eum provident, rerum!\n" +
          "</div>\n" +
          "<div>\n" +
          "  Ad adipisci aperiam at esse expedita fugiat molestias optio voluptatem. Aut et ipsum iusto. Consectetur harum iure\n" +
          "  nemo nulla, obcaecati omnis quia ratione rem reprehenderit suscipit velit, vero vitae? Sit.\n" +
          "</div>\n" +
          "<div>\n" +
          "  Aliquid cumque, cupiditate deleniti, dolores dolorum enim facere harum impedit laborum magnam molestiae nemo\n" +
          "  nesciunt quas quasi quis quo tempore! Atque consectetur deleniti fugiat ipsa ipsum minus repudiandae vel vitae!\n" +
          "</div>\n" +
          "<div>\n" +
          "  Distinctio error expedita laborum maxime mollitia suscipit tempore! Accusantium aperiam deleniti deserunt dolor,\n" +
          "  dolore eligendi facilis iure iusto nemo numquam omnis porro quam quasi quia recusandae, reiciendis, repellat tempore\n" +
          "  voluptatibus.\n" +
          "</div>\n" +
          "<div>\n" +
          "  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam assumenda blanditiis consequatur cum, doloremque\n" +
          "  dolores esse ex, harum minus neque provident quam qui quia rem voluptatem! Eligendi fuga rem sapiente.\n" +
          "</div>\n" +
          "<div>\n" +
          "  Ad aliquid, asperiores enim esse libero minus recusandae saepe ut vel? Adipisci aliquam amet cupiditate deleniti,\n" +
          "  dignissimos dolore earum, est excepturi facilis id ipsum sequi temporibus voluptas? Eum provident, rerum!\n" +
          "</div>\n" +
          "<div>\n" +
          "  Ad adipisci aperiam at esse expedita fugiat molestias optio voluptatem. Aut et ipsum iusto. Consectetur harum iure\n" +
          "  nemo nulla, obcaecati omnis quia ratione rem reprehenderit suscipit velit, vero vitae? Sit.\n" +
          "</div>\n" +
          "<div>\n" +
          "  Aliquid cumque, cupiditate deleniti, dolores dolorum enim facere harum impedit laborum magnam molestiae nemo\n" +
          "  nesciunt quas quasi quis quo tempore! Atque consectetur deleniti fugiat ipsa ipsum minus repudiandae vel vitae!\n" +
          "</div>\n" +
          "<div>\n" +
          "  Distinctio error expedita laborum maxime mollitia suscipit tempore! Accusantium aperiam deleniti deserunt dolor,\n" +
          "  dolore eligendi facilis iure iusto nemo numquam omnis porro quam quasi quia recusandae, reiciendis, repellat tempore\n" +
          "  voluptatibus.\n" +
          "</div>",

      },
      comments: [],
    },
    {
      id: "123456789",
      author: "John Conor",
      date: "06.03.2024 21:17",
      subject: {
        en: "Innovation",
        ru: "Инновации"
      },
      title: {
        en: "Noteworthy technology acquisitions 2021",
        ru: "Примечательные технологические приобретения 2021 году"
      },
      description: {
        en: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos laboriosam modi mollitia sint unde? A accusamus,\n" +
          "  adipisci, atque cumque deleniti distinctio est eum labore nemo sed tempora temporibus tenetur, ullam!. Lorem ipsum dolor sit amet, " +
          "consectetur adipisicing elit. Eos laboriosam modi mollitia sint unde? A accusamus,\n" +
          "  adipisci, atque cumque deleniti distinctio est eum labore nemo sed tempora temporibus tenetur, ullam!",
        ru: "Это текст на русском языке consectetur adipisicing elit. Eos laboriosam modi mollitia sint unde? A accusamus,\n" +
          "  adipisci, atque cumque deleniti distinctio est eum labore nemo sed tempora temporibus tenetur, ullam!. Lorem ipsum dolor sit amet, " +
          "consectetur adipisicing elit. Eos laboriosam modi mollitia sint unde? A accusamus,\n" +
          "  adipisci, atque cumque deleniti distinctio est eum labore nemo sed tempora temporibus tenetur, ullam!"
      },
      image: "http://localhost:4200/assets/images/image-sample.jpg",
      url: "",
      favorite: false,
      rating: 3,
      readonly: true,
      totalRate: 4.5,
      content: {
        en:
          "<div>\n" +
          "  It is English text\n" +
          "</div>\n" +
          "<div>\n" +
          "  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam assumenda blanditiis consequatur cum, doloremque\n" +
          "  dolores esse ex, harum minus neque provident quam qui quia rem voluptatem! Eligendi fuga rem sapiente.\n" +
          "</div>\n" +
          "<div>\n" +
          "  Ad aliquid, asperiores enim esse libero minus recusandae saepe ut vel? Adipisci aliquam amet cupiditate deleniti,\n" +
          "  dignissimos dolore earum, est excepturi facilis id ipsum sequi temporibus voluptas? Eum provident, rerum!\n" +
          "</div>\n" +
          "<img src='http://localhost:4200/assets/images/image-sample.jpg' alt='image'>\n" +
          "  Ad aliquid, asperiores enim esse libero minus recusandae saepe ut vel? Adipisci aliquam amet cupiditate deleniti,\n" +
          "  dignissimos dolore earum, est excepturi facilis id ipsum sequi temporibus voluptas? Eum provident, rerum!\n" +
          "<div>\n" +
          "  Ad adipisci aperiam at esse expedita fugiat molestias optio voluptatem. Aut et ipsum iusto. Consectetur harum iure\n" +
          "  nemo nulla, obcaecati omnis quia ratione rem reprehenderit suscipit velit, vero vitae? Sit.\n" +
          "</div>\n" +
          "<div>\n" +
          "  Aliquid cumque, cupiditate deleniti, dolores dolorum enim facere harum impedit laborum magnam molestiae nemo\n" +
          "  nesciunt quas quasi quis quo tempore! Atque consectetur deleniti fugiat ipsa ipsum minus repudiandae vel vitae!\n" +
          "</div>\n" +
          "<div>\n" +
          "  Distinctio error expedita laborum maxime mollitia suscipit tempore! Accusantium aperiam deleniti deserunt dolor,\n" +
          "  dolore eligendi facilis iure iusto nemo numquam omnis porro quam quasi quia recusandae, reiciendis, repellat tempore\n" +
          "  voluptatibus.\n" +
          "</div>\n" +
          "<div>\n" +
          "  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam assumenda blanditiis consequatur cum, doloremque\n" +
          "  dolores esse ex, harum minus neque provident quam qui quia rem voluptatem! Eligendi fuga rem sapiente.\n" +
          "</div>\n" +
          "<div>\n" +
          "  Ad aliquid, asperiores enim esse libero minus recusandae saepe ut vel? Adipisci aliquam amet cupiditate deleniti,\n" +
          "  dignissimos dolore earum, est excepturi facilis id ipsum sequi temporibus voluptas? Eum provident, rerum!\n" +
          "</div>\n" +
          "<div>\n" +
          "  Ad adipisci aperiam at esse expedita fugiat molestias optio voluptatem. Aut et ipsum iusto. Consectetur harum iure\n" +
          "  nemo nulla, obcaecati omnis quia ratione rem reprehenderit suscipit velit, vero vitae? Sit.\n" +
          "</div>\n" +
          "<div>\n" +
          "  Aliquid cumque, cupiditate deleniti, dolores dolorum enim facere harum impedit laborum magnam molestiae nemo\n" +
          "  nesciunt quas quasi quis quo tempore! Atque consectetur deleniti fugiat ipsa ipsum minus repudiandae vel vitae!\n" +
          "</div>\n" +
          "<div>\n" +
          "  Distinctio error expedita laborum maxime mollitia suscipit tempore! Accusantium aperiam deleniti deserunt dolor,\n" +
          "  dolore eligendi facilis iure iusto nemo numquam omnis porro quam quasi quia recusandae, reiciendis, repellat tempore\n" +
          "  voluptatibus.\n" +
          "</div>",
        ru:
          "<div>\n" +
          "Это текст на русском языке\n" +
          "</div>\n" +
          "<div>\n" +
          "  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam assumenda blanditiis consequatur cum, doloremque\n" +
          "  dolores esse ex, harum minus neque provident quam qui quia rem voluptatem! Eligendi fuga rem sapiente.\n" +
          "</div>\n" +
          "<div>\n" +
          "  Ad aliquid, asperiores enim esse libero minus recusandae saepe ut vel? Adipisci aliquam amet cupiditate deleniti,\n" +
          "  dignissimos dolore earum, est excepturi facilis id ipsum sequi temporibus voluptas? Eum provident, rerum!\n" +
          "</div>\n" +
          "<div>\n" +
          "  Ad adipisci aperiam at esse expedita fugiat molestias optio voluptatem. Aut et ipsum iusto. Consectetur harum iure\n" +
          "  nemo nulla, obcaecati omnis quia ratione rem reprehenderit suscipit velit, vero vitae? Sit.\n" +
          "</div>\n" +
          "<div>\n" +
          "  Aliquid cumque, cupiditate deleniti, dolores dolorum enim facere harum impedit laborum magnam molestiae nemo\n" +
          "  nesciunt quas quasi quis quo tempore! Atque consectetur deleniti fugiat ipsa ipsum minus repudiandae vel vitae!\n" +
          "</div>\n" +
          "<div>\n" +
          "  Distinctio error expedita laborum maxime mollitia suscipit tempore! Accusantium aperiam deleniti deserunt dolor,\n" +
          "  dolore eligendi facilis iure iusto nemo numquam omnis porro quam quasi quia recusandae, reiciendis, repellat tempore\n" +
          "  voluptatibus.\n" +
          "</div>\n" +
          "<div>\n" +
          "  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam assumenda blanditiis consequatur cum, doloremque\n" +
          "  dolores esse ex, harum minus neque provident quam qui quia rem voluptatem! Eligendi fuga rem sapiente.\n" +
          "</div>\n" +
          "<div>\n" +
          "  Ad aliquid, asperiores enim esse libero minus recusandae saepe ut vel? Adipisci aliquam amet cupiditate deleniti,\n" +
          "  dignissimos dolore earum, est excepturi facilis id ipsum sequi temporibus voluptas? Eum provident, rerum!\n" +
          "</div>\n" +
          "<div>\n" +
          "  Ad adipisci aperiam at esse expedita fugiat molestias optio voluptatem. Aut et ipsum iusto. Consectetur harum iure\n" +
          "  nemo nulla, obcaecati omnis quia ratione rem reprehenderit suscipit velit, vero vitae? Sit.\n" +
          "</div>\n" +
          "<div>\n" +
          "  Aliquid cumque, cupiditate deleniti, dolores dolorum enim facere harum impedit laborum magnam molestiae nemo\n" +
          "  nesciunt quas quasi quis quo tempore! Atque consectetur deleniti fugiat ipsa ipsum minus repudiandae vel vitae!\n" +
          "</div>\n" +
          "<div>\n" +
          "  Distinctio error expedita laborum maxime mollitia suscipit tempore! Accusantium aperiam deleniti deserunt dolor,\n" +
          "  dolore eligendi facilis iure iusto nemo numquam omnis porro quam quasi quia recusandae, reiciendis, repellat tempore\n" +
          "  voluptatibus.\n" +
          "</div>",

      },
      comments: [],
    },
    {
      id: "123456789",
      author: "John Conor",
      date: "06.03.2024 21:17",
      subject: {
        en: "Innovation",
        ru: "Инновации"
      },
      title: {
        en: "Noteworthy technology acquisitions 2021",
        ru: "Примечательные технологические приобретения 2021 году"
      },
      description: {
        en: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos laboriosam modi mollitia sint unde? A accusamus,\n" +
          "  adipisci, atque cumque deleniti distinctio est eum labore nemo sed tempora temporibus tenetur, ullam!. Lorem ipsum dolor sit amet, " +
          "consectetur adipisicing elit. Eos laboriosam modi mollitia sint unde? A accusamus,\n" +
          "  adipisci, atque cumque deleniti distinctio est eum labore nemo sed tempora temporibus tenetur, ullam!",
        ru: "Это текст на русском языке consectetur adipisicing elit. Eos laboriosam modi mollitia sint unde? A accusamus,\n" +
          "  adipisci, atque cumque deleniti distinctio est eum labore nemo sed tempora temporibus tenetur, ullam!. Lorem ipsum dolor sit amet, " +
          "consectetur adipisicing elit. Eos laboriosam modi mollitia sint unde? A accusamus,\n" +
          "  adipisci, atque cumque deleniti distinctio est eum labore nemo sed tempora temporibus tenetur, ullam!"
      },
      image: "http://localhost:4200/assets/images/image-sample.jpg",
      url: "",
      favorite: false,
      rating: 3,
      readonly: true,
      totalRate: 4.5,
      content: {
        en:
          "<div>\n" +
          "  It is English text\n" +
          "</div>\n" +
          "<div>\n" +
          "  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam assumenda blanditiis consequatur cum, doloremque\n" +
          "  dolores esse ex, harum minus neque provident quam qui quia rem voluptatem! Eligendi fuga rem sapiente.\n" +
          "</div>\n" +
          "<div>\n" +
          "  Ad aliquid, asperiores enim esse libero minus recusandae saepe ut vel? Adipisci aliquam amet cupiditate deleniti,\n" +
          "  dignissimos dolore earum, est excepturi facilis id ipsum sequi temporibus voluptas? Eum provident, rerum!\n" +
          "</div>\n" +
          "<img src='http://localhost:4200/assets/images/image-sample.jpg' alt='image'>\n" +
          "  Ad aliquid, asperiores enim esse libero minus recusandae saepe ut vel? Adipisci aliquam amet cupiditate deleniti,\n" +
          "  dignissimos dolore earum, est excepturi facilis id ipsum sequi temporibus voluptas? Eum provident, rerum!\n" +
          "<div>\n" +
          "  Ad adipisci aperiam at esse expedita fugiat molestias optio voluptatem. Aut et ipsum iusto. Consectetur harum iure\n" +
          "  nemo nulla, obcaecati omnis quia ratione rem reprehenderit suscipit velit, vero vitae? Sit.\n" +
          "</div>\n" +
          "<div>\n" +
          "  Aliquid cumque, cupiditate deleniti, dolores dolorum enim facere harum impedit laborum magnam molestiae nemo\n" +
          "  nesciunt quas quasi quis quo tempore! Atque consectetur deleniti fugiat ipsa ipsum minus repudiandae vel vitae!\n" +
          "</div>\n" +
          "<div>\n" +
          "  Distinctio error expedita laborum maxime mollitia suscipit tempore! Accusantium aperiam deleniti deserunt dolor,\n" +
          "  dolore eligendi facilis iure iusto nemo numquam omnis porro quam quasi quia recusandae, reiciendis, repellat tempore\n" +
          "  voluptatibus.\n" +
          "</div>\n" +
          "<div>\n" +
          "  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam assumenda blanditiis consequatur cum, doloremque\n" +
          "  dolores esse ex, harum minus neque provident quam qui quia rem voluptatem! Eligendi fuga rem sapiente.\n" +
          "</div>\n" +
          "<div>\n" +
          "  Ad aliquid, asperiores enim esse libero minus recusandae saepe ut vel? Adipisci aliquam amet cupiditate deleniti,\n" +
          "  dignissimos dolore earum, est excepturi facilis id ipsum sequi temporibus voluptas? Eum provident, rerum!\n" +
          "</div>\n" +
          "<div>\n" +
          "  Ad adipisci aperiam at esse expedita fugiat molestias optio voluptatem. Aut et ipsum iusto. Consectetur harum iure\n" +
          "  nemo nulla, obcaecati omnis quia ratione rem reprehenderit suscipit velit, vero vitae? Sit.\n" +
          "</div>\n" +
          "<div>\n" +
          "  Aliquid cumque, cupiditate deleniti, dolores dolorum enim facere harum impedit laborum magnam molestiae nemo\n" +
          "  nesciunt quas quasi quis quo tempore! Atque consectetur deleniti fugiat ipsa ipsum minus repudiandae vel vitae!\n" +
          "</div>\n" +
          "<div>\n" +
          "  Distinctio error expedita laborum maxime mollitia suscipit tempore! Accusantium aperiam deleniti deserunt dolor,\n" +
          "  dolore eligendi facilis iure iusto nemo numquam omnis porro quam quasi quia recusandae, reiciendis, repellat tempore\n" +
          "  voluptatibus.\n" +
          "</div>",
        ru:
          "<div>\n" +
          "Это текст на русском языке\n" +
          "</div>\n" +
          "<div>\n" +
          "  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam assumenda blanditiis consequatur cum, doloremque\n" +
          "  dolores esse ex, harum minus neque provident quam qui quia rem voluptatem! Eligendi fuga rem sapiente.\n" +
          "</div>\n" +
          "<div>\n" +
          "  Ad aliquid, asperiores enim esse libero minus recusandae saepe ut vel? Adipisci aliquam amet cupiditate deleniti,\n" +
          "  dignissimos dolore earum, est excepturi facilis id ipsum sequi temporibus voluptas? Eum provident, rerum!\n" +
          "</div>\n" +
          "<div>\n" +
          "  Ad adipisci aperiam at esse expedita fugiat molestias optio voluptatem. Aut et ipsum iusto. Consectetur harum iure\n" +
          "  nemo nulla, obcaecati omnis quia ratione rem reprehenderit suscipit velit, vero vitae? Sit.\n" +
          "</div>\n" +
          "<div>\n" +
          "  Aliquid cumque, cupiditate deleniti, dolores dolorum enim facere harum impedit laborum magnam molestiae nemo\n" +
          "  nesciunt quas quasi quis quo tempore! Atque consectetur deleniti fugiat ipsa ipsum minus repudiandae vel vitae!\n" +
          "</div>\n" +
          "<div>\n" +
          "  Distinctio error expedita laborum maxime mollitia suscipit tempore! Accusantium aperiam deleniti deserunt dolor,\n" +
          "  dolore eligendi facilis iure iusto nemo numquam omnis porro quam quasi quia recusandae, reiciendis, repellat tempore\n" +
          "  voluptatibus.\n" +
          "</div>\n" +
          "<div>\n" +
          "  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam assumenda blanditiis consequatur cum, doloremque\n" +
          "  dolores esse ex, harum minus neque provident quam qui quia rem voluptatem! Eligendi fuga rem sapiente.\n" +
          "</div>\n" +
          "<div>\n" +
          "  Ad aliquid, asperiores enim esse libero minus recusandae saepe ut vel? Adipisci aliquam amet cupiditate deleniti,\n" +
          "  dignissimos dolore earum, est excepturi facilis id ipsum sequi temporibus voluptas? Eum provident, rerum!\n" +
          "</div>\n" +
          "<div>\n" +
          "  Ad adipisci aperiam at esse expedita fugiat molestias optio voluptatem. Aut et ipsum iusto. Consectetur harum iure\n" +
          "  nemo nulla, obcaecati omnis quia ratione rem reprehenderit suscipit velit, vero vitae? Sit.\n" +
          "</div>\n" +
          "<div>\n" +
          "  Aliquid cumque, cupiditate deleniti, dolores dolorum enim facere harum impedit laborum magnam molestiae nemo\n" +
          "  nesciunt quas quasi quis quo tempore! Atque consectetur deleniti fugiat ipsa ipsum minus repudiandae vel vitae!\n" +
          "</div>\n" +
          "<div>\n" +
          "  Distinctio error expedita laborum maxime mollitia suscipit tempore! Accusantium aperiam deleniti deserunt dolor,\n" +
          "  dolore eligendi facilis iure iusto nemo numquam omnis porro quam quasi quia recusandae, reiciendis, repellat tempore\n" +
          "  voluptatibus.\n" +
          "</div>",

      },
      comments: [],
    },
    {
      id: "123456789",
      author: "John Conor",
      date: "06.03.2024 21:17",
      subject: {
        en: "Innovation",
        ru: "Инновации"
      },
      title: {
        en: "Noteworthy technology acquisitions 2021",
        ru: "Примечательные технологические приобретения 2021 году"
      },
      description: {
        en: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos laboriosam modi mollitia sint unde? A accusamus,\n" +
          "  adipisci, atque cumque deleniti distinctio est eum labore nemo sed tempora temporibus tenetur, ullam!. Lorem ipsum dolor sit amet, " +
          "consectetur adipisicing elit. Eos laboriosam modi mollitia sint unde? A accusamus,\n" +
          "  adipisci, atque cumque deleniti distinctio est eum labore nemo sed tempora temporibus tenetur, ullam!",
        ru: "Это текст на русском языке consectetur adipisicing elit. Eos laboriosam modi mollitia sint unde? A accusamus,\n" +
          "  adipisci, atque cumque deleniti distinctio est eum labore nemo sed tempora temporibus tenetur, ullam!. Lorem ipsum dolor sit amet, " +
          "consectetur adipisicing elit. Eos laboriosam modi mollitia sint unde? A accusamus,\n" +
          "  adipisci, atque cumque deleniti distinctio est eum labore nemo sed tempora temporibus tenetur, ullam!"
      },
      image: "http://localhost:4200/assets/images/image-sample.jpg",
      url: "",
      favorite: false,
      rating: 3,
      readonly: true,
      totalRate: 4.5,
      content: {
        en:
          "<div>\n" +
          "  It is English text\n" +
          "</div>\n" +
          "<div>\n" +
          "  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam assumenda blanditiis consequatur cum, doloremque\n" +
          "  dolores esse ex, harum minus neque provident quam qui quia rem voluptatem! Eligendi fuga rem sapiente.\n" +
          "</div>\n" +
          "<div>\n" +
          "  Ad aliquid, asperiores enim esse libero minus recusandae saepe ut vel? Adipisci aliquam amet cupiditate deleniti,\n" +
          "  dignissimos dolore earum, est excepturi facilis id ipsum sequi temporibus voluptas? Eum provident, rerum!\n" +
          "</div>\n" +
          "<img src='http://localhost:4200/assets/images/image-sample.jpg' alt='image'>\n" +
          "  Ad aliquid, asperiores enim esse libero minus recusandae saepe ut vel? Adipisci aliquam amet cupiditate deleniti,\n" +
          "  dignissimos dolore earum, est excepturi facilis id ipsum sequi temporibus voluptas? Eum provident, rerum!\n" +
          "<div>\n" +
          "  Ad adipisci aperiam at esse expedita fugiat molestias optio voluptatem. Aut et ipsum iusto. Consectetur harum iure\n" +
          "  nemo nulla, obcaecati omnis quia ratione rem reprehenderit suscipit velit, vero vitae? Sit.\n" +
          "</div>\n" +
          "<div>\n" +
          "  Aliquid cumque, cupiditate deleniti, dolores dolorum enim facere harum impedit laborum magnam molestiae nemo\n" +
          "  nesciunt quas quasi quis quo tempore! Atque consectetur deleniti fugiat ipsa ipsum minus repudiandae vel vitae!\n" +
          "</div>\n" +
          "<div>\n" +
          "  Distinctio error expedita laborum maxime mollitia suscipit tempore! Accusantium aperiam deleniti deserunt dolor,\n" +
          "  dolore eligendi facilis iure iusto nemo numquam omnis porro quam quasi quia recusandae, reiciendis, repellat tempore\n" +
          "  voluptatibus.\n" +
          "</div>\n" +
          "<div>\n" +
          "  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam assumenda blanditiis consequatur cum, doloremque\n" +
          "  dolores esse ex, harum minus neque provident quam qui quia rem voluptatem! Eligendi fuga rem sapiente.\n" +
          "</div>\n" +
          "<div>\n" +
          "  Ad aliquid, asperiores enim esse libero minus recusandae saepe ut vel? Adipisci aliquam amet cupiditate deleniti,\n" +
          "  dignissimos dolore earum, est excepturi facilis id ipsum sequi temporibus voluptas? Eum provident, rerum!\n" +
          "</div>\n" +
          "<div>\n" +
          "  Ad adipisci aperiam at esse expedita fugiat molestias optio voluptatem. Aut et ipsum iusto. Consectetur harum iure\n" +
          "  nemo nulla, obcaecati omnis quia ratione rem reprehenderit suscipit velit, vero vitae? Sit.\n" +
          "</div>\n" +
          "<div>\n" +
          "  Aliquid cumque, cupiditate deleniti, dolores dolorum enim facere harum impedit laborum magnam molestiae nemo\n" +
          "  nesciunt quas quasi quis quo tempore! Atque consectetur deleniti fugiat ipsa ipsum minus repudiandae vel vitae!\n" +
          "</div>\n" +
          "<div>\n" +
          "  Distinctio error expedita laborum maxime mollitia suscipit tempore! Accusantium aperiam deleniti deserunt dolor,\n" +
          "  dolore eligendi facilis iure iusto nemo numquam omnis porro quam quasi quia recusandae, reiciendis, repellat tempore\n" +
          "  voluptatibus.\n" +
          "</div>",
        ru:
          "<div>\n" +
          "Это текст на русском языке\n" +
          "</div>\n" +
          "<div>\n" +
          "  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam assumenda blanditiis consequatur cum, doloremque\n" +
          "  dolores esse ex, harum minus neque provident quam qui quia rem voluptatem! Eligendi fuga rem sapiente.\n" +
          "</div>\n" +
          "<div>\n" +
          "  Ad aliquid, asperiores enim esse libero minus recusandae saepe ut vel? Adipisci aliquam amet cupiditate deleniti,\n" +
          "  dignissimos dolore earum, est excepturi facilis id ipsum sequi temporibus voluptas? Eum provident, rerum!\n" +
          "</div>\n" +
          "<div>\n" +
          "  Ad adipisci aperiam at esse expedita fugiat molestias optio voluptatem. Aut et ipsum iusto. Consectetur harum iure\n" +
          "  nemo nulla, obcaecati omnis quia ratione rem reprehenderit suscipit velit, vero vitae? Sit.\n" +
          "</div>\n" +
          "<div>\n" +
          "  Aliquid cumque, cupiditate deleniti, dolores dolorum enim facere harum impedit laborum magnam molestiae nemo\n" +
          "  nesciunt quas quasi quis quo tempore! Atque consectetur deleniti fugiat ipsa ipsum minus repudiandae vel vitae!\n" +
          "</div>\n" +
          "<div>\n" +
          "  Distinctio error expedita laborum maxime mollitia suscipit tempore! Accusantium aperiam deleniti deserunt dolor,\n" +
          "  dolore eligendi facilis iure iusto nemo numquam omnis porro quam quasi quia recusandae, reiciendis, repellat tempore\n" +
          "  voluptatibus.\n" +
          "</div>\n" +
          "<div>\n" +
          "  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam assumenda blanditiis consequatur cum, doloremque\n" +
          "  dolores esse ex, harum minus neque provident quam qui quia rem voluptatem! Eligendi fuga rem sapiente.\n" +
          "</div>\n" +
          "<div>\n" +
          "  Ad aliquid, asperiores enim esse libero minus recusandae saepe ut vel? Adipisci aliquam amet cupiditate deleniti,\n" +
          "  dignissimos dolore earum, est excepturi facilis id ipsum sequi temporibus voluptas? Eum provident, rerum!\n" +
          "</div>\n" +
          "<div>\n" +
          "  Ad adipisci aperiam at esse expedita fugiat molestias optio voluptatem. Aut et ipsum iusto. Consectetur harum iure\n" +
          "  nemo nulla, obcaecati omnis quia ratione rem reprehenderit suscipit velit, vero vitae? Sit.\n" +
          "</div>\n" +
          "<div>\n" +
          "  Aliquid cumque, cupiditate deleniti, dolores dolorum enim facere harum impedit laborum magnam molestiae nemo\n" +
          "  nesciunt quas quasi quis quo tempore! Atque consectetur deleniti fugiat ipsa ipsum minus repudiandae vel vitae!\n" +
          "</div>\n" +
          "<div>\n" +
          "  Distinctio error expedita laborum maxime mollitia suscipit tempore! Accusantium aperiam deleniti deserunt dolor,\n" +
          "  dolore eligendi facilis iure iusto nemo numquam omnis porro quam quasi quia recusandae, reiciendis, repellat tempore\n" +
          "  voluptatibus.\n" +
          "</div>",

      },
      comments: [],
    },
    {
      id: "123456789",
      author: "John Conor",
      date: "06.03.2024 21:17",
      subject: {
        en: "Innovation",
        ru: "Инновации"
      },
      title: {
        en: "Noteworthy technology acquisitions 2021",
        ru: "Примечательные технологические приобретения 2021 году"
      },
      description: {
        en: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos laboriosam modi mollitia sint unde? A accusamus,\n" +
          "  adipisci, atque cumque deleniti distinctio est eum labore nemo sed tempora temporibus tenetur, ullam!. Lorem ipsum dolor sit amet, " +
          "consectetur adipisicing elit. Eos laboriosam modi mollitia sint unde? A accusamus,\n" +
          "  adipisci, atque cumque deleniti distinctio est eum labore nemo sed tempora temporibus tenetur, ullam!",
        ru: "Это текст на русском языке consectetur adipisicing elit. Eos laboriosam modi mollitia sint unde? A accusamus,\n" +
          "  adipisci, atque cumque deleniti distinctio est eum labore nemo sed tempora temporibus tenetur, ullam!. Lorem ipsum dolor sit amet, " +
          "consectetur adipisicing elit. Eos laboriosam modi mollitia sint unde? A accusamus,\n" +
          "  adipisci, atque cumque deleniti distinctio est eum labore nemo sed tempora temporibus tenetur, ullam!"
      },
      image: "http://localhost:4200/assets/images/image-sample.jpg",
      url: "",
      favorite: false,
      rating: 3,
      readonly: true,
      totalRate: 4.5,
      content: {
        en:
          "<div>\n" +
          "  It is English text\n" +
          "</div>\n" +
          "<div>\n" +
          "  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam assumenda blanditiis consequatur cum, doloremque\n" +
          "  dolores esse ex, harum minus neque provident quam qui quia rem voluptatem! Eligendi fuga rem sapiente.\n" +
          "</div>\n" +
          "<div>\n" +
          "  Ad aliquid, asperiores enim esse libero minus recusandae saepe ut vel? Adipisci aliquam amet cupiditate deleniti,\n" +
          "  dignissimos dolore earum, est excepturi facilis id ipsum sequi temporibus voluptas? Eum provident, rerum!\n" +
          "</div>\n" +
          "<img src='http://localhost:4200/assets/images/image-sample.jpg' alt='image'>\n" +
          "  Ad aliquid, asperiores enim esse libero minus recusandae saepe ut vel? Adipisci aliquam amet cupiditate deleniti,\n" +
          "  dignissimos dolore earum, est excepturi facilis id ipsum sequi temporibus voluptas? Eum provident, rerum!\n" +
          "<div>\n" +
          "  Ad adipisci aperiam at esse expedita fugiat molestias optio voluptatem. Aut et ipsum iusto. Consectetur harum iure\n" +
          "  nemo nulla, obcaecati omnis quia ratione rem reprehenderit suscipit velit, vero vitae? Sit.\n" +
          "</div>\n" +
          "<div>\n" +
          "  Aliquid cumque, cupiditate deleniti, dolores dolorum enim facere harum impedit laborum magnam molestiae nemo\n" +
          "  nesciunt quas quasi quis quo tempore! Atque consectetur deleniti fugiat ipsa ipsum minus repudiandae vel vitae!\n" +
          "</div>\n" +
          "<div>\n" +
          "  Distinctio error expedita laborum maxime mollitia suscipit tempore! Accusantium aperiam deleniti deserunt dolor,\n" +
          "  dolore eligendi facilis iure iusto nemo numquam omnis porro quam quasi quia recusandae, reiciendis, repellat tempore\n" +
          "  voluptatibus.\n" +
          "</div>\n" +
          "<div>\n" +
          "  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam assumenda blanditiis consequatur cum, doloremque\n" +
          "  dolores esse ex, harum minus neque provident quam qui quia rem voluptatem! Eligendi fuga rem sapiente.\n" +
          "</div>\n" +
          "<div>\n" +
          "  Ad aliquid, asperiores enim esse libero minus recusandae saepe ut vel? Adipisci aliquam amet cupiditate deleniti,\n" +
          "  dignissimos dolore earum, est excepturi facilis id ipsum sequi temporibus voluptas? Eum provident, rerum!\n" +
          "</div>\n" +
          "<div>\n" +
          "  Ad adipisci aperiam at esse expedita fugiat molestias optio voluptatem. Aut et ipsum iusto. Consectetur harum iure\n" +
          "  nemo nulla, obcaecati omnis quia ratione rem reprehenderit suscipit velit, vero vitae? Sit.\n" +
          "</div>\n" +
          "<div>\n" +
          "  Aliquid cumque, cupiditate deleniti, dolores dolorum enim facere harum impedit laborum magnam molestiae nemo\n" +
          "  nesciunt quas quasi quis quo tempore! Atque consectetur deleniti fugiat ipsa ipsum minus repudiandae vel vitae!\n" +
          "</div>\n" +
          "<div>\n" +
          "  Distinctio error expedita laborum maxime mollitia suscipit tempore! Accusantium aperiam deleniti deserunt dolor,\n" +
          "  dolore eligendi facilis iure iusto nemo numquam omnis porro quam quasi quia recusandae, reiciendis, repellat tempore\n" +
          "  voluptatibus.\n" +
          "</div>",
        ru:
          "<div>\n" +
          "Это текст на русском языке\n" +
          "</div>\n" +
          "<div>\n" +
          "  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam assumenda blanditiis consequatur cum, doloremque\n" +
          "  dolores esse ex, harum minus neque provident quam qui quia rem voluptatem! Eligendi fuga rem sapiente.\n" +
          "</div>\n" +
          "<div>\n" +
          "  Ad aliquid, asperiores enim esse libero minus recusandae saepe ut vel? Adipisci aliquam amet cupiditate deleniti,\n" +
          "  dignissimos dolore earum, est excepturi facilis id ipsum sequi temporibus voluptas? Eum provident, rerum!\n" +
          "</div>\n" +
          "<div>\n" +
          "  Ad adipisci aperiam at esse expedita fugiat molestias optio voluptatem. Aut et ipsum iusto. Consectetur harum iure\n" +
          "  nemo nulla, obcaecati omnis quia ratione rem reprehenderit suscipit velit, vero vitae? Sit.\n" +
          "</div>\n" +
          "<div>\n" +
          "  Aliquid cumque, cupiditate deleniti, dolores dolorum enim facere harum impedit laborum magnam molestiae nemo\n" +
          "  nesciunt quas quasi quis quo tempore! Atque consectetur deleniti fugiat ipsa ipsum minus repudiandae vel vitae!\n" +
          "</div>\n" +
          "<div>\n" +
          "  Distinctio error expedita laborum maxime mollitia suscipit tempore! Accusantium aperiam deleniti deserunt dolor,\n" +
          "  dolore eligendi facilis iure iusto nemo numquam omnis porro quam quasi quia recusandae, reiciendis, repellat tempore\n" +
          "  voluptatibus.\n" +
          "</div>\n" +
          "<div>\n" +
          "  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam assumenda blanditiis consequatur cum, doloremque\n" +
          "  dolores esse ex, harum minus neque provident quam qui quia rem voluptatem! Eligendi fuga rem sapiente.\n" +
          "</div>\n" +
          "<div>\n" +
          "  Ad aliquid, asperiores enim esse libero minus recusandae saepe ut vel? Adipisci aliquam amet cupiditate deleniti,\n" +
          "  dignissimos dolore earum, est excepturi facilis id ipsum sequi temporibus voluptas? Eum provident, rerum!\n" +
          "</div>\n" +
          "<div>\n" +
          "  Ad adipisci aperiam at esse expedita fugiat molestias optio voluptatem. Aut et ipsum iusto. Consectetur harum iure\n" +
          "  nemo nulla, obcaecati omnis quia ratione rem reprehenderit suscipit velit, vero vitae? Sit.\n" +
          "</div>\n" +
          "<div>\n" +
          "  Aliquid cumque, cupiditate deleniti, dolores dolorum enim facere harum impedit laborum magnam molestiae nemo\n" +
          "  nesciunt quas quasi quis quo tempore! Atque consectetur deleniti fugiat ipsa ipsum minus repudiandae vel vitae!\n" +
          "</div>\n" +
          "<div>\n" +
          "  Distinctio error expedita laborum maxime mollitia suscipit tempore! Accusantium aperiam deleniti deserunt dolor,\n" +
          "  dolore eligendi facilis iure iusto nemo numquam omnis porro quam quasi quia recusandae, reiciendis, repellat tempore\n" +
          "  voluptatibus.\n" +
          "</div>",

      },
      comments: [],
    },
    {
      id: "123456789",
      author: "John Conor",
      date: "06.03.2024 21:17",
      subject: {
        en: "Innovation",
        ru: "Инновации"
      },
      title: {
        en: "Noteworthy technology acquisitions 2021",
        ru: "Примечательные технологические приобретения 2021 году"
      },
      description: {
        en: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos laboriosam modi mollitia sint unde? A accusamus,\n" +
          "  adipisci, atque cumque deleniti distinctio est eum labore nemo sed tempora temporibus tenetur, ullam!. Lorem ipsum dolor sit amet, " +
          "consectetur adipisicing elit. Eos laboriosam modi mollitia sint unde? A accusamus,\n" +
          "  adipisci, atque cumque deleniti distinctio est eum labore nemo sed tempora temporibus tenetur, ullam!",
        ru: "Это текст на русском языке consectetur adipisicing elit. Eos laboriosam modi mollitia sint unde? A accusamus,\n" +
          "  adipisci, atque cumque deleniti distinctio est eum labore nemo sed tempora temporibus tenetur, ullam!. Lorem ipsum dolor sit amet, " +
          "consectetur adipisicing elit. Eos laboriosam modi mollitia sint unde? A accusamus,\n" +
          "  adipisci, atque cumque deleniti distinctio est eum labore nemo sed tempora temporibus tenetur, ullam!"
      },
      image: "http://localhost:4200/assets/images/image-sample.jpg",
      url: "",
      favorite: false,
      rating: 3,
      readonly: true,
      totalRate: 4.5,
      content: {
        en:
          "<div>\n" +
          "  It is English text\n" +
          "</div>\n" +
          "<div>\n" +
          "  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam assumenda blanditiis consequatur cum, doloremque\n" +
          "  dolores esse ex, harum minus neque provident quam qui quia rem voluptatem! Eligendi fuga rem sapiente.\n" +
          "</div>\n" +
          "<div>\n" +
          "  Ad aliquid, asperiores enim esse libero minus recusandae saepe ut vel? Adipisci aliquam amet cupiditate deleniti,\n" +
          "  dignissimos dolore earum, est excepturi facilis id ipsum sequi temporibus voluptas? Eum provident, rerum!\n" +
          "</div>\n" +
          "<img src='http://localhost:4200/assets/images/image-sample.jpg' alt='image'>\n" +
          "  Ad aliquid, asperiores enim esse libero minus recusandae saepe ut vel? Adipisci aliquam amet cupiditate deleniti,\n" +
          "  dignissimos dolore earum, est excepturi facilis id ipsum sequi temporibus voluptas? Eum provident, rerum!\n" +
          "<div>\n" +
          "  Ad adipisci aperiam at esse expedita fugiat molestias optio voluptatem. Aut et ipsum iusto. Consectetur harum iure\n" +
          "  nemo nulla, obcaecati omnis quia ratione rem reprehenderit suscipit velit, vero vitae? Sit.\n" +
          "</div>\n" +
          "<div>\n" +
          "  Aliquid cumque, cupiditate deleniti, dolores dolorum enim facere harum impedit laborum magnam molestiae nemo\n" +
          "  nesciunt quas quasi quis quo tempore! Atque consectetur deleniti fugiat ipsa ipsum minus repudiandae vel vitae!\n" +
          "</div>\n" +
          "<div>\n" +
          "  Distinctio error expedita laborum maxime mollitia suscipit tempore! Accusantium aperiam deleniti deserunt dolor,\n" +
          "  dolore eligendi facilis iure iusto nemo numquam omnis porro quam quasi quia recusandae, reiciendis, repellat tempore\n" +
          "  voluptatibus.\n" +
          "</div>\n" +
          "<div>\n" +
          "  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam assumenda blanditiis consequatur cum, doloremque\n" +
          "  dolores esse ex, harum minus neque provident quam qui quia rem voluptatem! Eligendi fuga rem sapiente.\n" +
          "</div>\n" +
          "<div>\n" +
          "  Ad aliquid, asperiores enim esse libero minus recusandae saepe ut vel? Adipisci aliquam amet cupiditate deleniti,\n" +
          "  dignissimos dolore earum, est excepturi facilis id ipsum sequi temporibus voluptas? Eum provident, rerum!\n" +
          "</div>\n" +
          "<div>\n" +
          "  Ad adipisci aperiam at esse expedita fugiat molestias optio voluptatem. Aut et ipsum iusto. Consectetur harum iure\n" +
          "  nemo nulla, obcaecati omnis quia ratione rem reprehenderit suscipit velit, vero vitae? Sit.\n" +
          "</div>\n" +
          "<div>\n" +
          "  Aliquid cumque, cupiditate deleniti, dolores dolorum enim facere harum impedit laborum magnam molestiae nemo\n" +
          "  nesciunt quas quasi quis quo tempore! Atque consectetur deleniti fugiat ipsa ipsum minus repudiandae vel vitae!\n" +
          "</div>\n" +
          "<div>\n" +
          "  Distinctio error expedita laborum maxime mollitia suscipit tempore! Accusantium aperiam deleniti deserunt dolor,\n" +
          "  dolore eligendi facilis iure iusto nemo numquam omnis porro quam quasi quia recusandae, reiciendis, repellat tempore\n" +
          "  voluptatibus.\n" +
          "</div>",
        ru:
          "<div>\n" +
          "Это текст на русском языке\n" +
          "</div>\n" +
          "<div>\n" +
          "  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam assumenda blanditiis consequatur cum, doloremque\n" +
          "  dolores esse ex, harum minus neque provident quam qui quia rem voluptatem! Eligendi fuga rem sapiente.\n" +
          "</div>\n" +
          "<div>\n" +
          "  Ad aliquid, asperiores enim esse libero minus recusandae saepe ut vel? Adipisci aliquam amet cupiditate deleniti,\n" +
          "  dignissimos dolore earum, est excepturi facilis id ipsum sequi temporibus voluptas? Eum provident, rerum!\n" +
          "</div>\n" +
          "<div>\n" +
          "  Ad adipisci aperiam at esse expedita fugiat molestias optio voluptatem. Aut et ipsum iusto. Consectetur harum iure\n" +
          "  nemo nulla, obcaecati omnis quia ratione rem reprehenderit suscipit velit, vero vitae? Sit.\n" +
          "</div>\n" +
          "<div>\n" +
          "  Aliquid cumque, cupiditate deleniti, dolores dolorum enim facere harum impedit laborum magnam molestiae nemo\n" +
          "  nesciunt quas quasi quis quo tempore! Atque consectetur deleniti fugiat ipsa ipsum minus repudiandae vel vitae!\n" +
          "</div>\n" +
          "<div>\n" +
          "  Distinctio error expedita laborum maxime mollitia suscipit tempore! Accusantium aperiam deleniti deserunt dolor,\n" +
          "  dolore eligendi facilis iure iusto nemo numquam omnis porro quam quasi quia recusandae, reiciendis, repellat tempore\n" +
          "  voluptatibus.\n" +
          "</div>\n" +
          "<div>\n" +
          "  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam assumenda blanditiis consequatur cum, doloremque\n" +
          "  dolores esse ex, harum minus neque provident quam qui quia rem voluptatem! Eligendi fuga rem sapiente.\n" +
          "</div>\n" +
          "<div>\n" +
          "  Ad aliquid, asperiores enim esse libero minus recusandae saepe ut vel? Adipisci aliquam amet cupiditate deleniti,\n" +
          "  dignissimos dolore earum, est excepturi facilis id ipsum sequi temporibus voluptas? Eum provident, rerum!\n" +
          "</div>\n" +
          "<div>\n" +
          "  Ad adipisci aperiam at esse expedita fugiat molestias optio voluptatem. Aut et ipsum iusto. Consectetur harum iure\n" +
          "  nemo nulla, obcaecati omnis quia ratione rem reprehenderit suscipit velit, vero vitae? Sit.\n" +
          "</div>\n" +
          "<div>\n" +
          "  Aliquid cumque, cupiditate deleniti, dolores dolorum enim facere harum impedit laborum magnam molestiae nemo\n" +
          "  nesciunt quas quasi quis quo tempore! Atque consectetur deleniti fugiat ipsa ipsum minus repudiandae vel vitae!\n" +
          "</div>\n" +
          "<div>\n" +
          "  Distinctio error expedita laborum maxime mollitia suscipit tempore! Accusantium aperiam deleniti deserunt dolor,\n" +
          "  dolore eligendi facilis iure iusto nemo numquam omnis porro quam quasi quia recusandae, reiciendis, repellat tempore\n" +
          "  voluptatibus.\n" +
          "</div>",

      },
      comments: [],
    },
  ]
}
