$($(".header__navbar-nav")[0]).click(function(t){$($(".header__navbar-nav")[0]).toggleClass("active");let e=$($(".header")[0]);"visible"==e.css("overflow")?e.css("overflow","hidden"):e.css("overflow","visible")});const item=$(".carousel-item"),arrow=$(".arrow");let clickCounter=0;for(let t=0,e=item.length;t<e;t++)$(item[t]).attr("id",`${t}`).css("position","relative");$(item).hide(),$("#2").show(),arrow.click(function(t){if(0===clickCounter){clickCounter++;let e=$(".carousel-item:visible")[0],i=$(e).width(),o=$(e).offset().top,s=$(e).offset().left,l=Number($(e).attr("id"));if($(t.target).hasClass("arrow-left")){let t=$(`#${l+1}`);l+1===item.length&&(t=$("#0"));let r={top:`${o}`,left:`${$(window).width()}`};$(e).css("position","absolute").offset({top:o,left:s}).width(i).animate({left:`-=${Number(r.left)-Number(s)}`},"slow",function(){$(this).css({position:"relative",width:"auto"}).hide(),clickCounter=0}),$(t).show(),$(t).offset(r),$(t).animate({left:`-=${Number(r.left)-Number(s)}`},"slow",function(){$(this).css("position","static")})}else if($(t.target).hasClass("arrow-right")){let t=$(`#${l-1}`);l-1==-1&&(t=$(`#${item.length-1}`));let r={top:`${o}`,left:`${-(Number(s)+i)}`};$(e).css("position","absolute").offset({top:o,left:s}).width(i).animate({left:`+=${-Number(r.left)+Number(s)}`},"slow",function(){$(this).css({position:"relative",width:"auto"}).hide(),clickCounter=0}),$(t).show(),$(t).offset(r),$(t).animate({left:`+=${-Number(r.left)+Number(s)}`},"slow",function(){$(this).css("position","static")})}}});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlY3Rpb24tZm9yay9zZWN0aW9uLWZvcmsuanMiLCJzZWN0aW9uLXNvY2lhbC9zZWN0aW9uLXNvY2lhbC5qcyJdLCJuYW1lcyI6WyIkIiwiY2xpY2siLCJlIiwidG9nZ2xlQ2xhc3MiLCJoZWFkZXIiLCJjc3MiLCJpdGVtIiwiYXJyb3ciLCJjbGlja0NvdW50ZXIiLCJpIiwibCIsImxlbmd0aCIsImF0dHIiLCJoaWRlIiwic2hvdyIsInZpc2libGUiLCJ2aXNpYmxlV2lkdGgiLCJ3aWR0aCIsIm9mZnNldFRvcCIsIm9mZnNldCIsInRvcCIsIm9mZnNldExlZnQiLCJsZWZ0IiwiaWRWaXNpYmxlIiwiTnVtYmVyIiwidGFyZ2V0IiwiaGFzQ2xhc3MiLCJzaG93SXRlbSIsIm9mZnNldE9iaiIsIndpbmRvdyIsImFuaW1hdGUiLCJ0aGlzIiwicG9zaXRpb24iXSwibWFwcGluZ3MiOiJBQUFBQSxFQUFBQSxFQUFBLHVCQUFBLElBQUFDLE1BQUEsU0FBQUMsR0FDQUYsRUFBQUEsRUFBQSx1QkFBQSxJQUFBRyxZQUFBLFVBQ0EsSUFBQUMsRUFBQUosRUFBQUEsRUFBQSxXQUFBLElBQ0EsV0FBQUksRUFBQUMsSUFBQSxZQUNBRCxFQUFBQyxJQUFBLFdBQUEsVUFHQUQsRUFBQUMsSUFBQSxXQUFBLGFDUEEsTUFBQUMsS0FBQU4sRUFBQSxrQkFDQU8sTUFBQVAsRUFBQSxVQUNBLElBQUFRLGFBQUEsRUFFQSxJQUFBLElBQUFDLEVBQUEsRUFBQUMsRUFBQUosS0FBQUssT0FBQUYsRUFBQUMsRUFBQUQsSUFDQVQsRUFBQU0sS0FBQUcsSUFBQUcsS0FBQSxRQUFBSCxLQUFBSixJQUFBLFdBQUEsWUFHQUwsRUFBQU0sTUFBQU8sT0FFQWIsRUFBQSxNQUFBYyxPQUVBUCxNQUFBTixNQUFBLFNBQUFDLEdBQ0EsR0FBQSxJQUFBTSxhQUFBLENBQ0FBLGVBQ0EsSUFBQU8sRUFBQWYsRUFBQSwwQkFBQSxHQUNBZ0IsRUFBQWhCLEVBQUFlLEdBQUFFLFFBQ0FDLEVBQUFsQixFQUFBZSxHQUFBSSxTQUFBQyxJQUNBQyxFQUFBckIsRUFBQWUsR0FBQUksU0FBQUcsS0FDQUMsRUFBQUMsT0FBQXhCLEVBQUFlLEdBQUFILEtBQUEsT0FDQSxHQUFBWixFQUFBRSxFQUFBdUIsUUFBQUMsU0FBQSxjQUFBLENBQ0EsSUFBQUMsRUFBQTNCLE1BQUF1QixFQUFBLEtBQ0FBLEVBQUEsSUFBQWpCLEtBQUFLLFNBQ0FnQixFQUFBM0IsRUFBQSxPQUVBLElBQUE0QixFQUFBLENBQUFSLE9BQUFGLElBQUFJLFFBQUF0QixFQUFBNkIsUUFBQVosV0FDQWpCLEVBQUFlLEdBQUFWLElBQUEsV0FBQSxZQUFBYyxPQUFBLENBQ0FDLElBQUFGLEVBQ0FJLEtBQUFELElBQ0FKLE1BQUFELEdBQUFjLFFBQUEsQ0FBQVIsVUFBQUUsT0FBQUksRUFBQU4sTUFBQUUsT0FBQUgsTUFBQSxPQUFBLFdBQ0FyQixFQUFBK0IsTUFBQTFCLElBQUEsQ0FBQTJCLFNBQUEsV0FBQWYsTUFBQSxTQUFBSixPQUNBTCxhQUFBLElBRUFSLEVBQUEyQixHQUFBYixPQUNBZCxFQUFBMkIsR0FBQVIsT0FBQVMsR0FDQTVCLEVBQUEyQixHQUFBRyxRQUFBLENBQUFSLFVBQUFFLE9BQUFJLEVBQUFOLE1BQUFFLE9BQUFILE1BQUEsT0FBQSxXQUNBckIsRUFBQStCLE1BQUExQixJQUFBLFdBQUEsaUJBRUEsR0FBQUwsRUFBQUUsRUFBQXVCLFFBQUFDLFNBQUEsZUFBQSxDQUNBLElBQUFDLEVBQUEzQixNQUFBdUIsRUFBQSxLQUNBQSxFQUFBLElBQUEsSUFDQUksRUFBQTNCLE1BQUFNLEtBQUFLLE9BQUEsTUFFQSxJQUFBaUIsRUFBQSxDQUFBUixPQUFBRixJQUFBSSxVQUFBRSxPQUFBSCxHQUFBTCxNQUNBaEIsRUFBQWUsR0FBQVYsSUFBQSxXQUFBLFlBQUFjLE9BQUEsQ0FDQUMsSUFBQUYsRUFDQUksS0FBQUQsSUFDQUosTUFBQUQsR0FBQWMsUUFBQSxDQUFBUixXQUFBRSxPQUFBSSxFQUFBTixNQUFBRSxPQUFBSCxNQUFBLE9BQUEsV0FDQXJCLEVBQUErQixNQUFBMUIsSUFBQSxDQUFBMkIsU0FBQSxXQUFBZixNQUFBLFNBQUFKLE9BQ0FMLGFBQUEsSUFFQVIsRUFBQTJCLEdBQUFiLE9BQ0FkLEVBQUEyQixHQUFBUixPQUFBUyxHQUNBNUIsRUFBQTJCLEdBQUFHLFFBQUEsQ0FBQVIsV0FBQUUsT0FBQUksRUFBQU4sTUFBQUUsT0FBQUgsTUFBQSxPQUFBLFdBQ0FyQixFQUFBK0IsTUFBQTFCLElBQUEsV0FBQSIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIkKCQoJy5oZWFkZXJfX25hdmJhci1uYXYnKVswXSkuY2xpY2soZnVuY3Rpb24oZSl7XG5cdFx0JCgkKCcuaGVhZGVyX19uYXZiYXItbmF2JylbMF0pLnRvZ2dsZUNsYXNzKCdhY3RpdmUnKTtcblx0XHRsZXQgaGVhZGVyID0gJCgkKCcuaGVhZGVyJylbMF0pXG5cdFx0aWYoaGVhZGVyLmNzcygnb3ZlcmZsb3cnKSA9PSAndmlzaWJsZScpe1xuXHRcdFx0aGVhZGVyLmNzcygnb3ZlcmZsb3cnLCdoaWRkZW4nKVxuXHRcdH1cblx0XHRlbHNle1xuXHRcdFx0aGVhZGVyLmNzcygnb3ZlcmZsb3cnLCd2aXNpYmxlJylcblx0XHR9XG59KSIsImNvbnN0IGl0ZW0gPSAkKCcuY2Fyb3VzZWwtaXRlbScpO1xuY29uc3QgYXJyb3cgPSAkKCcuYXJyb3cnKTtcbmxldCBjbGlja0NvdW50ZXIgPSAwO1xuXG5mb3IgKGxldCBpID0gMCwgbCA9IGl0ZW0ubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgJChpdGVtW2ldKS5hdHRyKCdpZCcsIGAke2l9YCkuY3NzKCdwb3NpdGlvbicsICdyZWxhdGl2ZScpO1xufVxuXG4kKGl0ZW0pLmhpZGUoKTtcblxuJCgnIzInKS5zaG93KCk7XG5cbmFycm93LmNsaWNrKGZ1bmN0aW9uIChlKSB7XG4gICAgaWYgKGNsaWNrQ291bnRlciA9PT0gMCkge1xuICAgICAgICBjbGlja0NvdW50ZXIrKztcbiAgICAgICAgbGV0IHZpc2libGUgPSAkKCcuY2Fyb3VzZWwtaXRlbTp2aXNpYmxlJylbMF07XG4gICAgICAgIGxldCB2aXNpYmxlV2lkdGggPSAkKHZpc2libGUpLndpZHRoKCk7XG4gICAgICAgIGxldCBvZmZzZXRUb3AgPSAkKHZpc2libGUpLm9mZnNldCgpLnRvcDtcbiAgICAgICAgbGV0IG9mZnNldExlZnQgPSAkKHZpc2libGUpLm9mZnNldCgpLmxlZnQ7XG4gICAgICAgIGxldCBpZFZpc2libGUgPSBOdW1iZXIoJCh2aXNpYmxlKS5hdHRyKCdpZCcpKTtcbiAgICAgICAgaWYgKCQoZS50YXJnZXQpLmhhc0NsYXNzKCdhcnJvdy1sZWZ0JykpIHtcbiAgICAgICAgICAgIGxldCBzaG93SXRlbSA9ICQoYCMke2lkVmlzaWJsZSArIDF9YCk7XG4gICAgICAgICAgICBpZiAoaWRWaXNpYmxlICsgMSA9PT0gaXRlbS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBzaG93SXRlbSA9ICQoYCMwYCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXQgb2Zmc2V0T2JqID0ge3RvcDogYCR7b2Zmc2V0VG9wfWAsIGxlZnQ6IGAkeyQod2luZG93KS53aWR0aCgpfWB9O1xuICAgICAgICAgICAgJCh2aXNpYmxlKS5jc3MoJ3Bvc2l0aW9uJywgJ2Fic29sdXRlJykub2Zmc2V0KHtcbiAgICAgICAgICAgICAgICB0b3A6IG9mZnNldFRvcCxcbiAgICAgICAgICAgICAgICBsZWZ0OiBvZmZzZXRMZWZ0XG4gICAgICAgICAgICB9KS53aWR0aCh2aXNpYmxlV2lkdGgpLmFuaW1hdGUoe2xlZnQ6IGAtPSR7TnVtYmVyKG9mZnNldE9iai5sZWZ0KSAtIE51bWJlcihvZmZzZXRMZWZ0KX1gfSwgJ3Nsb3cnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgJCh0aGlzKS5jc3Moe3Bvc2l0aW9uOiAncmVsYXRpdmUnLCB3aWR0aDogJ2F1dG8nfSkuaGlkZSgpO1xuICAgICAgICAgICAgICAgIGNsaWNrQ291bnRlciA9IDA7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICQoc2hvd0l0ZW0pLnNob3coKTtcbiAgICAgICAgICAgICQoc2hvd0l0ZW0pLm9mZnNldChvZmZzZXRPYmopO1xuICAgICAgICAgICAgJChzaG93SXRlbSkuYW5pbWF0ZSh7bGVmdDogYC09JHtOdW1iZXIob2Zmc2V0T2JqLmxlZnQpIC0gTnVtYmVyKG9mZnNldExlZnQpfWB9LCAnc2xvdycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAkKHRoaXMpLmNzcygncG9zaXRpb24nLCAnc3RhdGljJyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIGlmICgkKGUudGFyZ2V0KS5oYXNDbGFzcygnYXJyb3ctcmlnaHQnKSkge1xuICAgICAgICAgICAgbGV0IHNob3dJdGVtID0gJChgIyR7aWRWaXNpYmxlIC0gMX1gKTtcbiAgICAgICAgICAgIGlmIChpZFZpc2libGUgLSAxID09PSAtMSkge1xuICAgICAgICAgICAgICAgIHNob3dJdGVtID0gJChgIyR7aXRlbS5sZW5ndGggLSAxfWApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGV0IG9mZnNldE9iaiA9IHt0b3A6IGAke29mZnNldFRvcH1gLCBsZWZ0OiBgJHstKE51bWJlcihvZmZzZXRMZWZ0KSArIHZpc2libGVXaWR0aCl9YH07XG4gICAgICAgICAgICAkKHZpc2libGUpLmNzcygncG9zaXRpb24nLCAnYWJzb2x1dGUnKS5vZmZzZXQoe1xuICAgICAgICAgICAgICAgIHRvcDogb2Zmc2V0VG9wLFxuICAgICAgICAgICAgICAgIGxlZnQ6IG9mZnNldExlZnRcbiAgICAgICAgICAgIH0pLndpZHRoKHZpc2libGVXaWR0aCkuYW5pbWF0ZSh7bGVmdDogYCs9JHstTnVtYmVyKG9mZnNldE9iai5sZWZ0KSArIE51bWJlcihvZmZzZXRMZWZ0KX1gfSwgJ3Nsb3cnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgJCh0aGlzKS5jc3Moe3Bvc2l0aW9uOiAncmVsYXRpdmUnLCB3aWR0aDogJ2F1dG8nfSkuaGlkZSgpO1xuICAgICAgICAgICAgICAgIGNsaWNrQ291bnRlciA9IDA7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICQoc2hvd0l0ZW0pLnNob3coKTtcbiAgICAgICAgICAgICQoc2hvd0l0ZW0pLm9mZnNldChvZmZzZXRPYmopO1xuICAgICAgICAgICAgJChzaG93SXRlbSkuYW5pbWF0ZSh7bGVmdDogYCs9JHstTnVtYmVyKG9mZnNldE9iai5sZWZ0KSArIE51bWJlcihvZmZzZXRMZWZ0KX1gfSwgJ3Nsb3cnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgJCh0aGlzKS5jc3MoJ3Bvc2l0aW9uJywgJ3N0YXRpYycpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG59KTtcblxuXG5cbiJdfQ==
