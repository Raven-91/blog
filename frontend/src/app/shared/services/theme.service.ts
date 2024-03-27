import {Injectable} from '@angular/core';
import {funcAddClass, funcId, funcRemoveClass} from "../../utils/shared";
import {EditorComponent} from "@tinymce/tinymce-angular";
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private dark: string = 'dark';
  private darkMode: boolean = false;
  public isDarkMode$: Subject<boolean> = new Subject<boolean>();

  isDarkMode(): boolean {
    return this.darkMode;
  }

  setDarkMode(isDarkMode: boolean): void {
    this.darkMode = isDarkMode;
    this.isDarkMode$.next(isDarkMode);
    const htmlElement: HTMLElement | null = funcId('html') as HTMLElement;
    this.darkMode ? funcAddClass(htmlElement, this.dark) : funcRemoveClass(htmlElement, this.dark);
  }

  setEditorTheme(editor: EditorComponent): void {
    const styleLink: Element | null = document.querySelector('[id^="mce-"]');
    if (styleLink) {
      if (this.darkMode) {
        styleLink.setAttribute('href', 'http://localhost:4200/tinymce/skins/ui/oxide-dark/skin.min.css');
        this.changeIFrameLink(editor, 'http://localhost:4200/tinymce/skins/content/dark/content.min.css');
      } else {
        styleLink.setAttribute('href', 'http://localhost:4200/tinymce/skins/ui/oxide/skin.min.css');
        this.changeIFrameLink(editor, 'http://localhost:4200/tinymce/skins/content/default/content.min.css');
      }
    }
  }

  changeIFrameLink(editor: EditorComponent, url: string) {
    let iFrameContentHeadLinks;
    if (editor.editor.iframeElement && editor.editor.iframeElement.contentDocument) {
      iFrameContentHeadLinks = editor.editor.iframeElement.contentDocument.head.querySelectorAll('[id^="mce-"]');
      if (iFrameContentHeadLinks) {
        for (let i = 0; i < iFrameContentHeadLinks.length; i++) {
          iFrameContentHeadLinks[i].setAttribute('href', url);
        }
      }
    }
  }
}

