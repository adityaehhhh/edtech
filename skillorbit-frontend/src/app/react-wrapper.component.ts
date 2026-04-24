import { Component, ElementRef, Input, OnChanges, OnDestroy, AfterViewInit } from '@angular/core';
import { createRoot, Root } from 'react-dom/client';
import * as React from 'react';
import { ChakraProvider } from '@chakra-ui/react';

@Component({
  selector: 'app-react-wrapper',
  standalone: true,
  template: '<div class="react-container"></div>',
})
export class ReactWrapperComponent implements OnChanges, OnDestroy, AfterViewInit {
  @Input() reactComponent: any;
  @Input() props: any = {};

  private root: Root | null = null;
  private containerRef: HTMLElement | null = null;

  constructor(private el: ElementRef) {}

  ngAfterViewInit() {
    this.containerRef = this.el.nativeElement.querySelector('.react-container');
    if (this.containerRef) {
      this.root = createRoot(this.containerRef);
      this.render();
    }
  }

  ngOnChanges() {
    if (this.root) {
      this.render();
    }
  }

  ngOnDestroy() {
    if (this.root) {
      this.root.unmount();
    }
  }

  private render() {
    if (this.reactComponent && this.root) {
      const Element = React.createElement(this.reactComponent, this.props);
      // We automatically wrap every rendered React component in ChakraProvider
      const ProviderWrapped = React.createElement(ChakraProvider, null, Element);
      this.root.render(ProviderWrapped);
    }
  }
}
